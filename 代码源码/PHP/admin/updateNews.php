<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
$data = array();
class UpdateNews{
	public $upid;
	public $update_con;
	public $update_date;
}
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "select * from update_news;";
$result = mysqli_query($conn,$sql);
if($result){
	while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
		$updatenews = new UpdateNews();
		$updatenews->upid = $row['upid'];
		$updatenews->update_con = $row['update_con'];
		$updatenews->update_date = $row['update_date'];
		$data[] = $updatenews;
	}
	$json = json_encode($data);
	echo "{".'"errCode"'.":".'"0"'.','.'"updates"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}
?>