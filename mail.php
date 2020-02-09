<?php
if (isset($_POST['clientName']) && isset($_POST['clientMail'])){
    $yourName =  "Your Name: " . $_POST['clientName'] . "\r\n";
    $yourEmail =  "E-mail: " . $_POST['clientMail'] . "\r\n";
    // $yourMessage =  "Message: " . $_POST['your-message'] . "\r\n";


    $to = 'vlad.polovyi@gmail.com';
    $subject = 'Contact Us - Snail';


    $headers = 'From: '. $_POST['clientMail'] . "\r\n";

    $message = $yourName . $yourEmail;


    $subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
    $subject = preg_replace("/(\t)/", " ", $subject);
    $subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';


    mail($to, $subject, $message, $headers);
    // echo $message;
}
?>
