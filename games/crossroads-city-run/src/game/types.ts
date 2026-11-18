import * as THREE from 'three';

export type Vec2 = { x: number; z: number };
export type Box = { x: number; z: number; hx: number; hz: number; height: number; color: number; kind: 'building' | 'obstacle' };
export type Vehicle = { id: string; x: number; z: number; angle: number; speed: number; steering: number; length: number; width: number; color: number; kind: 'parked' | 'traffic' | 'police'; mesh: THREE.Group; route?: Vec2[]; waypoint?: number; blocked?: number };
export type Pedestrian = { x: number; z: number; angle: number; speed: number; mesh: THREE.Group; route: Vec2[]; waypoint: number; wait: number; flee: number };
export type MissionStage = 'start' | 'car' | 'delivery' | 'success';
export type HUD = { mode: 'ON FOOT' | 'DRIVING'; speed: number; objective: string; mission: MissionStage; wanted: boolean; wantedTime: number; hint: string; distance: number; toast: string };
export const START: Vec2 = { x: -31, z: -29 };
export const START_MARK: Vec2 = { x: -24, z: -27 };
export const MISSION_CAR: Vec2 = { x: -16, z: -27 };
export const DESTINATION: Vec2 = { x: 53, z: 51 };
export const WORLD_LIMIT = 100;
