<?php
header('Content-Type: application/json; charset=UTF-8');

// Vérifier que c'est une requête POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

// Configuration - MODIFIEZ ICI avec votre email Hostinger
// Important : Utilisez un email de votre domaine hébergé sur Hostinger
$fromEmail = 'contact@tany-collection.online'; // ⚠️ À MODIFIER avec votre email Hostinger
$toEmail = 'tanyaartiste@gmail.com'; // Email de réception

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
$headers = "From: " . $fromEmail . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envoi de l'email
$mailSent = @mail($toEmail, $emailSubject, $emailBody, $headers);

if ($mailSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Merci pour votre message ! Nous vous répondrons rapidement.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Impossible d\'envoyer votre message. Veuillez nous contacter directement à ' . $toEmail
    ]);
}



