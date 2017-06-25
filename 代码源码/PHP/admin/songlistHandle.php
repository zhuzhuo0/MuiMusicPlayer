<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
//flag&&sid
$flag = $_POST['flag'];
$sid = $_POST['sid'];
$songName = $_POST['songName'];
$songFrom = $_POST['songFrom'];
$songUrl = $_POST['songUrl'];
$author = $_POST['author'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
switch ($flag) {
	case '0':
		$sql = "delete from songlist where sid='".$sid."';";
		mysqli_query($conn,$sql);
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		break;
	case '1':
		if($songName!=''){
			$sql = "update songlist set songName='".$songName."' where sid=".$sid.";";
			mysqli_query($conn,$sql);
		}
		if($songFrom!=''){
			$sql = "update songlist set songFrom='".$songFrom."' where sid=".$sid.";";
			mysqli_query($conn,$sql);
		}
		if($songUrl!=''){
			$sql = "update songlist set songUrl='".$songUrl."' where sid=".$sid.";";
			mysqli_query($conn,$sql);
		}
		if($author!=''){
			$sql = "update songlist set author='".$author."' where sid=".$sid.";";
			mysqli_query($conn,$sql);
		}
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		break;
	case '2':
		$sql = "insert into songlist(songName,songFrom,songUrl,author) values('".$songName."','".$songFrom."','".$songUrl."','".$author."');";
		mysqli_query($conn,$sql);
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		break;
}
?>