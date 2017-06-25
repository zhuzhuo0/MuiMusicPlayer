<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
//sid
$comment_id = $_POST['comment_id'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "delete from song_comment where comment_id='".$comment_id."';";
mysqli_query($conn,$sql);
echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
?>