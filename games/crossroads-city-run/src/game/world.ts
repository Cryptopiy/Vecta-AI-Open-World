import * as THREE from 'three';
import type { Box, Pedestrian, Vec2, Vehicle } from './types';
import { DESTINATION, MISSION_CAR, START_MARK } from './types';

const mat = (color: number, roughness = 0.83, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
const asphalt = mat(0x222c35), concrete = mat(0x9aa5a7), grass = mat(0x263d34), line = mat(0xf4db8c);

function facadeTexture(color: number, seed: number, emissive=false) {
  const canvas=document.createElement('canvas'); canvas.width=256; canvas.height=256;
  const context=canvas.getContext('2d')!;
  const base=new THREE.Color(color);
  let state=seed|0;
  const random=()=>{state=(state*1664525+1013904223)|0;return (state>>>0)/4294967296;};
  context.fillStyle=emissive?'#000000':`#${base.getHexString()}`; context.fillRect(0,0,256,256);
  if(!emissive) {
    // Fine aggregate and weathering keep large walls from reading as flat plastic.
    for(let i=0;i<2200;i++) {
      const shade=random()>.5?255:0, alpha=0.018+random()*0.035;
      context.fillStyle=`rgba(${shade},${shade},${shade},${alpha})`;
      context.fillRect(random()*256,random()*256,1+random()*2,1+random()*2);
    }
    context.fillStyle='rgba(20,29,34,.16)';
    for(let y=0;y<256;y+=64) context.fillRect(0,y,256,2);
    for(let x=0;x<256;x+=64) context.fillRect(x,0,2,256);
    const grime=context.createLinearGradient(0,0,0,256);
    grime.addColorStop(0,'rgba(255,255,255,.07)'); grime.addColorStop(.7,'rgba(0,0,0,0)'); grime.addColorStop(1,'rgba(20,25,25,.14)');
    context.fillStyle=grime; context.fillRect(0,0,256,256);
  }
  for(let row=0;row<4;row++) for(let column=0;column<4;column++) {
    const x=10+column*64,y=12+row*64,lit=random()>.7;
    context.fillStyle=emissive?(lit?'#8aa59a':'#050708'):'#263841'; context.fillRect(x,y,43,38);
    if(!emissive) {
      const glass=context.createLinearGradient(x,y,x+43,y+38);
      glass.addColorStop(0,lit?'#b7c9bd':'#54717b'); glass.addColorStop(.48,lit?'#829a91':'#344e59'); glass.addColorStop(.52,'#20333c'); glass.addColorStop(1,'#49636c');
      context.fillStyle=glass; context.fillRect(x+3,y+3,37,32);
      context.fillStyle='rgba(13,24,29,.62)'; context.fillRect(x+20,y+3,3,32);
      context.fillStyle='rgba(235,245,238,.13)'; context.fillRect(x+4,y+4,13,2);
      context.fillStyle='rgba(16,22,24,.28)'; context.fillRect(x,y+40,43,3);
    }
  }
  const texture=new THREE.CanvasTexture(canvas);
  texture.colorSpace=THREE.SRGBColorSpace;
  texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
  texture.magFilter=THREE.LinearFilter;
  texture.anisotropy=4;
  return texture;
}

function buildingMaterials(box: Box) {
  const seed=Math.round((box.x+110)*31+(box.z+110)*17+box.height*13);
  const sideMap=facadeTexture(box.color,seed), glowMap=facadeTexture(box.color,seed,true);
  sideMap.repeat.set(Math.max(1,box.hz/8),Math.max(1,box.height/16));
  glowMap.repeat.copy(sideMap.repeat);
  const frontMap=sideMap.clone(), frontGlow=glowMap.clone();
  frontMap.repeat.set(Math.max(1,box.hx/8),Math.max(1,box.height/16)); frontMap.needsUpdate=true;
  frontGlow.repeat.copy(frontMap.repeat); frontGlow.needsUpdate=true;
  const make=(map:THREE.Texture,emissiveMap:THREE.Texture)=>new THREE.MeshStandardMaterial({
    color:0xffffff,map,emissive:0xffdca3,emissiveMap,emissiveIntensity:0.28,roughness:0.76,metalness:0.03
  });
  const side=make(sideMap,glowMap),front=make(frontMap,frontGlow),roof=mat(0x27343a,0.9);
  return [side,side,roof,roof,front,front];
}
function cube(w: number, h: number, d: number, material: THREE.Material | THREE.Material[], x=0, y=0, z=0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);
  mesh.position.set(x,y,z); mesh.castShadow=true; mesh.receiveShadow=true; return mesh;
}
function plane(w: number, d: number, material: THREE.Material, y=0) {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w,d),material);
  mesh.rotation.x=-Math.PI/2; mesh.position.y=y; mesh.receiveShadow=true; return mesh;
}
function addBox(scene: THREE.Scene, boxes: Box[], box: Box) {
  boxes.push(box);
  const group = new THREE.Group(); group.position.set(box.x,0,box.z);
  const body = cube(box.hx*2,box.height,box.hz*2,box.kind==='building'?buildingMaterials(box):mat(box.color),0,box.height/2,0); group.add(body);
  if (box.kind==='building') {
    const dark=mat(0x17232e,0.78,0.08),metal=mat(0x52636a,0.55,0.35);
    group.add(cube(box.hx*2+0.55,0.55,box.hz*2+0.55,dark,0,box.height+0.25,0));
    // Cornices, a grounded entrance, and roof plant add readable scale and silhouettes.
    for(let y=4;y<box.height-2;y+=8) group.add(cube(box.hx*2+0.18,0.14,box.hz*2+0.18,dark,0,y,0));
    group.add(cube(2.8,2.8,0.34,dark,0,1.4,box.hz+0.2));
    group.add(cube(1.9,2.25,0.08,mat(0x476471,0.22,0.18),0,1.3,box.hz+0.4));
    group.add(cube(3.6,0.18,1.15,dark,0,2.95,box.hz+0.48));
    const roofX=box.hx*.34,roofZ=-box.hz*.18;
    group.add(cube(3.8,1.25,2.5,metal,roofX,box.height+1.15,roofZ));
    group.add(cube(0.65,2.1,0.65,dark,-box.hx*.35,box.height+1.55,box.hz*.2));
  }
  scene.add(group);
}
export function makeWorld(scene: THREE.Scene): Box[] {
  scene.background = new THREE.Color(0x89a8ba);
  scene.fog = new THREE.Fog(0x89a8ba,105,235);
  scene.add(new THREE.HemisphereLight(0xeaf4ff,0x30443a,2.0));
  const sun = new THREE.DirectionalLight(0xffe8c5,2.5); sun.position.set(-32,75,-42); sun.castShadow=true;
  sun.shadow.mapSize.set(2048,2048); sun.shadow.camera.left=-110; sun.shadow.camera.right=110; sun.shadow.camera.top=110; sun.shadow.camera.bottom=-110; sun.shadow.bias=-0.00025;
  scene.add(sun);
  scene.add(plane(210,210,grass,-0.08));
  const boxes: Box[]=[];
  for (const n of [-48,0,48]) {
    const swX=cube(20,0.14,202,concrete,n,0.02,0), swZ=cube(202,0.14,20,concrete,0,0.02,n);
    scene.add(swX,swZ);
    scene.add(cube(12,0.035,202,asphalt,n,0.12,0),cube(202,0.035,12,asphalt,0,0.12,n));
    for (let p=-94;p<95;p+=11) {
      if ([-48,0,48].some(c=>Math.abs(p-c)<10)) continue;
      scene.add(cube(0.22,0.04,4.4,line,n,0.15,p),cube(4.4,0.04,0.22,line,p,0.15,n));
    }
  }
  // The southwest block is a traversable plaza and mission staging area.
  scene.add(cube(27,0.14,27,mat(0x777f80),-24,0.04,-24));
  scene.add(cube(11,0.04,7,mat(0xa3aaa1),-27,0.14,-27));
  const buildingData: [number,number,number,number,number,number][] = [
    [-74,-74,11,10,24,0x657b89],[-24,-74,10,10,33,0x997d71],[24,-74,10,11,20,0x738e89],[74,-74,11,10,29,0x7d8196],
    [-74,-24,11,11,28,0x9b8a75],[24,-24,10,10,38,0x777f98],[74,-24,11,11,23,0x89988a],
    [-74,24,11,10,20,0x718b93],[-24,24,11,11,27,0xa4947c],[24,24,11,10,31,0x757f85],[74,24,11,11,34,0x708690],
    [-74,74,11,11,34,0x7e8b92],[-24,74,10,11,23,0x9c8a7c],[24,74,11,10,29,0x778d8a],[74,74,11,11,37,0x8a8192]
  ];
  for (const [x,z,hx,hz,height,color] of buildingData) addBox(scene,boxes,{x,z,hx,hz,height,color,kind:'building'});
  // Low solid objects make the open spaces readable and test collision response.
  [[-10,15,2.2,2.2],[-36,15,2,2],[14,65,2.8,2],[-70,2,2.2,2.2],[12,-65,2.2,2.2]].forEach(([x,z,hx,hz])=>addBox(scene,boxes,{x,z,hx,hz,height:2,color:0x5e6a62,kind:'obstacle'}));
  const lampMat=mat(0x354a54), glow=new THREE.MeshStandardMaterial({color:0xffe5a0,emissive:0xffc35a,emissiveIntensity:1.5});
  for (const x of [-58,-10,38,58]) for (const z of [-58,-10,38,58]) {
    if (x===-10&&z===-10) continue;
    scene.add(cube(0.28,6.6,0.28,lampMat,x,3.3,z),cube(1.5,0.28,0.7,glow,x+0.65,6.58,z));
  }
  // Marked start and destination are 3D rings with beams visible from a distance.
  marker(scene,START_MARK,0x49e2c0,1.8);
  marker(scene,DESTINATION,0xffc963,3.8);
  marker(scene,MISSION_CAR,0x66d5ff,2.3);
  return boxes;
}
function marker(scene: THREE.Scene, at: Vec2, color: number, radius: number) {
  const material = new THREE.MeshBasicMaterial({color,transparent:true,opacity:0.8,depthWrite:false});
  const ring = new THREE.Mesh(new THREE.TorusGeometry(radius,0.16,8,50),material); ring.rotation.x=Math.PI/2; ring.position.set(at.x,0.27,at.z); scene.add(ring);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(radius*0.72,radius*0.72,10,24,1,true),new THREE.MeshBasicMaterial({color,transparent:true,opacity:0.075,side:THREE.DoubleSide,depthWrite:false}));
  beam.position.set(at.x,5.2,at.z); scene.add(beam);
  ring.userData.marker=true; ring.userData.baseY=0.27;
}
export function animateMarkers(scene: THREE.Scene, time: number, stage: string) {
  scene.traverse(object=>{
    if (!object.userData.marker) return;
    const x=object.position.x, z=object.position.z;
    const active = (stage==='start'&&x===START_MARK.x&&z===START_MARK.z)||(stage==='car'&&x===MISSION_CAR.x&&z===MISSION_CAR.z)||(stage==='delivery'&&x===DESTINATION.x&&z===DESTINATION.z);
    object.visible=active; object.position.y=object.userData.baseY+Math.sin(time*2.8)*0.13;
    const beam=scene.children.find(o=>o!==object&&o.type==='Mesh'&&Math.abs(o.position.x-x)<0.01&&Math.abs(o.position.z-z)<0.01&&o.position.y>4);
    if (beam) beam.visible=active;
  });
}
type CarRig = { frontWheels: [THREE.Group,THREE.Group]; steering: number };
const carRigs = new WeakMap<THREE.Group,CarRig>();

