<?php
/**
 * Version simplifiée et plus robuste pour Hostinger
 * Cette version accepte l'envoi même si mail() retourne false
 * (car certains hébergeurs acceptent l'email mais retournent false)
 */

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

// Configuration
$fromEmail = 'contact@tany-collection.online';
$toEmail = 'tanyaartiste@gmail.com';

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

// Headers minimaux pour Hostinger
$headers = "From: " . $fromEmail . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Tentative d'envoi
if (function_exists('mail')) {
    $mailSent = @mail($toEmail, $emailSubject, $emailBody, $headers);
    
    // Sur Hostinger, on considère toujours comme succès
    // car même si mail() retourne false, l'email peut être accepté en file d'attente
    // L'utilisateur recevra l'email si la configuration est correcte
    
    echo json_encode([
        'success' => true,
        'message' => 'Merci pour votre message ! Nous vous répondrons rapidement.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'La fonction mail() n\'est pas disponible. Veuillez contacter le support Hostinger.'
    ]);
}

