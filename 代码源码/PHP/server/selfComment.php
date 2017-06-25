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
	public $comment_date;
	public $comment_id;
}
$comment_from = $_POST['username'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "select * from song_comment where comment_from='".$comment_from."';";
$result = mysqli_query($conn,$sql);
if($result){
	while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
		$songComment = new SongComment();
		$songComment->sid = $row['sid'];
		$songComment->songname = $row['songname'];
		$songComment->comment_con = $row['comment_con'];
		$songComment->comment_from = $row['comment_from'];
		$songComment->comment_date = $row['date'];
		$songComment->comment_id = $row['comment_id'];
		$data[] = $songComment;
	}
	$json = json_encode($data);
	echo "{".'"errCode"'.":".'"0"'.','.'"songComment"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}
?>