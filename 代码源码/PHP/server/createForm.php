<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
//获取的表单名称
$formname = $_POST['formname'];
//获取用户名
$usertable = $_POST['username'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$isexist = "select * from ".$usertable." where formName='".$formname."';";
mysqli_query($conn,$isexist);
// 判断表单名称是否重复
if(mysqli_affected_rows($conn)<1){
	// 判断有多少歌单
	$numsql = "select * from ".$usertable.';';
	mysqli_query($conn,$numsql);
	$num = mysqli_affected_rows($conn);
	if($num>=5){
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"over"'."}";
	}else{
		$index = "select * from ".$usertable." order by listId DESC limit 1";
		$indexresult = mysqli_query($conn,$index);
		$row = mysqli_fetch_assoc($indexresult);
		$num = $row['listId'] + 1;
		$insertForm = "insert into ".$usertable."(formName,formId,listId) values('".$formname."','".$usertable."list0".$num."','".$num."');";
		mysqli_query($conn,$insertForm);
		$createForm = "create table ".$usertable.'list0'.$num."(sid int(4) not null primary key,songName char(50) not null,author char(50) not null,songUrl char(50) not null,songFrom char(50) not null);";
		mysqli_query($conn,$createForm);
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
	}
}else{
	echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"exist"'."}";
}
?>