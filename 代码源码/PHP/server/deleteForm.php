<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
// 歌单id
$formid = $_POST['formid'];
// 用户名
$userForm = $_POST['username'];
// 数据库连接
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$deleteItem = "delete from ".$userForm." where formid='".$formid."';";
mysqli_query($conn,$deleteItem);
$deleteTable = "drop table ".$formid.";";
mysqli_query($conn,$deleteTable);
echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
?>