# Crossroads — City Run

> **Как запустить готовую сборку / How to run the ready-made build:** см. / see [HOW_TO_PLAY.md](../../HOW_TO_PLAY.md) в корне репозитория / in the repository root. Если ниже упоминаются другие файлы запуска — их в этом репозитории нет / if other launch files are mentioned below, they are not part of this repository.

A compact real-time 3D city sandbox built with React, TypeScript, Vite, and Three.js. Everything in the city is made from procedural geometry and materials; no asset download is needed.

## Run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production build, run `npm run build`.

## Controls

| Key | On foot | Driving |
| --- | --- | --- |
| W A S D / arrows | Walk | Accelerate, brake or reverse, steer |
| E | Enter a nearby parked car | Exit when moving slowly |
| Space | — | Brake |
| R | Restart the mission | Restart the mission |
| Mouse | Click the game to rotate the camera; Esc releases the pointer. Drag if pointer lock is unavailable. | Same |

Letter controls use physical key positions, so they also work with a non-English keyboard layout.

Walk to the teal marker in the plaza, enter the amber car, and drive to the gold marker. Collisions and the restricted service yard can trigger a police pursuit. Get far enough away for long enough to clear the wanted state.

## Source layout

`src/game/Game.ts` owns the fixed simulation state and frame loop. `world.ts` builds and renders the 3D city and entities. `math.ts` provides the ground-plane projections of 3D collision boxes. `input.ts` handles keyboard state. `types.ts` defines shared entity and mission data. `src/ui/` contains the React HUD and styles.
