<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
// flag&&admin
$flag = $_POST['flag'];
$admin_user = $_POST['admin_user'];
$admin_pass = $_POST['admin_pass'];
$admin_level = $_POST['admin_level'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
switch ($flag) {
	case '0':
		$sql = "select * from admin_account where admin_user='".$admin_user."';";
		mysqli_query($conn,$sql);
		if(mysqli_affected_rows($conn) < 1){
			$sql = "insert into admin_account(admin_user,admin_pass,admin_level) values('".$admin_user."','".$admin_pass."','".$admin_level."');";
			mysqli_query($conn,$sql);
			echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		}else{
			echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"exist"'."}";
		}
		break;
	case '1':
		$sql = "delete from admin_account where admin_user='".$admin_user."';";
		mysqli_query($conn,$sql);
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		break;
	case '2':
		$sql = "update admin_account set admin_pass = '".$admin_pass."' where admin_user='".$admin_user."';";
		mysqli_query($conn,$sql);
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		break;
}

?>