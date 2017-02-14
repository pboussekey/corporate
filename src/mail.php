<?php 
return mail('pboussekey@thestudnet.com', 'Demande de compte de test', "Institution : ".$_POST['institution'].'\nEmail : '.$_POST['email'].'\nPassword : '.$_POST['password']);