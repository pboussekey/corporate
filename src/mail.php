<?php 
return mail('pboussekey@thestudnet.com', 'Demande de compte de test', "Institution : ".$POST['institution'].'\nEmail : '.$POST['email'].'\nPassword : '.$POST['password']);