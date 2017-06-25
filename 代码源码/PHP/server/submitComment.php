<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$sid = $_POST['sid'];
$comment_con = $_POST['comment_con'];
$comment_from = $_POST['comment_from'];
$songname = $_POST['songname'];
$date = date('Y-m-d H:i:s',time());
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "insert into song_comment(sid,songname,comment_con,comment_from,date) values('".$sid."','".$songname."','".$comment_con."','".$comment_from."','".$date."');";
mysqli_query($conn,$sql);
echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"添加成功"'."}";
?>