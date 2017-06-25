//登录按钮事件
$('#loginBtn').on('click',function(){
	var username = $('#user').val();
	var userpass = $('#pwd').val();
	reqAdminLogin(resAdminLogin,username,userpass);
});
//登录请求回调
function resAdminLogin(data){
	console.log(data);
	if(data.data=='wrongpass'){
		alert('密码错误，请重新输入！');
	}else if(data.data=='notexist'){
		alert('用户名不存在！');
	}else if(data.data=='success'){
		sessionStorage.setItem('level',data.level);
		sessionStorage.setItem('loginFlag','true');
		window.location.href = 'pages/index.html';
	}
}
