<?php
//get data from form  
$message= $_POST['message'];
$to = "campaignleads62@gmail.com";
$subject = "Leads";
$txt ="Message =" . $message;
$headers = "From: campaignleads62@gmail.com" . "\r\n" .
"CC: abuosama838@gmail.com";
if($message!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:https://3brothersgarage.us/index.html");
?>
