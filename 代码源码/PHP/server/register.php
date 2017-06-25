<?php
	$servername = 'localhost';
	$ownername = 'root';
	$password = '';
	$mysqlname = 'finalproject';
	Class UserRegister{
		public $username;
		public $userpass;
		public $useremail;
		public $userqq;
		public $usertel;
	}
	$register = new UserRegister();
	$register->username = $_POST['username'];
	$register->userpass = $_POST['password'];
	$register->useremail = $_POST['useremail'];
	$register->userqq = $_POST['userqq'];
	$register->usertel = $_POST['usertel'];
	// echo $register->usertel;

	$conn = mysqli_connect($servername,$ownername,$password,$mysqlname);
	$isexist = "select * from user where username='".$register->username."'";
	mysqli_query($conn,$isexist);
	if(mysqli_affected_rows($conn) < 1){
		$addUser = "insert into user(username,password,usertel,useremail,userqq,selform) values('".$register->username."','".$register->userpass."','".$register->usertel."','".$register->useremail."','".$register->userqq."','".$register->username."');";
		mysqli_query($conn,$addUser);
		$sql = "create table ".$register->username."(formName char(50) not null,formId char(50) not null,listId int(4) not null);";
		mysqli_query($conn,$sql);
		$addDefaultFormItem = "insert into ".$register->username."(formName,formid,listId) values('我喜欢的歌曲',"."'".$register->username.'list01'."',1);";
		mysqli_query($conn,$addDefaultFormItem);
		$addDefaultForm = "create table ".$register->username.'list01'."(sid int(4) not null primary key,songName char(50) not null,author char(50) not null,songUrl char(50) not null,songFrom char(50) not null);";
		mysqli_query($conn,$addDefaultForm);
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'."}";
	}else{
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"exist"'."}";
	}
?>