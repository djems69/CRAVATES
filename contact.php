<?php
header('Content-Type: application/json; charset=UTF-8');

// Vérifier que c'est une requête POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

// Configuration
// IMPORTANT: Sur Hostinger, utilisez un email qui existe vraiment dans votre panneau
// Si contact@tany-collection.online n'existe pas, créez-le dans Hostinger > Email > Comptes Email
$fromEmail = 'contact@tany-collection.online';
$toEmail = 'tanyaartiste@gmail.com';

// Alternative si l'email ci-dessus n'existe pas :
// Utilisez votre email principal du domaine ou créez contact@tany-collection.online dans Hostinger

// Vérifier si la fonction mail() est disponible
if (!function_exists('mail')) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'La fonction mail() n\'est pas disponible sur ce serveur. Veuillez contacter le support Hostinger.'
    ]);
    exit;
}

// Récupération des données
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$product = trim($_POST['product'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validation
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Tous les champs obligatoires doivent être remplis.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Adresse email invalide.']);
    exit;
}

// Préparation de l'email
$emailSubject = 'Nouveau message TANY COLLECTION : ' . $subject;
$emailBody = "Nom : " . $name . "\n";
$emailBody .= "Email : " . $email . "\n";
$emailBody .= "Produit : " . ($product ? $product : 'Non précisé') . "\n\n";
$emailBody .= "Message :\n" . $message . "\n";

// Headers optimisés pour Hostinger
// Format simple qui fonctionne mieux avec Hostinger
$headers = "From: " . $fromEmail . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Capturer les erreurs
$errorMessage = '';
set_error_handler(function($errno, $errstr) use (&$errorMessage) {
    $errorMessage = $errstr;
});

// Tentative d'envoi
$mailSent = mail($toEmail, $emailSubject, $emailBody, $headers);

restore_error_handler();

// Vérifier le résultat
if ($mailSent) {
    error_log("Email envoyé avec succès de $fromEmail vers $toEmail - Sujet: $emailSubject");
    
    echo json_encode([
        'success' => true,
        'message' => 'Merci pour votre message ! Nous vous répondrons rapidement.'
    ]);
} else {
    // Récupérer la dernière erreur
    $lastError = error_get_last();
    $errorDetails = '';
    
    if ($lastError && isset($lastError['message'])) {
        $errorDetails = $lastError['message'];
    }
    
    if ($errorMessage) {
        $errorDetails = $errorMessage;
    }
    
    // Logger l'erreur pour débogage
    error_log("ÉCHEC envoi email de $fromEmail vers $toEmail. Erreur: $errorDetails");
    
    // Retourner une erreur si mail() retourne false
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Impossible d\'envoyer votre message pour le moment. La fonction mail() a échoué. Veuillez vérifier la configuration email dans Hostinger ou nous contacter directement à ' . $toEmail
    ]);
}



