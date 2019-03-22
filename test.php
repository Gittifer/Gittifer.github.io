<?php
require_once 'Mobile_Detect.php';
$detect = new Mobile_Detect;
$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');

$check = $detect->isMobile();
  if($check == true){
    echo "this is mobile";
    header('Location: http://www.google.com');
    exit;
  } else {
    echo 'not mobile';
  }


?>
