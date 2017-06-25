<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
$data = array();
class SongComment{
	public $sid;
	public $songname;
	public $comment_con;
	public $comment_from;
	public $date;
	public $comment_id;
}
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "select * from song_comment;";
$result = mysqli_query($conn,$sql);
if($result){
	while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
		$songcomment = new SongComment();
		$songcomment->sid = $row['sid'];
		$songcomment->songname = $row['songname'];
		$songcomment->comment_con = $row['comment_con'];
		$songcomment->comment_from = $row['comment_from'];
		$songcomment->date = $row['date'];
		$songcomment->comment_id = $row['comment_id'];
		$data[] = $songcomment;
	}
	$json = json_encode($data);
	echo "{".'"errCode"'.":".'"0"'.','.'"songcomment"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}
?>