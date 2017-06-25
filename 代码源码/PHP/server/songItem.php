<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
class Song{
	public $sid;
	public $songName;
	public $author;
	public $songUrl;
	public $songFrom;
}
$id = $_POST['sid'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = 'select * from songlist where sid='."'".$id."';";
$result = mysqli_query($conn,$sql);
if ($result) {
	while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
		$song = new Song();
		$song->sid = $row['sid'];
		$song->songName = $row['songName'];
		$song->author = $row['author'];
		$song->songUrl = $row['songUrl'];
		$song->songFrom = $row['songFrom'];
	}
	$json = json_encode($song);
	echo "{".'"errCode"'.":".'"0"'.','.'"song"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}
?>