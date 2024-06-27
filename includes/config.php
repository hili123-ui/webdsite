<?php


$host="localhost";
$user="root";
$pass="";
$db="cass";


$conn=new mysqli($host,$user,$pass,$db);
if($conn->connect_error){
    echo "failed to connect";
}

?>