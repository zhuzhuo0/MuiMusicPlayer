<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
$data = array();
class User{
	public $username;
	public $password;
	public $usertel;
	public $useremail;
	public $userqq;
	public $selform;
}
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "select * from user;";
$result = mysqli_query($conn,$sql);
if($result){
	while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
		$user = new User();
		$user->username = $row['username'];
		$user->password = $row['password'];
		$user->usertel = $row['usertel'];
		$user->useremail = $row['useremail'];
		$user->userqq = $row['userqq'];
		$user->selform = $row['selform'];
		$data[] = $user;
	}
	$json = json_encode($data);
	echo "{".'"errCode"'.":".'"0"'.','.'"user"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}
?>