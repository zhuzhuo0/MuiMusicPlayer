<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
$data = array();
class SongForm{
	public $formname;
	public $formid;
}
$userForm = $_POST['username'];
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "select * from ".$userForm.";";
$result = mysqli_query($conn,$sql);
if($result){
	while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)) {
		$songform = new SongForm();
		$songform->formname = $row['formName'];
		$songform->formid = $row['formId'];
		$data[] = $songform;
	}
	$json = json_encode($data);
	echo "{".'"errCode"'.":".'"0"'.','.'"lists"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}

?>