export function createCar(color: number, police=false): THREE.Group {
  const g=new THREE.Group();
  const body=mat(color,0.42,0.38), trim=mat(0x182129,0.3,0.35), tire=mat(0x0d1114,0.92), rim=mat(0x9ca7ac,0.25,0.75);
  const glass=new THREE.MeshStandardMaterial({color:0x294657,roughness:0.18,metalness:0.18,transparent:true,opacity:0.82});
  const headlight=new THREE.MeshStandardMaterial({color:0xfff1c4,emissive:0xffd36b,emissiveIntensity:0.65,roughness:0.2});
  const tailLight=new THREE.MeshStandardMaterial({color:0xd72f38,emissive:0xaa1620,emissiveIntensity:0.55,roughness:0.28});

  // Layered body panels give the silhouette a hood, trunk, sills and shaped cabin.
  g.add(cube(2.2,0.58,4.1,body,0,0.72,0),cube(2.05,0.18,1.22,body,0,1.08,1.32),cube(2.03,0.18,0.92,body,0,1.05,-1.58));
  g.add(cube(2.12,0.14,3.0,body,0,1.02,-0.05),cube(2.28,0.18,0.22,trim,0,0.48,2.08),cube(2.28,0.18,0.22,trim,0,0.48,-2.08));
  g.add(cube(2.22,0.15,2.65,trim,0,0.42,-0.08));
  for (const side of [-1,1]) {
    g.add(cube(0.12,0.23,2.85,body,side*1.08,0.65,-0.03));
    g.add(cube(0.13,0.12,1.3,trim,side*1.12,0.35,-0.02));
  }

  // Cabin, pillars and individually readable windows.
  g.add(cube(1.78,0.62,1.86,glass,0,1.39,-0.2),cube(1.72,0.1,1.72,body,0,1.74,-0.24));
  g.add(cube(1.86,0.67,0.12,glass,0,1.39,0.77),cube(1.86,0.66,0.12,glass,0,1.39,-1.17));
  for (const side of [-1,1]) {
    g.add(cube(0.1,0.58,0.72,glass,side*0.91,1.39,0.34),cube(0.1,0.58,0.7,glass,side*0.91,1.39,-0.75));
    g.add(cube(0.11,0.68,0.1,trim,side*0.92,1.4,-0.2));
    g.add(cube(0.32,0.16,0.24,trim,side*1.18,1.28,0.54));
    g.add(cube(0.06,0.22,1.45,trim,side*1.14,0.91,-0.25));
  }
  g.add(cube(0.09,0.18,0.82,trim,0,1.16,-0.28)); // dashboard
  g.add(cube(0.07,0.46,0.07,trim,-0.42,1.42,0.48));
  const steeringWheel=new THREE.Mesh(new THREE.TorusGeometry(0.19,0.035,7,16),trim);
  steeringWheel.rotation.x=Math.PI/2; steeringWheel.position.set(-0.42,1.45,0.5); g.add(steeringWheel);

  for (const x of [-0.68,0.68]) {
    g.add(cube(0.5,0.22,0.09,headlight,x,0.82,2.1),cube(0.46,0.24,0.09,tailLight,x,0.82,-2.1));
  }
  g.add(cube(0.68,0.1,0.1,trim,0,0.72,2.12),cube(0.56,0.1,0.1,trim,0,0.7,-2.12));
  const frontWheels: THREE.Group[]=[];
  for (const z of [-1.3,1.3]) for (const x of [-1.13,1.13]) {
    const pivot=new THREE.Group(); pivot.position.set(x,0.45,z);
    const wheel=new THREE.Mesh(new THREE.CylinderGeometry(0.44,0.44,0.27,20),tire);
    wheel.rotation.z=Math.PI/2; wheel.castShadow=true; pivot.add(wheel);
    const hub=new THREE.Mesh(new THREE.CylinderGeometry(0.23,0.23,0.285,12),rim);
    hub.rotation.z=Math.PI/2; hub.castShadow=true; pivot.add(hub);
    const cap=new THREE.Mesh(new THREE.CylinderGeometry(0.075,0.075,0.3,12),trim);
    cap.rotation.z=Math.PI/2; pivot.add(cap);
    g.add(pivot);
    if(z>0)frontWheels.push(pivot);
  }
  if (police) {
    g.add(cube(2.08,0.22,0.2,mat(0x172b48,0.35,0.45),0,0.88,0.05));
    g.add(cube(0.56,0.2,0.48,new THREE.MeshStandardMaterial({color:0xff374c,emissive:0xff243d,emissiveIntensity:0.9}),-0.4,1.9,0),cube(0.56,0.2,0.48,new THREE.MeshStandardMaterial({color:0x3c8bff,emissive:0x1a64ff,emissiveIntensity:0.9}),0.4,1.9,0));
  }
  carRigs.set(g,{frontWheels:frontWheels as [THREE.Group,THREE.Group],steering:0});
  return g;
}

