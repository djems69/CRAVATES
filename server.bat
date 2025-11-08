@echo off
echo Demarrage du serveur local...
echo.
echo Le site sera accessible sur: http://localhost:8000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.
python -m http.server 8000
if errorlevel 1 (
    echo.
    echo Python n'est pas installe. Tentative avec PHP...
    php -S localhost:8000
    if errorlevel 1 (
        echo.
        echo Python et PHP ne sont pas installes.
        echo Veuillez installer Python depuis https://www.python.org/
        echo ou utiliser l'extension Live Server dans VS Code
        pause
    )
)


