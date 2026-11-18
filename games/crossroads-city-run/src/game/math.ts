import type { Box, Vec2, Vehicle } from './types';

export const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
export const distance = (a: Vec2, b: Vec2) => Math.hypot(a.x - b.x, a.z - b.z);
export const angleTo = (a: Vec2, b: Vec2) => Math.atan2(b.x - a.x, b.z - a.z);
export const angleDelta = (a: number, b: number) => Math.atan2(Math.sin(b - a), Math.cos(b - a));
export const approach = (v: number, target: number, amount: number) => v < target ? Math.min(target, v + amount) : Math.max(target, v - amount);

// Collision volumes occupy the ground plane of the matching 3D meshes.
export function circleBox(x: number, z: number, radius: number, box: Box): boolean {
  const dx = x - clamp(x, box.x - box.hx, box.x + box.hx);
  const dz = z - clamp(z, box.z - box.hz, box.z + box.hz);
  return dx * dx + dz * dz < radius * radius;
}
export function circleCar(x: number, z: number, radius: number, car: Vehicle): boolean {
  const dx = x - car.x, dz = z - car.z;
  const c = Math.cos(car.angle), s = Math.sin(car.angle);
  const localX = dx * c - dz * s, localZ = dx * s + dz * c;
  const px = Math.max(Math.abs(localX) - car.width / 2, 0);
  const pz = Math.max(Math.abs(localZ) - car.length / 2, 0);
  return px * px + pz * pz < radius * radius;
}
function corners(car: Vehicle, x = car.x, z = car.z, angle = car.angle): Vec2[] {
  const c = Math.cos(angle), s = Math.sin(angle);
  return [[-1,-1],[1,-1],[1,1],[-1,1]].map(([sx,sz]) => ({ x: x + sx * car.width/2 * c + sz * car.length/2 * s, z: z - sx * car.width/2 * s + sz * car.length/2 * c }));
}
function overlapOnAxis(a: Vec2[], b: Vec2[], axis: Vec2): boolean {
  const ap = a.map(p => p.x * axis.x + p.z * axis.z), bp = b.map(p => p.x * axis.x + p.z * axis.z);
  return Math.max(...ap) > Math.min(...bp) && Math.max(...bp) > Math.min(...ap);
}
function separated(a: Vec2[], b: Vec2[]): boolean {
  for (const poly of [a,b]) for (let i=0;i<4;i++) {
    const edge = {x: poly[(i+1)%4].x-poly[i].x, z: poly[(i+1)%4].z-poly[i].z};
    if (!overlapOnAxis(a,b,{x:-edge.z,z:edge.x})) return true;
  }
  return false;
}
export function carBox(car: Vehicle, box: Box, x = car.x, z = car.z, angle = car.angle): boolean {
  const a = corners(car,x,z,angle);
  const b = [{x:box.x-box.hx,z:box.z-box.hz},{x:box.x+box.hx,z:box.z-box.hz},{x:box.x+box.hx,z:box.z+box.hz},{x:box.x-box.hx,z:box.z+box.hz}];
  return !separated(a,b);
}
export function carCar(a: Vehicle, b: Vehicle, x = a.x, z = a.z, angle = a.angle): boolean {
  if (Math.hypot(x-b.x,z-b.z) > (a.length+b.length)) return false;
  return !separated(corners(a,x,z,angle),corners(b));
}
