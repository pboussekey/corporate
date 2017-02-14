<?php 
var_dump($_POST);
return mail('pboussekey@thestudnet.com', 'Demande de compte de test', "Institution : ".
        filter_input(INPUT_POST,'institution').'\r\nEmail : '.
        filter_input(INPUT_POST,'email').'\r\n Password : '.
        filter_input(INPUT_POST,'password'));