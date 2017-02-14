<?php 
var_dump($_POST);
return mail('pboussekey@thestudnet.com', 'Demande de compte de test', "Institution : ".$_POST['institution'].' - Email : '.$_POST['email'].' - Password : '.$_POST['password']);