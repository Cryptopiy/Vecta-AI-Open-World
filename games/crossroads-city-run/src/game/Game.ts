import * as THREE from 'three';
import { Input } from './input';
import { angleDelta, angleTo, approach, carBox, carCar, circleBox, circleCar, clamp, distance } from './math';
import { animateCar, animateMarkers, animatePedestrian, createCar, createPedestrian, makeWorld, syncPedestrian, syncVehicle } from './world';
import type { Box, HUD, MissionStage, Pedestrian, Vec2, Vehicle } from './types';
import { DESTINATION, MISSION_CAR, START, START_MARK, WORLD_LIMIT } from './types';

const pedestrianPaths: Vec2[][] = [
  [{x:-36,z:-37},{x:-12,z:-37},{x:-12,z:-12},{x:-36,z:-12}],
  [{x:12,z:-36},{x:36,z:-36},{x:36,z:-12},{x:12,z:-12}],
  [{x:-36,z:12},{x:-12,z:12},{x:-12,z:36},{x:-36,z:36}],
  [{x:12,z:12},{x:36,z:12},{x:36,z:36},{x:12,z:36}],
  [{x:60,z:12},{x:84,z:12},{x:84,z:36},{x:60,z:36}],
  [{x:-84,z:12},{x:-60,z:12},{x:-60,z:36},{x:-84,z:36}],
  [{x:60,z:-36},{x:84,z:-36},{x:84,z:-12},{x:60,z:-12}]
];
const trafficPaths: Vec2[][] = [
  [{x:-50,z:-50},{x:2,z:-50},{x:2,z:2},{x:-50,z:2}],
  [{x:50,z:-50},{x:50,z:2},{x:2,z:2},{x:2,z:-50}],
  [{x:-50,z:2},{x:2,z:2},{x:2,z:50},{x:-50,z:50}],
  [{x:2,z:50},{x:50,z:50},{x:50,z:2},{x:2,z:2}],
  [{x:-50,z:50},{x:50,z:50},{x:50,z:-50},{x:-50,z:-50}]
];

