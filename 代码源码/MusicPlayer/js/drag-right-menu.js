//初始
mui.init({
	keyEventBind:{
		backbutton:false,
		menubutton:false
	},
	preloadPages:[{
		url:'user-info.html',
		id:'user-info'
	},{
		url:'about.html',
		id:'about'
	},{
		url:'comment.html',
		id:'comment'
	},{
		url:'feedback.html',
		id:'feedback'
	}]
});

var main;
mui.plusReady(function(){
	main = plus.webview.getLaunchWebview();
});

//更新login
function updateLogin(){
	if(plus.storage.getItem('isLogin')=='true'){
		$('.login-block').html($("<span class='user-name'>"+plus.storage.getItem('username')+"</span>"));
	}else{
		$('.login-block').html($("<div class='enter-block'><button type='button' class='mui-btn mui-btn-red' onclick='openLoginPage()'>登录/注册</button></div>"));
	}
}

//用户信息页面
function openUserInfoPage(){
	if(plus.storage.getItem('isLogin')=='true'){
		mui.openWindow({
			url:'user-info.html',
		});
	}else{
		mui.toast('当前您是游客身份，请登录或注册！');
	}
}
//登录界面
function openLoginPage(){
	mui.openWindow({
		url:'login.html',
	})
}
//关于界面
function openAboutPage(){
	mui.openWindow({
		url:'about.html',
	})
}
//登录按钮
function openLoginPage(){
	mui.openWindow({
		url:'login.html',
	});
}
//下载管理
function openDownPage(){
	mui.openWindow({
		id:'downPage'
	})
}
//我的评论
function openCommentPage(){
	if(plus.storage.getItem('isLogin')=='true'){
		mui.openWindow({
			url:'comment.html'
		});
	}else{
		mui.toast('当前您是游客身份，请登录或注册！');
	}
}
//问题反馈
function openFeedBackPage(){
	if(plus.storage.getItem('isLogin')=='true'){
		mui.openWindow({
			url:'feedback.html',
			id:'feedback'
		});
	}else{
		mui.toast('当前您是游客身份，请登录或注册！');
	}
	
}
//退出登录
function exitLogin(){
	if(plus.storage.getItem('isLogin')=='true'){
		mui.confirm('确定要退出登录吗？','退出登录',['确定','取消'],function(e){
			if(e.index == 0){
				plus.storage.removeItem('isLogin');
				$('.login-block').html('');
				main.evalJS('closeMenu();userForm();');
			}else{
				return;
			}
		});
	}else{
		mui.toast('当前您是游客身份，请登录或注册！');
	}
}
//退出应用
function exitApp(){
	mui.confirm('确定要退出应用吗！','退出应用',['取消','确定'],function(event){
		if(event.index == 1){
			plus.runtime.quit();
		}
	});
}

