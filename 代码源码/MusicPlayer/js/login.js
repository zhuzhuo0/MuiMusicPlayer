mui.init();
//登录事件
$('#loginBtn').bind('tap',function(){
	if(($('#loginUsername').val()=='')||($('#loginPassword').val()=='')){
		mui.toast('登录信息不能为空！');
	}else{
		reqLogin(resLogin,$('#loginUsername').val(),$('#loginPassword').val());
	}
});
function resLogin(data){
	//存储用户信息
	console.log(data);
	if(data.data == 'notexist'){
		mui.toast('不存在该用户！');
	}else if(data.data == 'wrongpass'){
		mui.toast('密码错误！');
	}else if(data.data == 'success'){
		plus.storage.setItem('loginData',JSON.stringify(data));
		plus.storage.setItem('isLogin','true');
		plus.storage.setItem('username',data.user.username);
		plus.storage.setItem('useremail',data.user.useremail);
		plus.storage.setItem('userqq',data.user.userqq);
		plus.storage.setItem('usertel',data.user.usertel);
		plus.storage.setItem('selform',data.user.selform);
		plus.webview.hide('drag-right-menu');
		var main = plus.webview.getLaunchWebview();
		main.evalJS('closeMenu();userForm();');
		plus.webview.close(plus.webview.currentWebview());
	}
}
//注册事件
$('#registerBtn').bind('tap',function(){
	if(($('#registerName').val()=='')||($('#registerPword').val()=='')||($('#registerEmail').val()=='')||($('#registerQQ').val()=='')||($('#registerTel').val()=='')){
		mui.toast('用户信息不完整！');		
	}else{
		reqRegister(resRegister,$('#registerName').val(),$('#registerPword').val(),$('#registerEmail').val(),$('#registerQQ').val(),$('#registerTel').val())
	}
});
function resRegister(data){
	if(data.data == 'success'){
		mui.toast('注册成功！');
		reqLogin(resLogin,$('#registerName').val(),$('#registerPword').val());
	}else if(data.data == 'exist'){
		mui.toast('注册用户名已存在！');
	}
}
