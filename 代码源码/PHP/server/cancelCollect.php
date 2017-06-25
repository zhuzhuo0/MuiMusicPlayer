<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$formid = $_POST['formid'];
$sid = $_POST['sid'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "delete from ".$formid." where sid='".$sid."';";
mysqli_query($conn,$sql);
echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
?>