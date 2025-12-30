<?php
/**
 * Script de test qui simule une requête POST vers contact.php
 * Ce script teste le formulaire sans avoir besoin d'un navigateur
 */

echo "<h2>Test de simulation du formulaire de contact</h2>";
echo "<hr>";

// Simuler les données POST
$_POST = [
    'name' => 'Test Utilisateur',
    'email' => 'test@example.com',
    'subject' => 'Test du formulaire',
    'product' => 'Produit test',
    'message' => 'Ceci est un message de test pour vérifier le fonctionnement du formulaire.'
];

// Capturer la sortie de contact.php
ob_start();

// Simuler la méthode POST
$_SERVER['REQUEST_METHOD'] = 'POST';

// Inclure contact.php
try {
    include 'contact.php';
    $output = ob_get_clean();
    
    echo "<h3>Résultat du test :</h3>";
    echo "<pre style='background: #f5f5f5; padding: 15px; border-radius: 5px;'>";
    echo htmlspecialchars($output);
    echo "</pre>";
    
    // Parser la réponse JSON
    $result = json_decode($output, true);
    
    if ($result) {
        if ($result['success']) {
            echo "<p style='color: green; font-size: 18px;'><strong>✓ SUCCÈS :</strong> " . htmlspecialchars($result['message']) . "</p>";
        } else {
            echo "<p style='color: red; font-size: 18px;'><strong>✗ ÉCHEC :</strong> " . htmlspecialchars($result['message']) . "</p>";
            
            // Suggestions
            echo "<h3>Suggestions :</h3>";
            echo "<ul>";
            echo "<li>Vérifiez que l'email <code>contact@tany-collection.online</code> existe dans votre panneau Hostinger</li>";
            echo "<li>Créez cet email dans Hostinger > Email > Comptes Email si nécessaire</li>";
            echo "<li>Vérifiez les logs d'erreurs dans votre panneau Hostinger</li>";
            echo "<li>Sur Hostinger, la fonction mail() peut nécessiter un email valide du domaine</li>";
            echo "</ul>";
        }
    } else {
        echo "<p style='color: orange;'><strong>⚠ Attention :</strong> La réponse n'est pas un JSON valide.</p>";
        echo "<p>Réponse brute :</p>";
        echo "<pre>" . htmlspecialchars($output) . "</pre>";
    }
    
} catch (Exception $e) {
    ob_end_clean();
    echo "<p style='color: red;'><strong>Erreur :</strong> " . htmlspecialchars($e->getMessage()) . "</p>";
}

echo "<hr>";
echo "<h3>Informations système :</h3>";
echo "<ul>";
echo "<li>PHP Version: " . phpversion() . "</li>";
echo "<li>Fonction mail() disponible: " . (function_exists('mail') ? 'Oui' : 'Non') . "</li>";
echo "<li>SMTP configuré: " . (ini_get('SMTP') ?: 'Non') . "</li>";
echo "<li>sendmail_from: " . (ini_get('sendmail_from') ?: 'Non configuré') . "</li>";
echo "</ul>";

echo "<p><strong style='color: red;'>⚠️ IMPORTANT:</strong> Supprimez ce fichier après les tests.</p>";

