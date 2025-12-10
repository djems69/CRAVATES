<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Méthode non autorisée.'
    ]);
    exit;
}

// Adresse email de réception – à personnaliser
$recipient = 'tanyaartiste@gmail.com';

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$product = trim($_POST['product'] ?? 'Non précisé');
$message = trim($_POST['message'] ?? '');

$errors = [];

if ($name === '') {
    $errors[] = 'Le nom est obligatoire.';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Une adresse email valide est obligatoire.';
}

if ($subject === '') {
    $errors[] = 'Le sujet est obligatoire.';
}

if ($message === '') {
    $errors[] = 'Le message est obligatoire.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors)
    ]);
    exit;
}

$emailSubject = 'Nouveau message TANY COLLECTION : ' . $subject;
$emailBody = sprintf(
    "Nom : %s\nEmail : %s\nProduit : %s\n\nMessage :\n%s\n",
    $name,
    $email,
    $product !== '' ? $product : 'Non précisé',
    $message
);

$headers = [
    'From' => sprintf('%s <%s>', $name, $email),
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8'
];

$headersFormatted = '';
foreach ($headers as $headerName => $headerValue) {
    $headersFormatted .= $headerName . ': ' . $headerValue . "\r\n";
}

$mailSent = mail($recipient, $emailSubject, $emailBody, $headersFormatted);

if ($mailSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Merci pour votre message ! Nous vous répondrons rapidement.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Impossible d\'envoyer votre message pour le moment. Veuillez réessayer plus tard.'
    ]);
}

