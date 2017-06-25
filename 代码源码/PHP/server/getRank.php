<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
$data = array();
class Ranksong{
	public $sid;
	public $songName;
	public $author;
	public $songUrl;
	public $songFrom;
}
// 目标数据表
$rankTable = $_POST['rankTable'];
// 数据库链接
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "select * from ".$rankTable.";";
$result = mysqli_query($conn,$sql);
if($result){
	while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
		$ranksong = new Ranksong();
		$ranksong->sid = $row['sid'];
		$ranksong->songName = $row['songName'];
		$ranksong->author = $row['author'];
		$ranksong->songUrl = $row['songUrl'];
		$ranksong->songFrom = $row['songFrom'];
		$data[] = $ranksong;
	}
	$json = json_encode($data);
	echo "{".'"errCode"'.":".'"0"'.','.'"song"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}
?>