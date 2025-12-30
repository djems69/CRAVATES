<?php
/**
 * Script de test pour vérifier la configuration email
 * Accédez à ce fichier via votre navigateur : https://votre-domaine.com/test_contact.php
 * SUPPRIMEZ ce fichier après les tests pour des raisons de sécurité
 */

header('Content-Type: text/html; charset=UTF-8');

$fromEmail = 'contact@tany-collection.online';
$toEmail = 'tanyaartiste@gmail.com';

echo "<h2>Test de configuration email pour Hostinger</h2>";
echo "<hr>";

// Test 1: Fonction mail()
echo "<p><strong>Test 1:</strong> Fonction mail() disponible ? ";
if (function_exists('mail')) {
    echo "<span style='color: green;'>✓ Oui</span></p>";
} else {
    echo "<span style='color: red;'>✗ Non</span></p>";
    echo "<p style='color: red;'>La fonction mail() n'est pas disponible. Contactez le support Hostinger.</p>";
    exit;
}

// Test 2: Configuration PHP
echo "<p><strong>Test 2:</strong> Configuration PHP</p>";
echo "<ul>";
echo "<li>Version PHP: " . phpversion() . "</li>";
echo "<li>SMTP: " . (ini_get('SMTP') ?: 'Non configuré') . "</li>";
echo "<li>smtp_port: " . (ini_get('smtp_port') ?: 'Non configuré') . "</li>";
echo "<li>sendmail_from: " . (ini_get('sendmail_from') ?: 'Non configuré') . "</li>";
echo "</ul>";

// Test 3: Test d'envoi
echo "<p><strong>Test 3:</strong> Test d'envoi d'email...</p>";

$testSubject = 'Test email depuis ' . $_SERVER['HTTP_HOST'];
$testMessage = "Ceci est un email de test.\n\n";
$testMessage .= "Date: " . date('Y-m-d H:i:s') . "\n";
$testMessage .= "Serveur: " . $_SERVER['HTTP_HOST'] . "\n";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: " . $fromEmail . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

echo "<p>Envoi vers: <strong>" . htmlspecialchars($toEmail) . "</strong></p>";
echo "<p>Depuis: <strong>" . htmlspecialchars($fromEmail) . "</strong></p>";

$errorMessage = '';
set_error_handler(function($errno, $errstr) use (&$errorMessage) {
    $errorMessage = $errstr;
});

$result = mail($toEmail, $testSubject, $testMessage, $headers);

restore_error_handler();

if ($result) {
    echo "<p style='color: green;'><strong>✓ Email envoyé avec succès !</strong></p>";
    echo "<p><em>Note: Vérifiez votre boîte de réception (et le dossier spam) dans quelques minutes.</em></p>";
} else {
    echo "<p style='color: red;'><strong>✗ Échec de l'envoi</strong></p>";
    
    $lastError = error_get_last();
    if ($lastError && isset($lastError['message'])) {
        echo "<p style='color: red;'>Erreur: " . htmlspecialchars($lastError['message']) . "</p>";
    }
    
    if ($errorMessage) {
        echo "<p style='color: red;'>Erreur capturée: " . htmlspecialchars($errorMessage) . "</p>";
    }
    
    echo "<h3>Solutions possibles :</h3>";
    echo "<ol>";
    echo "<li><strong>Vérifiez que l'email <code>" . htmlspecialchars($fromEmail) . "</code> existe dans votre panneau Hostinger</strong></li>";
    echo "<li>Allez dans Hostinger > Email > Comptes Email et créez cet email si nécessaire</li>";
    echo "<li>Vérifiez que le mot de passe de l'email est correct (si requis)</li>";
    echo "<li>Contactez le support Hostinger avec ces informations</li>";
    echo "</ol>";
}

echo "<hr>";
echo "<p><strong style='color: red;'>⚠️ IMPORTANT:</strong> Supprimez ce fichier après les tests pour des raisons de sécurité.</p>";

