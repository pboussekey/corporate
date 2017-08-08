<?php 

function get_ip() {
    if (isset($_SERVER['HTTP_CLIENT_IP'])) {
    return $_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    return $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else {
    return (isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '');
    }
}

$_POST = json_decode(file_get_contents('php://input'), true);
echo mail('pboussekey@thestudnet.com, xhoang@thestudnet.com, ssayegh@thestudnet.com, sbendacha@thestudnet.com',
            'Demande de compte de test', 
            "Domain : ".$_SERVER['HTTP_HOST'].
            "\r\nIP : ".get_ip().
            "\r\nFirst name : ".strip_tags(trim($_POST['firstName'])).
            "\r\nLast name : ".strip_tags(trim($_POST['lastName'])).
            "\r\nInstitution : ".strip_tags(trim($_POST['institution'])).
            "\r\nEmail : ".strip_tags( trim($_POST['email'])));

