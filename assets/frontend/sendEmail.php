<?php

$name = $_GET["NAME"];
$email = $_GET["EMAIL"];
$message = $_GET["MESSAGE"];

$message_structure = "Name : " . $name . "<br><br>$message";

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Create email headers
$headers .= 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();

$result = mail("support@itismathtime.co.za", "MESSAGE FROM EDU MAFIA WEBSITE", $message_structure, $headers);

    if ($result){
        //if the email was sent return success message
        echo "sent";
    }else{
        //if the email sending failed return failed message
        echo "failed";
    }


?>
