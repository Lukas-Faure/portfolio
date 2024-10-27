<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer et valider les champs du formulaire
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"])); // Correction ici : email
    $message = htmlspecialchars(trim($_POST["message"]));

    // Liste des domaines d'email invalides
    $invalid_mail = [
        'hosting.ovh',
        'mailinator.com',
        '10minutemail.com',
        'guerrillamail.com',
        'tempmail.com',
        'throwawaymail.com',
        'fakeemail.com',
        'mail.com',
        'gmx.net',
        'disposable.com',
        'temp-mail.org',
        'yopmail.com',
        'mytemp.email',
        'getnada.com'
    ];

    $domain = explode('@', $email)[1] ?? ''; // Récupère le domaine de l'email

    // Vérifier si l'email est valide et non dans la liste des emails jetables
    if (!in_array($domain, $invalid_mail) && $name != '' && $email != '') {
        
        // Destinataire et contenu du message
        $to = "lukas.faure38@gmail.com"; 
        $subject = "PortFolio message de $name";
        $body = "Nom: $name\nE-mail: $email\n\nMessage:\n$message";
        $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'Content-Type: text/plain; charset=utf-8' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

        // Envoi de l'e-mail
        if (mail($to, $subject, $body, $headers)) {
            header('Location: ../pages/contact.html?sent=true');
        } else {
            header('Location: ../pages/contact.html?sent=false');
        }
    }
    else {
        header('Location: ../pages/contact.html?sent=false');
    }
}
?>
