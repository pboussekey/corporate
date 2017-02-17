<?php 
$_POST = json_decode(file_get_contents('php://input'), true);
return mail('pboussekey@thestudnet.com', 
            'Demande de compte de test', 
            "Domain : ".$_SERVER['HTTP_HOST'].
            "\r\nFirst name : ".strip_tags(trim($_POST['firstName'])).
            "\r\nLast name : ".strip_tags(trim($_POST['lastName'])).
            "\r\nInstitution : ".strip_tags(trim($_POST['institution'])).
            "\r\nEmail : ".strip_tags( trim($_POST['email']));