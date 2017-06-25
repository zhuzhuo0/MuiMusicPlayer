//判断当前是否为已登录的状态
$(document).ready(function(){
	if(!sessionStorage.getItem('loginFlag')){
		window.location.href = '../login.html';	
	}
});
//退出
$('#exit').on('click',function(){
	sessionStorage.removeItem('loginFlag');
	sessionStorage.removeItem('level');
	window.location.href = '../login.html';
});