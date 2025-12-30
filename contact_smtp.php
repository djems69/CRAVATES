<?php
/**
 * Version SMTP pour Hostinger - Plus fiable que mail()
 * 
 * INSTRUCTIONS:
 * 1. Téléchargez PHPMailer depuis https://github.com/PHPMailer/PHPMailer/releases
 * 2. Extrayez le dossier PHPMailer dans la racine de votre site
 * 3. Modifiez les paramètres SMTP ci-dessous avec vos informations Hostinger
 * 4. Renommez ce fichier en contact.php (ou modifiez js/app.js pour utiliser contact_smtp.php)
 */

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

// Charger PHPMailer
$phpmailerPath = __DIR__ . '/PHPMailer/src/Exception.php';
if (!file_exists($phpmailerPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'PHPMailer n\'est pas installé. Téléchargez-le depuis https://github.com/PHPMailer/PHPMailer'
    ]);
    exit;
}

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Configuration SMTP Hostinger
$smtpHost = 'smtp.hostinger.com'; // ou smtp.titan.email selon votre plan
$smtpPort = 587; // 587 pour TLS, 465 pour SSL
$smtpSecure = 'tls'; // 'tls' pour port 587, 'ssl' pour port 465
$smtpUsername = 'contact@tany-collection.online'; // Votre email Hostinger
$smtpPassword = 'VOTRE_MOT_DE_PASSE_EMAIL'; // ⚠️ MODIFIEZ ICI avec le mot de passe de l'email
$fromEmail = 'contact@tany-collection.online';
$fromName = 'TANY COLLECTION';
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

// Créer une instance PHPMailer
$mail = new PHPMailer(true);

try {
    // Configuration SMTP
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port = $smtpPort;
    $mail->CharSet = 'UTF-8';
    
    // Expéditeur
    $mail->setFrom($fromEmail, $fromName);
    $mail->addReplyTo($email, $name);
    
    // Destinataire
    $mail->addAddress($toEmail);
    
    // Contenu
    $mail->isHTML(false);
    $mail->Subject = 'Nouveau message TANY COLLECTION : ' . $subject;
    $mail->Body = "Nom : " . $name . "\n";
    $mail->Body .= "Email : " . $email . "\n";
    $mail->Body .= "Produit : " . ($product ? $product : 'Non précisé') . "\n\n";
    $mail->Body .= "Message :\n" . $message . "\n";
    
    // Envoyer
    $mail->send();
    
    echo json_encode([
        'success' => true,
        'message' => 'Merci pour votre message ! Nous vous répondrons rapidement.'
    ]);
    
} catch (Exception $e) {
    error_log("Erreur PHPMailer: " . $mail->ErrorInfo);
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Impossible d\'envoyer votre message. Erreur: ' . $mail->ErrorInfo . '. Veuillez nous contacter directement à ' . $toEmail
    ]);
}

