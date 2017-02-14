<?php 
$_POST = json_decode(file_get_contents('php://input'), true);
return mail('pboussekey@thestudnet.com', 
            'Demande de compte de test', 
            "Institution : ".$_POST['institution'].
            "\r\nEmail : ".$_POST['email'].
            "\r\nPassword : ".$_POST['password']);