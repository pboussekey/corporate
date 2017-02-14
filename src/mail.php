<?php 
$_POST = json_decode(file_get_contents('php://input'), true);
return mail('pboussekey@thestudnet.com', 
            'Demande de compte de test', 
            "Domain : ".getenv(DOMAIN_NAME).
            "\r\nInstitution : ".strip_tags(trim($_POST['institution'])).
            "\r\nEmail : ".strip_tags( trim($_POST['email'])).
            "\r\nPassword : ".strip_tags(trim($_POST['password'])));