<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
$data = array();
class Feedback{
	public $qid;
	public $ques_con;
	public $ques_from;
	public $date;
}
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "select * from feedback;";
$result = mysqli_query($conn,$sql);
if($result){
	while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
		$feedback = new Feedback();
		$feedback->qid = $row['qid'];
		$feedback->ques_con = $row['ques_con'];
		$feedback->ques_from = $row['ques_from'];
		$feedback->date = $row['date'];
		$data[] = $feedback;
	}
	$json = json_encode($data);
	echo "{".'"errCode"'.":".'"0"'.','.'"feedback"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}
?>