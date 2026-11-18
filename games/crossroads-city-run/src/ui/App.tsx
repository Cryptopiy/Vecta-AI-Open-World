import { useEffect, useRef, useState } from 'react';
import { Game } from '../game/Game';
import type { HUD } from '../game/types';

const initial: HUD = {mode:'ON FOOT',speed:0,objective:'Go to the teal marker in the plaza',mission:'start',wanted:false,wantedTime:0,hint:'',distance:0,toast:''};
export function App() {
  const host=useRef<HTMLDivElement>(null);
  const [hud,setHud]=useState<HUD>(initial);
  useEffect(()=>{if(!host.current)return;const game=new Game(host.current,setHud);return()=>game.dispose();},[]);
  return <div className="game-shell">
    <div ref={host} className="viewport" aria-label="Real-time 3D city game" />
    <div className="vignette" />
    <header className="brand"><span className="brand-icon">C</span><div><strong>CROSSROADS</strong><small>CITY RUN / FREE ROAM</small></div></header>
    <div className="mission-card">
      <div className="eyebrow"><span className="pulse"/> MISSION 01 <span className="mission-counter">{hud.mission==='success'?'COMPLETE':hud.mission==='start'?'01 / 03':hud.mission==='car'?'02 / 03':'03 / 03'}</span></div>
      <div className="objective">{hud.objective}</div>
      {hud.mission!=='success'&&<div className="distance">◆ &nbsp;{hud.distance} m to objective</div>}
      {hud.mission==='success'&&<div className="distance success">✓ &nbsp;Delivery complete</div>}
    </div>
    <div className="status-card">
      <div className="status-line"><span>STATUS</span><strong>{hud.mode}</strong></div>
      <div className="status-line"><span>SPEED</span><strong>{hud.mode==='DRIVING'?`${hud.speed} km/h`:'—'}</strong></div>
      <div className={'status-line wanted '+(hud.wanted?'active':'')}><span>POLICE</span><strong>{hud.wanted?'● WANTED':'○ CLEAR'}</strong></div>
      {hud.wanted&&<div className="wanted-track"><div style={{width:`${Math.min(100,hud.wantedTime/14*100)}%`}}/></div>}
    </div>
    {hud.hint&&<div className="interaction"><kbd>E</kbd><span>{hud.hint.split(' · ')[1]}</span></div>}
    {hud.toast&&<div className="toast">{hud.toast}</div>}
    <div className="controls"><span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> MOVE / DRIVE</span><span><kbd>E</kbd> ENTER / EXIT</span><span><kbd>SPACE</kbd> BRAKE</span><span><kbd>R</kbd> REPLAY</span><span>MOUSE LOOK · CLICK GAME · ESC RELEASE</span></div>
    <div className="corner-mark">✦ &nbsp;EXPLORE THE CITY</div>
  </div>;
}
