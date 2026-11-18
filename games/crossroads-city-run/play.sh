#!/bin/sh
# Starts the game in your browser (macOS / Linux). Needs python3. Ctrl+C to stop.
cd "$(dirname "$0")/dist" || exit 1
PORT=8080
URL="http://localhost:$PORT/"
echo "Game: $URL   (Ctrl+C to stop)"
( sleep 1; if command -v open >/dev/null 2>&1; then open "$URL"; elif command -v xdg-open >/dev/null 2>&1; then xdg-open "$URL"; fi ) &
exec python3 -m http.server "$PORT"
