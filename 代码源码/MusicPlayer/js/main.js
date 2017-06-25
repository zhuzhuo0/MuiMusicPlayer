mui.init({
	swipeBack: false,
	beforeback: back,
	preloadPages:[
    {
      url:'pages/login.html',
      id:'login'
    },{
    	url:'pages/search.html',
    	id:'search'
    },{
    	url:'pages/songDetail.html',
    	id:'songDetail'
    },{
    	url:'pages/downPage.html',
    	id:'downPage'
    }
    ],
    gestureConfig:{
	   longtap: true, //默认为false
    }
});
/*侧滑菜单变量*/
var main, menu, loginPage;
var showMenu = false;
/*是否登录标识*/
var isLogin;
/*
 * 顶部选项卡（div模式）
 * 切换事件
 */
(function($) {
	var item2 = document.getElementById('item2mobile');
	var html2 = "<span class='list-location'>本地列表</span><div class='mui-card'><ul class='mui-table-view mui-table-view-chevron'><li class='mui-table-view-cell mui-collapse complete-item-title'><a href='#'>本地歌曲</a><ul id='localItemBlock' class='mui-table-view mui-table-view-chevron'></ul></li></ul></div><span class='list-location'>用户列表</span><div class='mui-card'><ul id='userForm' class='mui-table-view mui-table-view-chevron'></ul></div>";
	var item3 = document.getElementById('item3mobile');
	document.getElementById('slider').addEventListener('slide', function(e) {
		if(e.detail.slideNumber === 1) {
			if(item2.querySelector('.mui-loading')) {
				setTimeout(function() {
					item2.querySelector('.mui-scroll').innerHTML = html2;
					secondDiv();
				}, 300);
			}
			return;
		} else if(e.detail.slideNumber === 2) {
			if(item3.querySelector('.mui-loading')) {
				setTimeout(function() {
					thirdDiv();
				}, 300);
			}
		}
	});
})(mui);

/*
 * api调用准备
 */
mui.plusReady(function() {
	//清空用户的信息（暂时必须每次都登陆，之后可以考虑联网的情况下自动登陆）
	plus.storage.removeItem('loginData');
	plus.storage.removeItem('username');
	plus.storage.removeItem('useremail');
	plus.storage.removeItem('userqq');
	plus.storage.removeItem('usertel');
	isLogin = plus.storage.setItem('isLogin','false');
	/*
	 * 判断是否显示guide.html
	 */
	main = plus.webview.currentWebview();
	var showGuide = plus.storage.getItem('lauchFlag');
	isLogin = plus.storage.getItem('isLogin');	
	//判断是否是第一次打开应用
	if(showGuide) {
		plus.navigator.closeSplashscreen();
		plus.navigator.setFullscreen(false);
		preload();
	} else {
		mui.openWindow({
			url: 'guide.html',
			id: 'guide',
			show: {
				aniShow: 'none'
			},
			waiting: {
				autoShow: false
			}
		});
		setTimeout(function() {
			preload();
		}, 200)
	}
});
//预加载
function preload() {
	/*
	 * 实现侧边菜单
	 */
	//setTimeout的目的是等待窗体动画结束后，在执行create webview操作，避免资源竞争，导致窗口动画不流畅
	setTimeout(function() {
		//侧滑菜单默认隐藏，这样可以节省内存
		menu = mui.preload({
			id: 'drag-right-menu',
			url: 'pages/drag-right-menu.html',
			styles: {
				left: '-100%',
				width: '70%',
				zindex: -9997
			}
		});
	}, 300);
}

/*
 * 显示侧面菜单
 */
function openMenu() {
	if(!showMenu) {
		menu.show('none', 0, function() {
			menu.setStyle({
				left: '0%',
				zindex: 9997,
				transition: {
					duration: 150
				}
			});
			main.setStyle({
				left: '0%',
				mask: 'rgba(0,0,0,.3)'
			});
			main.addEventListener('maskClick', closeMenu, false);
		});
		showMenu = true;
		menu.evalJS('updateLogin()');
	}
}
/*
 * 关闭侧滑菜单（业务部分）
 */
function closeMenu() {
	if(showMenu) {
		menu.setStyle({
			left: '-70%',
			transition: {
				duration: 150
			}
		});
		main.setStyle({
			mask: 'none'
		})
		setTimeout(function() {
			menu.hide();
		}, 200);
		showMenu = false;
	}
}
/*
 * 返回时间触发
 */
function back() {
	if(showMenu) {
		//菜单处于显示状态，返回键应该先关闭菜单，阻止主窗口执行mui.back逻辑
		closeMenu();
		return false;
	}
	plus.storage.removeItem('isLogin');
	
}
//点击图标显示菜单
document.getElementById('personBtn').addEventListener('tap', openMenu);
//重写mui.menu方法，Android版本menu按键下可自动打开、关闭侧滑菜单
mui.menu = function() {
	if(showMenu) {
		closeMenu();
	} else {
		openMenu();
	}
}

/*
 * 显示播放细节
 */
function showPlayer() {
	$('#playerDetail').fadeIn(500);
}
function closePlayer() {
	$('#playerDetail').fadeOut(500);
}

/*
 * 显示搜索界面
 */
var searchPage = null;
$('#searchBtn').on('tap',function(){
	if(!searchPage){
		searchPage = plus.webview.getWebviewById('search');
	}
	mui.fire(searchPage,'refreshSearch',{});
	mui.openWindow({
		url:'pages/search.html',
		id:'search'
	});
});

