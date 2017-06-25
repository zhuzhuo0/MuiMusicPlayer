<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
// 用户名和内容
$ques_from = $_POST['username'];
$ques_con = $_POST['content'];
$date = date('Y-m-d H:i:s',time());
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "insert into feedback(ques_con,ques_from,date) values('".$ques_con."','".$ques_from."','".$date."');";
mysqli_query($conn,$sql);
echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
?>