export function animateCar(mesh: THREE.Group, steering: number) {
  const rig=carRigs.get(mesh); if(!rig)return;
  rig.steering+=(steering-rig.steering)*0.22;
  for(const wheel of rig.frontWheels)wheel.rotation.y=rig.steering;
}
type CharacterRig = { legs: [THREE.Group, THREE.Group]; knees: [THREE.Group, THREE.Group]; arms: [THREE.Group, THREE.Group]; body: THREE.Group; phase: number; stride: number };
const characterRigs = new WeakMap<THREE.Group, CharacterRig>();

export function createPedestrian(color: number, player=false, variant=0): THREE.Group {
  const g=new THREE.Group(), body=new THREE.Group(); g.add(body);
  const shirt=mat(color), trim=mat(player?0xd4fff3:0xd8d4c9), skin=mat([0xe8b99a,0xc88d6e,0xf0c7a7,0xa97658][variant%4]);
  const trouser=mat(player?0x23394e:0x304144), shoes=mat(player?0x18252f:0x303037), hair=mat([0x342a29,0x24272b,0x6b4935,0x4b382d][variant%4]);
  const eyes=mat(0x20272b), mouth=mat(0x8b554c);
  body.add(cube(0.72,0.88,0.43,shirt,0,1.49,0),cube(0.66,0.25,0.41,trouser,0,0.99,0));
  body.add(cube(0.36,0.09,0.25,trim,0,1.96,0.02));
  const head=new THREE.Mesh(new THREE.SphereGeometry(0.31,14,10),skin); head.position.set(0,2.23,0); head.castShadow=true; body.add(head);
  const hairCap=new THREE.Mesh(new THREE.SphereGeometry(0.32,14,8,0,Math.PI*2,0,Math.PI/2),hair);
  hairCap.position.set(0,2.29,0); hairCap.castShadow=true; body.add(hairCap);
  body.add(cube(0.48,0.09,0.13,hair,0,2.46,0.22));
  for(const side of [-1,1]) {
    const eye=new THREE.Mesh(new THREE.SphereGeometry(0.035,8,6),eyes);
    eye.position.set(side*0.115,2.25,0.287); body.add(eye);
    body.add(cube(0.105,0.025,0.025,hair,side*0.115,2.34,0.292));
    const ear=new THREE.Mesh(new THREE.SphereGeometry(0.07,8,6),skin);
    ear.position.set(side*0.305,2.22,0); body.add(ear);
  }
  const nose=new THREE.Mesh(new THREE.SphereGeometry(0.045,8,6),skin);
  nose.position.set(0,2.15,0.315); body.add(nose);
  body.add(cube(0.16,0.025,0.025,mouth,0,2.055,0.292));

  const legs: [THREE.Group,THREE.Group]=[new THREE.Group(),new THREE.Group()];
  const knees: [THREE.Group,THREE.Group]=[new THREE.Group(),new THREE.Group()];
  const arms: [THREE.Group,THREE.Group]=[new THREE.Group(),new THREE.Group()];
  for(const index of [0,1] as const) {
    const side=index===0?-1:1;
    const leg=legs[index], knee=knees[index], arm=arms[index];
    leg.position.set(side*0.19,1.04,0);
    leg.add(cube(0.27,0.48,0.3,trouser,0,-0.24,0));
    knee.position.y=-0.46;
    knee.add(cube(0.25,0.46,0.27,trouser,0,-0.23,0));
    knee.add(cube(0.3,0.17,0.43,shoes,0,-0.5,0.085));
    leg.add(knee); body.add(leg);
    arm.position.set(side*0.46,1.87,0);
    arm.add(cube(0.24,0.46,0.29,shirt,0,-0.23,0));
    arm.add(cube(0.19,0.29,0.22,skin,0,-0.59,0));
    const hand=new THREE.Mesh(new THREE.SphereGeometry(0.12,9,7),skin);
    hand.position.y=-0.78; hand.castShadow=true; arm.add(hand); body.add(arm);
  }
  if (player) {
    body.add(cube(0.54,0.65,0.19,mat(0x2b5361),0,1.48,-0.34));
    const arrow=new THREE.Mesh(new THREE.ConeGeometry(0.32,0.5,4),mat(0xffda72));
    arrow.rotation.x=Math.PI/2; arrow.position.set(0,2.85,0.35); g.add(arrow);
  }
  characterRigs.set(g,{legs,knees,arms,body,phase:0,stride:0});
  return g;
}

export function animatePedestrian(mesh: THREE.Group, dt: number, speed: number) {
  const rig=characterRigs.get(mesh); if(!rig)return;
  const target=Math.min(speed/2.4,1);
  rig.stride+= (target-rig.stride)*Math.min(1,dt*10);
  if(speed>0.05)rig.phase+=(4+speed*1.7)*dt;
  const swing=Math.sin(rig.phase)*rig.stride;
  rig.legs[0].rotation.x=swing*0.65;
  rig.legs[1].rotation.x=-swing*0.65;
  rig.knees[0].rotation.x=Math.max(0,-swing)*0.52;
  rig.knees[1].rotation.x=Math.max(0,swing)*0.52;
  rig.arms[0].rotation.x=-swing*0.5;
  rig.arms[1].rotation.x=swing*0.5;
  rig.body.position.y=rig.stride*(0.025+Math.abs(Math.cos(rig.phase))*0.035);
}
export function syncVehicle(v: Vehicle) { v.mesh.position.set(v.x,0.14,v.z); v.mesh.rotation.y=v.angle; }
export function syncPedestrian(p: Pedestrian) { p.mesh.position.set(p.x,0.14,p.z); p.mesh.rotation.y=p.angle; }
