# Script PowerShell pour lancer un serveur HTTP local
Write-Host "Démarrage du serveur local..." -ForegroundColor Green
Write-Host ""
Write-Host "Le site sera accessible sur: http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Yellow
Write-Host ""

# Vérifier si Python est disponible
$python = Get-Command python -ErrorAction SilentlyContinue
if ($python) {
    Write-Host "Utilisation de Python..." -ForegroundColor Green
    python -m http.server 8000
} else {
    # Vérifier si PHP est disponible
    $php = Get-Command php -ErrorAction SilentlyContinue
    if ($php) {
        Write-Host "Utilisation de PHP..." -ForegroundColor Green
        php -S localhost:8000
    } else {
        Write-Host "Python et PHP ne sont pas installés." -ForegroundColor Red
        Write-Host ""
        Write-Host "Options:" -ForegroundColor Yellow
        Write-Host "1. Installer Python depuis https://www.python.org/" -ForegroundColor White
        Write-Host "2. Utiliser l'extension 'Live Server' dans VS Code" -ForegroundColor White
        Write-Host "3. Utiliser npx serve (si Node.js est installé)" -ForegroundColor White
        Write-Host ""
        Read-Host "Appuyez sur Entrée pour quitter"
    }
}

