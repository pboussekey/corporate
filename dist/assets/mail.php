<?php 
return mail('pboussekey@thestudnet.com', 'Demande de compte de test', "Institution : ".$_GET['institution'].'\nEmail : '.$_GET['email'].'\nPassword : '.$_GET['password']);