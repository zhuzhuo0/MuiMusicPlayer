<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
date_default_timezone_set('Asia/Shanghai');
$time = date('Y-m-d H:i:s',time());
// 传入数据
$flag = $_POST['flag'];
$upid = $_POST['upid'];
$update_con = $_POST['update_con'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
switch ($flag) {
	case '0':
		$sql = "delete from update_news where upid='".$upid."';";
		mysqli_query($conn,$sql);
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		break;
	case '1':
		$sql = "insert into update_news(update_con,update_date) values('".$update_con."','".$time."');";
		mysqli_query($conn,$sql);
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
		break;
}
?>