@echo off
rem Starts the game in your browser via a tiny local server (serve.ps1). Close this window to stop.
cd /d "%~dp0"
title CROSSROADS // City Run
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1" -Root "%~dp0dist"
if errorlevel 1 pause
