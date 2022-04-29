<?php


$db_name = "u953004702_announcements";
$mysql_username = "u953004702_announce_admin";
$mysql_password = "DanaiHolmes@1";
$server_name = "localhost";

$connection = mysqli_connect($server_name, $mysql_username, $mysql_password, $db_name);

$announcements_array = null;

if ($connection) {

} else {
    echo "False";
}


$mysql_qry = "SELECT ANNOUNCEMENT_ID, ANNOUNCEMENT_TEXT,((SELECT date_format(ANNOUNCEMENT_DATE, '%d %M %Y'))) ANNOUNCEMENT_DATE , 
       ((SELECT time_format(ANNOUNCEMENT_TIME, '%H:%i: %p'))) ANNOUNCEMENT_TIME
        FROM announcements_table
                LIMIT 3
          ORDER BY ANNOUNCEMENT_ID DESC";
$result = mysqli_query($connection, $mysql_qry);

$result_array = array();

if (mysqli_num_rows($result) > 0) {

    while ($row = mysqli_fetch_array($result)) {
        $result_array[] = $row;
    }


    $announcements_array = $result_array;
    print(json_encode($result_array));

} else {
    echo "Failed";
}




