<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$changeFlag = $_POST['username'];
$changeItem = $_POST['changeItem'];
$changeContent = $_POST['changeContent'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = 'update user set '.$changeItem.'='."'".$changeContent."'".' where username='."'".$changeFlag."';";
mysqli_query($conn,$sql);
echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"修改成功"'."}";
?>