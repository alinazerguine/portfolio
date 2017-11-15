<?php

    $name       = $_POST['name'];
    $email      = $_POST['email'];
    $subject     = $_POST['subject'];
    $message    = $_POST['message'];

    // Your email
    $EmailTo = "your@email.com";

    // prepare email body text
    $Body = "Name: ";
    $Body .= $name;
    $Body .= "<br>";

    $Body .= "Email: ";
    $Body .= $email;
    $Body .= "<br>";

    $Body .= "Subject: ";
    $Body .= $subject;
    $Body .= "<br>";

    $Body .= "Message: ";
    $Body .= $message;
    $Body .= "<br>";

    // send email
   $success = mail($EmailTo, $subject, $Body, 'From:'. $email);

    // redirect to success ajax
    if ($success == true){
       echo "success";
    }else{
        echo "failed";
    }