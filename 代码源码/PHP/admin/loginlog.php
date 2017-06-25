<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
$data = array();
class Log{
	public $id;
	public $username;
	public $date;
}
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "select * from login_record;";
$result = mysqli_query($conn,$sql);
if($result){
	while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
		$log = new Log();
		$log->id = $row['id'];
		$log->username = $row['username'];
		$log->date = $row['date'];
		$data[] = $log;
	}
	$json = json_encode($data);
	echo "{".'"errCode"'.":".'"0"'.','.'"log"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}
?>