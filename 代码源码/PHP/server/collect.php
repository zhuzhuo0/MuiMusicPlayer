<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
// 歌曲信息承载

// 传入的值（歌曲的sid和用户的具体歌单）
$sid = $_POST['sid'];
$form = $_POST['form'];
// 连接数据库
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$isexist = "select * from ".$form." where sid='".$sid."';";
mysqli_query($conn,$isexist);
if(mysqli_affected_rows($conn)<1){
	$selectBase = "select * from songlist where sid='".$sid."';";
	$songResult = mysqli_query($conn,$selectBase);
	$row = mysqli_fetch_assoc($songResult);
	$insertSong = "insert into ".$form."(sid,songName,author,songUrl,songFrom) values('".$row['sid']."','".$row['songName']."','".$row['author']."','".$row['songUrl']."','".$row['songFrom']."');";
	mysqli_query($conn,$insertSong);
	echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
}else{
	echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"exist"'."}";
}
?>