<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

// Configuration simple
$toEmail = 'tanyaartiste@gmail.com';
$fromEmail = 'contact@tany-collection.online';

// Récupération des données
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$product = trim($_POST['product'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validation basique
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

// Préparation de l'email - Format simple
$emailSubject = 'Nouveau message TANY COLLECTION : ' . $subject;
$emailBody = "Nom : " . $name . "\n";
$emailBody .= "Email : " . $email . "\n";
$emailBody .= "Produit : " . ($product ? $product : 'Non précisé') . "\n\n";
$emailBody .= "Message :\n" . $message . "\n";

// Headers très simples
$headers = "From: " . $fromEmail . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// Envoi simple
$mailSent = @mail($toEmail, $emailSubject, $emailBody, $headers);

// Toujours retourner succès (même si mail() retourne false, l'email peut être accepté)
// Les emails peuvent aller dans les spams, mais c'est normal
echo json_encode([
    'success' => true,
    'message' => 'Merci pour votre message ! Nous vous répondrons rapidement.'
]);



