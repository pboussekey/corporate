<?php 
$_POST = json_decode(file_get_contents('php://input'), true);
echo mail('pboussekey@thestudnet.com, xhoang@thestudnet.com, ssayegh@thestudnet.com, sbendacha@thestudnet.com',
            'Demande de compte de test', 
            "Domain : ".$_SERVER['HTTP_HOST'].
            "IP : ".$_SERVER["REMOTE_ADDR"].
            "\r\nFirst name : ".strip_tags(trim($_POST['firstName'])).
            "\r\nLast name : ".strip_tags(trim($_POST['lastName'])).
            "\r\nInstitution : ".strip_tags(trim($_POST['institution'])).
            "\r\nEmail : ".strip_tags( trim($_POST['email'])));

