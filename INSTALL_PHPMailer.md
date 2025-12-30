# Installation de PHPMailer pour le formulaire de contact

## Étape 1 : Télécharger PHPMailer

1. Allez sur : https://github.com/PHPMailer/PHPMailer/releases
2. Téléchargez la dernière version (fichier ZIP, par exemple `PHPMailer-6.x.x.zip`)
3. Extrayez le fichier ZIP

## Étape 2 : Installer PHPMailer sur votre site

1. Dans le fichier ZIP extrait, vous trouverez un dossier `PHPMailer`
2. Copiez ce dossier `PHPMailer` dans la racine de votre site (même endroit que `contact.php`)
3. La structure doit être :
   ```
   votre-site/
   ├── contact.php
   ├── PHPMailer/
   │   └── src/
   │       ├── Exception.php
   │       ├── PHPMailer.php
   │       └── SMTP.php
   └── ...
   ```

## Étape 3 : Configurer le mot de passe

1. Ouvrez le fichier `contact.php`
2. À la ligne 18, remplacez `'VOTRE_MOT_DE_PASSE_EMAIL'` par le mot de passe de votre email `contact@tany-collection.online`
3. Exemple :
   ```php
   $smtpPassword = 'MonMotDePasse123';
   ```

## Étape 4 : Tester

1. Remplissez le formulaire de contact sur votre site
2. Vérifiez que vous recevez l'email dans `tanyaartiste@gmail.com`
3. Vérifiez aussi le dossier spam au cas où

## Dépannage

### Erreur : "PHPMailer n'est pas installé"
- Vérifiez que le dossier `PHPMailer` est bien dans la racine de votre site
- Vérifiez que le chemin dans `contact.php` est correct

### Erreur : "SMTP connect() failed"
- Vérifiez que le serveur SMTP est correct : `smtp.hostinger.com`
- Vérifiez que le port est correct : `587`
- Vérifiez que votre email `contact@tany-collection.online` existe dans Hostinger

### Erreur : "Authentication failed"
- Vérifiez que le mot de passe est correct
- Vérifiez que l'email `contact@tany-collection.online` existe bien dans Hostinger

## Note de sécurité

⚠️ **IMPORTANT** : Ne commitez jamais le fichier `contact.php` avec votre mot de passe dans Git. Ajoutez-le à `.gitignore` si vous utilisez Git.

