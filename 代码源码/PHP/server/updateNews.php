<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$mysqlname = 'finalproject';
$json = '';
$data = array();
class UpdateItem{
	public $upid;
	public $update_con;
	public $update_date;
}
$conn = mysqli_connect($servername,$username,$password,$mysqlname);
$sql = "select * from update_news;";
$result = mysqli_query($conn,$sql);
if($result){
	while($row = mysqli_fetch_array($result,MYSQL_ASSOC)){
		$updateItem = new UpdateItem();
		$updateItem->upid = $row['upid'];
		$updateItem->update_con = $row['update_con'];
		$updateItem->update_date = $row['update_date'];
		$data[] = $updateItem;
	}
	$json = json_encode($data);
	echo "{".'"errCode"'.":".'"0"'.','.'"updatelist"'.":".$json."}";
}else{
	echo "{".'"errCode"'.":".'"1"'."}";
}

?>