<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
// userName
$userName = $_POST['userName'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
// 删除user表中信息
$sql = "delete from user where username='".$userName."';";
mysqli_query($conn,$sql);
// 搜索用户歌单记录表
$sql = "select * from ".$userName.";";
$result = mysqli_query($conn,$sql);
while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
	$formId = $row['formId'];
	// 删除每个具体歌单
	$sql = "drop table ".$formId.";";
	mysqli_query($conn,$sql);
}
// 删除用户歌单纪录表
$sql = "drop table ".$userName.';';
mysqli_query($conn,$sql);
// 删除登录记录中的内容
$sql = "delete from login_record where username='".$userName."';";
mysqli_query($conn,$sql);
echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
?>