# Tiny local web server for browser games (Windows PowerShell 5+, no install needed).
# Маленький локальный веб-сервер для браузерных игр (Windows PowerShell 5+, ничего ставить не нужно).
# It only serves files from the game folder to http://localhost and opens your browser.
# Он только отдаёт файлы из папки игры на http://localhost и открывает браузер.
param(
    [string]$Root = $PSScriptRoot,
    [int]$Port = 8080,
    [switch]$NoBrowser
)

$ErrorActionPreference = 'Stop'
$sep = [System.IO.Path]::DirectorySeparatorChar
$Root = [System.IO.Path]::GetFullPath((Resolve-Path -LiteralPath $Root).ProviderPath).TrimEnd($sep)

$mime = @{
    '.html' = 'text/html; charset=utf-8'; '.htm' = 'text/html; charset=utf-8'
    '.js' = 'text/javascript; charset=utf-8'; '.mjs' = 'text/javascript; charset=utf-8'
    '.css' = 'text/css; charset=utf-8'; '.json' = 'application/json; charset=utf-8'; '.map' = 'application/json'
    '.txt' = 'text/plain; charset=utf-8'; '.md' = 'text/plain; charset=utf-8'; '.xml' = 'application/xml'
    '.wasm' = 'application/wasm'; '.svg' = 'image/svg+xml'; '.ico' = 'image/x-icon'
    '.png' = 'image/png'; '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.gif' = 'image/gif'; '.webp' = 'image/webp'
    '.avif' = 'image/avif'; '.ktx2' = 'image/ktx2'; '.hdr' = 'application/octet-stream'; '.exr' = 'application/octet-stream'
    '.glb' = 'model/gltf-binary'; '.gltf' = 'model/gltf+json'; '.bin' = 'application/octet-stream'
    '.obj' = 'text/plain'; '.fbx' = 'application/octet-stream'
    '.mp3' = 'audio/mpeg'; '.ogg' = 'audio/ogg'; '.wav' = 'audio/wav'; '.m4a' = 'audio/mp4'
    '.mp4' = 'video/mp4'; '.webm' = 'video/webm'
    '.woff' = 'font/woff'; '.woff2' = 'font/woff2'; '.ttf' = 'font/ttf'; '.otf' = 'font/otf'
}

# Find a free port / Ищем свободный порт
$listener = $null
for ($p = $Port; $p -lt ($Port + 30); $p++) {
    $l = New-Object System.Net.HttpListener
    $l.Prefixes.Add("http://localhost:$p/")
    try { $l.Start(); $listener = $l; $Port = $p; break } catch { $l.Close() }
}
if (-not $listener) { Write-Host 'No free port found / Не найден свободный порт'; Read-Host 'Press Enter'; exit 1 }

$url = "http://localhost:$Port/"
Write-Host ''
Write-Host "  Game is running at / Игра запущена по адресу:  $url"
Write-Host '  Keep this window open while playing. Close it to stop the game.'
Write-Host '  Не закрывайте это окно, пока играете. Закройте его, чтобы остановить игру.'
Write-Host ''
if (-not $NoBrowser) { Start-Process $url }

while ($listener.IsListening) {
    try { $ctx = $listener.GetContext() } catch { break }
    $res = $ctx.Response
    try {
        $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/').Replace('/', $sep)
        $path = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($Root, $rel))
        $inside = ($path -eq $Root) -or $path.StartsWith($Root + $sep, [StringComparison]::OrdinalIgnoreCase)
        if (-not $inside) {
            $res.StatusCode = 403
        } else {
            if (Test-Path -LiteralPath $path -PathType Container) { $path = [System.IO.Path]::Combine($path, 'index.html') }
            if (Test-Path -LiteralPath $path -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($path).ToLowerInvariant()
                $type = $mime[$ext]; if (-not $type) { $type = 'application/octet-stream' }
                $bytes = [System.IO.File]::ReadAllBytes($path)
                $res.ContentType = $type
                $res.Headers.Add('Cache-Control', 'no-cache')
                $res.ContentLength64 = $bytes.Length
                $res.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $res.StatusCode = 404
            }
        }
    } catch {
        try { $res.StatusCode = 500 } catch {}
    } finally {
        try { $res.Close() } catch {}
    }
}
