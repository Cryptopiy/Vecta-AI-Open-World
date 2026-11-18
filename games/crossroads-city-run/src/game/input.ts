export class Input {
  down = new Set<string>();
  pressed = new Set<string>();
  private key(event: KeyboardEvent) {
    const keys: Record<string, string> = {
      KeyW: 'w', KeyA: 'a', KeyS: 's', KeyD: 'd',
      KeyE: 'e', KeyR: 'r', Space: ' ',
      ArrowUp: 'arrowup', ArrowDown: 'arrowdown',
      ArrowLeft: 'arrowleft', ArrowRight: 'arrowright'
    };
    return keys[event.code];
  }
  private onDown = (event: KeyboardEvent) => {
    if (event.ctrlKey || event.altKey || event.metaKey) return;
    const key = this.key(event);
    if (!key) return;
    event.preventDefault();
    if (!this.down.has(key)) this.pressed.add(key);
    this.down.add(key);
  };
  private onUp = (event: KeyboardEvent) => {
    const key = this.key(event);
    if (key) this.down.delete(key);
  };
  private onBlur = () => { this.down.clear(); this.pressed.clear(); };
  constructor() { window.addEventListener('keydown',this.onDown); window.addEventListener('keyup',this.onUp); window.addEventListener('blur',this.onBlur); }
  held(...keys: string[]) { return keys.some(k => this.down.has(k)); }
  once(key: string) { return this.pressed.has(key); }
  frameEnd() { this.pressed.clear(); }
  dispose() { window.removeEventListener('keydown',this.onDown); window.removeEventListener('keyup',this.onUp); window.removeEventListener('blur',this.onBlur); }
}