export class Game {
  private scene = new THREE.Scene();
  private renderer: THREE.WebGLRenderer;
  private camera = new THREE.PerspectiveCamera(57,1,0.1,320);
  private cameraYaw=Math.PI;
  private cameraPitch=0.57;
  private draggingCamera=false;
  private mousePosition: {x:number;y:number}|null=null;
  private input = new Input();
  private boxes: Box[];
  private vehicles: Vehicle[]=[];
  private pedestrians: Pedestrian[]=[];
  private playerMesh = createPedestrian(0x56dcc4,true);
  private player: Vec2 = {...START};
  private playerAngle = 0;
  private currentCar: Vehicle | null = null;
  private mission: MissionStage='start';
  private wanted=false;
  private wantedTimer=0;
  private police: Vehicle | null=null;
  private toast='';
  private toastTimer=0;
  private elapsed=0;
  private lastTime=0;
  private frame=0;
  private raf=0;
  private onResize=()=>this.resize();
  constructor(private host: HTMLElement, private onHUD: (hud: HUD)=>void) {
    this.renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    this.renderer.shadowMap.enabled=true;
    this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure=1.55;
    host.appendChild(this.renderer.domElement);
    this.renderer.domElement.tabIndex=0;
    this.renderer.domElement.addEventListener('pointerdown',this.onPointerDown);
    this.renderer.domElement.addEventListener('mouseleave',this.onMouseLeave);
    window.addEventListener('pointerup',this.onPointerUp);
    window.addEventListener('mousemove',this.onMouseMove);
    this.boxes=makeWorld(this.scene);
    this.scene.add(this.playerMesh);
    this.createEntities();
    this.resize(); window.addEventListener('resize',this.onResize);
    this.camera.position.set(START.x,15,START.z+21);
    this.lastTime=performance.now(); this.raf=requestAnimationFrame(this.tick);
  }
  private addVehicle(id:string,x:number,z:number,angle:number,color:number,kind:Vehicle['kind'],route?:Vec2[]): Vehicle {
    const mesh=createCar(color,kind==='police'); this.scene.add(mesh);
    const vehicle:Vehicle={id,x,z,angle,speed:0,steering:0,length:4.15,width:2.25,color,kind,mesh,route,waypoint:route?1:undefined,blocked:0};
    this.vehicles.push(vehicle); syncVehicle(vehicle); return vehicle;
  }
  private createEntities() {
    this.addVehicle('mission',MISSION_CAR.x,MISSION_CAR.z,0,0xf5b448,'parked');
    this.addVehicle('park-1',-55,-25,0,0x689da8,'parked');
    this.addVehicle('park-2',24,7,Math.PI/2,0xb88979,'parked');
    this.addVehicle('park-3',58,69,Math.PI,0xa3aa73,'parked');
    trafficPaths.forEach((route,i)=>{
      const p=route[0], next=route[1];
      this.addVehicle(`traffic-${i}`,p.x,p.z,angleTo(p,next),[0xc66867,0x8e7bb0,0x70b5a8,0xc7a36a,0x7391b1][i],'traffic',route);
    });
    pedestrianPaths.forEach((route,i)=>{
      const offset=i%2===0?0:1, p=route[offset];
      const mesh=createPedestrian([0xe8a071,0x85b5cb,0xd3a978,0xb08bc5,0x9fc778,0xdd7f89,0x89c2bc][i],false,i);
      this.scene.add(mesh);
      const ped:Pedestrian={x:p.x,z:p.z,angle:0,speed:1.2+(i%3)*0.23,mesh,route,waypoint:(offset+1)%route.length,wait:i*0.3,flee:0};
      this.pedestrians.push(ped); syncPedestrian(ped);
    });
  }
  private resize() {
    const width=this.host.clientWidth||window.innerWidth,height=this.host.clientHeight||window.innerHeight;
    this.renderer.setSize(width,height,false); this.camera.aspect=width/height; this.camera.updateProjectionMatrix();
  }
  private onPointerDown=(event:PointerEvent)=>{
    if(event.button!==0)return;
    this.renderer.domElement.focus();
    this.draggingCamera=true;
    this.mousePosition={x:event.clientX,y:event.clientY};
    void Promise.resolve(this.renderer.domElement.requestPointerLock()).catch(()=>{
      // Dragging still rotates the camera when pointer lock is unavailable.
    });
  };
  private onPointerUp=()=>{this.draggingCamera=false;};
  private onMouseLeave=()=>{if(!this.draggingCamera)this.mousePosition=null;};
  private onMouseMove=(event:MouseEvent)=>{
    const locked=document.pointerLockElement===this.renderer.domElement;
    if(!locked&&!this.draggingCamera&&event.target!==this.renderer.domElement){this.mousePosition=null;return;}
    const dx=locked?event.movementX:this.mousePosition?event.clientX-this.mousePosition.x:0;
    const dy=locked?event.movementY:this.mousePosition?event.clientY-this.mousePosition.y:0;
    this.mousePosition=locked?null:{x:event.clientX,y:event.clientY};
    this.cameraYaw+=dx*0.0025;
    this.cameraPitch=clamp(this.cameraPitch-dy*0.0025,0.08,1.35);
  };
  private pedestrianBlocked(x:number,z:number,p:Pedestrian):boolean {
    return Math.abs(x)>WORLD_LIMIT||Math.abs(z)>WORLD_LIMIT||this.boxes.some(b=>circleBox(x,z,0.43,b))||this.vehicles.some(v=>v!==this.currentCar&&circleCar(x,z,0.43,v))|| (this.currentCar!==null&&circleCar(x,z,0.43,this.currentCar)) || this.pedestrians.some(other=>other!==p&&distance({x,z},other)<0.65);
  }
  private footBlocked(x:number,z:number,except?:Vehicle):boolean {
    return Math.abs(x)>WORLD_LIMIT||Math.abs(z)>WORLD_LIMIT||this.boxes.some(b=>circleBox(x,z,0.48,b))||this.vehicles.some(v=>v!==except&&circleCar(x,z,0.48,v));
  }
  private carBlocked(v:Vehicle,x:number,z:number,angle=v.angle):Vehicle|null|'solid' {
    if (Math.abs(x)>WORLD_LIMIT-2||Math.abs(z)>WORLD_LIMIT-2||this.boxes.some(b=>carBox(v,b,x,z,angle))) return 'solid';
    return this.vehicles.find(other=>other!==v&&carCar(v,other,x,z,angle))||null;
  }
  private setWanted(reason:string) {
    if (!this.wanted) {this.wanted=true; this.say(reason); this.spawnPolice();}
    this.wantedTimer=0;
  }
  private spawnPolice() {
    if (this.police) {this.police.mesh.visible=true; return;}
    const target=this.currentCar||this.player;
    const candidates=[{x:target.x-25,z:target.z},{x:target.x+25,z:target.z},{x:target.x,z:target.z-25},{x:target.x,z:target.z+25},{x:-48,z:48}];
    const spawn=candidates.find(p=>Math.abs(p.x)<90&&Math.abs(p.z)<90&&!this.boxes.some(b=>circleBox(p.x,p.z,3,b))&&!this.vehicles.some(v=>distance(p,v)<5))||{x:-48,z:48};
    this.police=this.addVehicle('police',spawn.x,spawn.z,angleTo(spawn,target),0xf0f2f2,'police');
  }
  private say(message:string) {this.toast=message; this.toastTimer=3.4;}
  private restart() {
    if (this.currentCar) {this.currentCar.speed=0;this.currentCar=null;}
    this.player={...START}; this.playerAngle=0; this.playerMesh.visible=true;
    animatePedestrian(this.playerMesh,1,0);
    const car=this.vehicles.find(v=>v.id==='mission')!;
    car.x=MISSION_CAR.x;car.z=MISSION_CAR.z;car.angle=0;car.speed=0;car.steering=0;syncVehicle(car);animateCar(car.mesh,0);
    this.mission='start'; this.wanted=false;this.wantedTimer=0;
    if (this.police) {this.scene.remove(this.police.mesh);this.vehicles=this.vehicles.filter(v=>v!==this.police);this.police=null;}
    this.say('Mission restarted');
  }
  private enterCar(car:Vehicle) {
    this.currentCar=car; this.playerMesh.visible=false; this.say(car.id==='mission'?'Delivery car acquired':'Vehicle entered');
    if (this.mission==='car'&&car.id==='mission') this.mission='delivery';
  }
  private exitCar(force=false) {
    const car=this.currentCar; if (!car||(!force&&Math.abs(car.speed)>2.1)) {if(!force)this.say('Slow down to exit');return;}
    const c=Math.cos(car.angle),s=Math.sin(car.angle);
    const offsets=[{x:c*3,z:-s*3},{x:-c*3,z:s*3},{x:-s*3,z:-c*3},{x:s*3,z:c*3},{x:0,z:0}];
    const spot=offsets.map(o=>({x:car.x+o.x,z:car.z+o.z})).find(p=>!this.footBlocked(p.x,p.z,car)&&!circleCar(p.x,p.z,0.48,car));
    if (!spot) {if(!force)this.say('No clear space to exit');return;}
    this.player=spot;this.playerAngle=car.angle;this.currentCar=null;this.playerMesh.visible=true;car.speed=0;
  }
  private updateFoot(dt:number) {
    let dx=0,dz=0;
    if(this.input.held('w','arrowup'))dz-=1;
    if(this.input.held('s','arrowdown'))dz+=1;
    if(this.input.held('a','arrowleft'))dx-=1;
    if(this.input.held('d','arrowright'))dx+=1;
    const length=Math.hypot(dx,dz);
    const previousX=this.player.x, previousZ=this.player.z;
    if(length>0) {
      dx/=length;dz/=length;this.playerAngle=Math.atan2(dx,dz);
      const step=dt*5.6;
      if(!this.footBlocked(this.player.x+dx*step,this.player.z))this.player.x+=dx*step;
      if(!this.footBlocked(this.player.x,this.player.z+dz*step))this.player.z+=dz*step;
    }
    if (this.input.once('e')) {
      const near=this.vehicles.filter(v=>v.kind==='parked'&&Math.abs(v.speed)<0.5&&distance(v,this.player)<3.9).sort((a,b)=>distance(a,this.player)-distance(b,this.player))[0];
      if(near)this.enterCar(near);
    }
    this.playerMesh.position.set(this.player.x,0.14,this.player.z);
    this.playerMesh.rotation.y=this.playerAngle;
    animatePedestrian(this.playerMesh,dt,dt>0?Math.hypot(this.player.x-previousX,this.player.z-previousZ)/dt:0);
  }
  private updatePlayerCar(dt:number) {
    const v=this.currentCar!;
    const throttle=this.input.held('w','arrowup')?1:this.input.held('s','arrowdown')?-1:0;
    const steer=(this.input.held('d','arrowright')?1:0)-(this.input.held('a','arrowleft')?1:0);
    v.steering=steer*0.5;
    const acceleration=throttle>0?12:throttle<0?-16:0;
    v.speed=clamp(v.speed+acceleration*dt,-7,19);
    if(throttle===0)v.speed=approach(v.speed,0,(this.input.held(' ')?22:5.4)*dt);
    if(this.input.held(' '))v.speed=approach(v.speed,0,22*dt);
    const turn=steer*1.55*Math.min(Math.abs(v.speed)/7,1)*Math.sign(v.speed)*dt;
    const newAngle=v.angle+turn;
    const nx=v.x+Math.sin(newAngle)*v.speed*dt,nz=v.z+Math.cos(newAngle)*v.speed*dt;
    const hit=this.carBlocked(v,nx,nz,newAngle);
    if(hit) {
      if(Math.abs(v.speed)>3.6) {
        this.setWanted(hit==='solid'?'Property damage reported':'Traffic collision reported');
        if(hit!=='solid'&&hit.kind==='police')this.setWanted('Police vehicle struck');
      }
      v.speed*=-0.18;
      if(!this.carBlocked(v,v.x,v.z,newAngle))v.angle=newAngle;
    } else {v.x=nx;v.z=nz;v.angle=newAngle;}
    for(const p of this.pedestrians) if(distance(v,p)<2.0&&Math.abs(v.speed)>2.5){p.flee=4;this.setWanted('Pedestrian endangered');}
    syncVehicle(v);animateCar(v.mesh,v.steering);
    if(this.input.once('e'))this.exitCar();
  }
  private updateTraffic(dt:number) {
    for(const v of this.vehicles) {
      if(v.kind!=='traffic'||!v.route)continue;
      const target=v.route[v.waypoint!];
      if(distance(v,target)<3.0) v.waypoint=(v.waypoint!+1)%v.route.length;
      const next=v.route[v.waypoint!],desired=angleTo(v,next);
      const turn=clamp(angleDelta(v.angle,desired),-1.5*dt,1.5*dt);
      v.steering=clamp(turn/Math.max(dt,0.001)*0.34,-0.5,0.5);
      const candidateAngle=v.angle+turn;
      // Brake for traffic ahead; continue after the lane clears.
      const blockedAhead=this.carBlocked(v,v.x+Math.sin(candidateAngle)*3.5,v.z+Math.cos(candidateAngle)*3.5,candidateAngle);
      const targetSpeed=blockedAhead?0:7.5+(Number(v.id.slice(-1))%3);
      v.speed=approach(v.speed,targetSpeed,(blockedAhead?17:5)*dt);
      const nx=v.x+Math.sin(candidateAngle)*v.speed*dt,nz=v.z+Math.cos(candidateAngle)*v.speed*dt;
      if(!this.carBlocked(v,nx,nz,candidateAngle)){v.x=nx;v.z=nz;v.angle=candidateAngle;v.blocked=0;}
      else {v.speed=0;v.blocked=(v.blocked||0)+dt;if(v.blocked>5){v.waypoint=(v.waypoint!+1)%v.route.length;v.blocked=0;}}
      syncVehicle(v);animateCar(v.mesh,0);
    }
  }
  private updatePedestrians(dt:number) {
    for(const p of this.pedestrians) {
      if(p.wait>0){p.wait-=dt;animatePedestrian(p.mesh,dt,0);continue;}
      const threat=this.currentCar&&distance(p,this.currentCar)<7&&Math.abs(this.currentCar.speed)>5?this.currentCar:null;
      if(threat)p.flee=Math.max(p.flee,2);
      const target=p.route[p.waypoint];
      if(distance(p,target)<1.2){p.waypoint=(p.waypoint+1)%p.route.length;p.wait=0.3+Math.random()*0.9;animatePedestrian(p.mesh,dt,0);continue;}
      const desired=p.flee>0&&threat?angleTo(threat,p):angleTo(p,target);
      p.angle+=clamp(angleDelta(p.angle,desired),-4*dt,4*dt);
      const step=(p.flee>0?3.0:p.speed)*dt;
      const nx=p.x+Math.sin(p.angle)*step,nz=p.z+Math.cos(p.angle)*step;
      const moved=!this.pedestrianBlocked(nx,nz,p);
      if(moved){p.x=nx;p.z=nz;}
      else {p.wait=0.25+Math.random()*0.5;p.waypoint=(p.waypoint+1)%p.route.length;}
      p.flee=Math.max(0,p.flee-dt);syncPedestrian(p);
      animatePedestrian(p.mesh,dt,moved&&dt>0?step/dt:0);
    }
  }
  private updatePolice(dt:number) {
    if(!this.wanted||!this.police)return;
    const v=this.police,target=this.currentCar||this.player;
    const d=distance(v,target);
    if(d>27)this.wantedTimer+=dt;else this.wantedTimer=Math.max(0,this.wantedTimer-dt*0.8);
    if(this.wantedTimer>14){this.wanted=false;this.wantedTimer=0;this.say('You escaped the patrol');this.scene.remove(v.mesh);this.vehicles=this.vehicles.filter(c=>c!==v);this.police=null;return;}
    const desired=angleTo(v,target);
    let moved=false;
    for(const offset of [0,0.5,-0.5,1.0,-1.0]) {
      const targetAngle=desired+offset;
      const nextAngle=v.angle+clamp(angleDelta(v.angle,targetAngle),-2.1*dt,2.1*dt);
      const speed=10.8, nx=v.x+Math.sin(nextAngle)*speed*dt,nz=v.z+Math.cos(nextAngle)*speed*dt;
      if(!this.carBlocked(v,nx,nz,nextAngle)){v.x=nx;v.z=nz;v.angle=nextAngle;v.speed=speed;v.steering=clamp(angleDelta(v.angle,targetAngle)*0.9,-0.5,0.5);moved=true;break;}
    }
    if(!moved){v.speed=0;v.angle+=dt*1.3;}
    syncVehicle(v);animateCar(v.mesh,0);
    if(d<3.5&&this.currentCar&&Math.abs(this.currentCar.speed)<1.3){this.wanted=false;this.wantedTimer=0;this.say('Pulled over — pursuit ended');this.scene.remove(v.mesh);this.vehicles=this.vehicles.filter(c=>c!==v);this.police=null;}
  }
  private updateMission() {
    const position=this.currentCar||this.player;
    if(this.mission==='start'&&!this.currentCar&&distance(this.player,START_MARK)<2.6){this.mission='car';this.say('Find the amber car');}
    if(this.mission==='delivery'&&this.currentCar?.id==='mission'&&distance(position,DESTINATION)<5.5){this.mission='success';this.say('Delivery complete');}
    if(position.x>43&&position.x<65&&position.z<-42&&position.z>-63&&!this.wanted)this.setWanted('Restricted service yard entered');
  }
  private updateCamera(dt:number) {
    const target=this.currentCar||this.player;
    const radius=this.currentCar?17.5:21.5;
    const horizontal=radius*Math.cos(this.cameraPitch);
    const desired=new THREE.Vector3(target.x-Math.sin(this.cameraYaw)*horizontal,1.8+radius*Math.sin(this.cameraPitch),target.z-Math.cos(this.cameraYaw)*horizontal);
    const factor=1-Math.exp(-dt*3.4);
    this.camera.position.lerp(desired,factor);
    this.camera.lookAt(target.x,1.8,target.z);
  }
  private emitHUD() {
    const position=this.currentCar||this.player;
    const near=this.vehicles.filter(v=>v.kind==='parked'&&distance(v,this.player)<3.9).sort((a,b)=>distance(a,this.player)-distance(b,this.player))[0];
    const objective=this.mission==='start'?'Go to the teal marker in the plaza':this.mission==='car'?'Enter the amber delivery car':this.mission==='delivery'?'Drive the delivery car to the gold marker':'Delivery complete — press R to replay';
    const target=this.mission==='start'?START_MARK:this.mission==='car'?MISSION_CAR:DESTINATION;
    this.onHUD({mode:this.currentCar?'DRIVING':'ON FOOT',speed:this.currentCar?Math.round(Math.abs(this.currentCar.speed)*3.6):0,objective,mission:this.mission,wanted:this.wanted,wantedTime:this.wantedTimer,hint:this.currentCar?Math.abs(this.currentCar.speed)<2.1?'E · exit vehicle':'Slow down to exit':near?'E · enter '+(near.id==='mission'?'delivery car':'car'):'',distance:this.mission==='success'?0:Math.round(distance(position,target)),toast:this.toastTimer>0?this.toast:''});
  }
  private tick=(time:number)=>{
    const dt=Math.min((time-this.lastTime)/1000,0.035);this.lastTime=time;this.elapsed+=dt;
    if(this.input.once('r'))this.restart();
    if(this.currentCar)this.updatePlayerCar(dt);else this.updateFoot(dt);
    this.updateTraffic(dt);this.updatePedestrians(dt);this.updatePolice(dt);this.updateMission();this.updateCamera(dt);
    animateMarkers(this.scene,this.elapsed,this.mission);
    this.toastTimer=Math.max(0,this.toastTimer-dt);
    if(++this.frame%6===0)this.emitHUD();
    this.input.frameEnd();this.renderer.render(this.scene,this.camera);
    this.raf=requestAnimationFrame(this.tick);
  };
  dispose() {cancelAnimationFrame(this.raf);window.removeEventListener('resize',this.onResize);window.removeEventListener('pointerup',this.onPointerUp);window.removeEventListener('mousemove',this.onMouseMove);this.renderer.domElement.removeEventListener('pointerdown',this.onPointerDown);this.renderer.domElement.removeEventListener('mouseleave',this.onMouseLeave);if(document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();this.input.dispose();this.renderer.dispose();this.host.removeChild(this.renderer.domElement);}
}
