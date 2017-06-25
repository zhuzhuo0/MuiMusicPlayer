<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
$data = array();
class Admin{
	public $admin_user;
	public $admin_pass;
	public $admin_level;
}
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "select * from admin_account;";
$result = mysqli_query($conn,$sql);
if($result){
	while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
		$admin = new Admin();
		$admin->admin_user = $row['admin_user'];
		$admin->admin_pass = $row['admin_pass'];
		$admin->admin_level = $row['admin_level'];
		$data[] = $admin;
	}
	$json = json_encode($data);
	echo "{".'"errCode"'.":".'"0"'.','.'"admin"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}
?>