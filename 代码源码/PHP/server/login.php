<?php
	$servername = 'localhost';
	$ownername = 'root';
	$password = '';
	$mysqlname = 'finalproject';
	date_default_timezone_set('Asia/Shanghai');
	$time = date('Y-m-d H:i:s',time());
	Class Userlogin{
		public $username;
		public $userpass;
	}
	Class UserInfo{
		public $username;
		public $usertel;
		public $useremail;
		public $userqq;
		public $selform;
	}
	Class Form{
		public $formname;
		public $formid;
	}
	$login = new Userlogin();
	$login->username = $_POST['username'];
	$login->userpass = $_POST['password'];
	// echo $login->username;

	$conn = mysqli_connect($servername,$ownername,$password,$mysqlname);
	$isexist = "select * from user where username='".$login->username."';";
	$result = mysqli_query($conn,$isexist);
	// 根据用户名没有查到数据的情况
	if(mysqli_affected_rows($conn) < 1){
		echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"notexist"'."}";
	}else{
		$obj = mysqli_fetch_object($result);
		if($obj->password == $login->userpass){
			$userinfo = new UserInfo();
			$userinfo->username = $obj->username;
			$userinfo->usertel = $obj->usertel;
			$userinfo->useremail = $obj->useremail;
			$userinfo->userqq = $obj->userqq;
			$userinfo->selform = $obj->selform;
			// $json = json_encode(userinfo);
			// echo json_encode($userinfo);
			$login_record = "insert into login_record(username,date) values("."'".$login->username."','".$time."');";
			mysqli_query($conn,$login_record);
			$temp = mysqli_query($conn,'select * from '.$userinfo->selform.';');
			$arr = array();
			if(mysqli_affected_rows($conn) == 0){
				echo "{".'"errCode"'.":".'"0"'.','.'"user"'.':'.json_encode($userinfo)."}";
			}else{
				while ($row = mysqli_fetch_array($temp)) {
					// array_push($arr,$row['formId']);
					$form = new Form();
					$form->formname = $row['formName'];
					$form->formid = $row['formId'];
					$arr[] = $form;
				}
				echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"success"'.",".'"user"'.':'.json_encode($userinfo).",".'"lists"'.':'.json_encode($arr)."}";
			}
		}else{
			echo "{".'"errCode"'.":".'"0"'.','.'"data"'.":".'"wrongpass"'."}";
		}
	}
?>