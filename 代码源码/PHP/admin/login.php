<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
// 传入的值
$admin_user = $_POST['admin_user'];
$admin_pass = $_POST['admin_pass'];
// 数据库操作
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = 'select * from admin_account where admin_user='."'".$admin_user."';";
$result = mysqli_query($conn,$sql);
if(mysqli_affected_rows($conn) < 1){
	echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"notexist"'."}";
}else{
	$obj = mysqli_fetch_object($result);
	if($admin_pass == $obj->admin_pass){
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'.",".'"level"'.":".'"'.$obj->admin_level.'"'."}";
	}else{
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"wrongpass"'."}";
	}
}
?>