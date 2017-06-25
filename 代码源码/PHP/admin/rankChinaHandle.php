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
$rank = $_POST['rank'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
switch ($flag) {
	case '0':
		$sql = "delete from rank_china where sid='".$sid."';";
		mysqli_query($conn,$sql);
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		break;
	case '1':
		if($songName!=''){
			$sql = "update rank_china set songName='".$songName."' where sid=".$sid.";";
			mysqli_query($conn,$sql);
		}
		if($songFrom!=''){
			$sql = "update rank_china set songFrom='".$songFrom."' where sid=".$sid.";";
			mysqli_query($conn,$sql);
		}
		if($songUrl!=''){
			$sql = "update rank_china set songUrl='".$songUrl."' where sid=".$sid.";";
			mysqli_query($conn,$sql);
		}
		if($author!=''){
			$sql = "update rank_china set author='".$author."' where sid=".$sid.";";
			mysqli_query($conn,$sql);
		}
		if($rank!=''){
			$sql = "update rank_china set rank='".$rank."' where sid=".$sid.";";
			mysqli_query($conn,$sql);
		}
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		break;
	case '2':
		$sql = "insert into rank_china(sid,songName,songFrom,songUrl,author,rank) values('".$sid."','".$songName."','".$songFrom."','".$songUrl."','".$author."',".$rank.");";
		mysqli_query($conn,$sql);
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		break;
}
?>