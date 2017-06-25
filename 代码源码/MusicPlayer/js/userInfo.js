//初始项配置项
mui.init()

//全局变量
var username;
var useremail;
var userqq;
var usertel;

//plusready初始化
mui.plusReady(function() {
	userInfoInit();
});

//填充数据
function userInfoInit() {
	//获取数据
	username = plus.storage.getItem('username');
	useremail = plus.storage.getItem('useremail');
	userqq = plus.storage.getItem('userqq');
	usertel = plus.storage.getItem('usertel');
	var data = {
		user: [useremail, userqq, usertel]
	};
	//显示数据
	$('.user-name').html(username);
	var html = template('userInfo', data);
	$('#userInfoBlock').html(html);
	//点击事件
	//修改监听事件
	$('#userInfoBlock i').bind('tap', '.icon-modify', function() {
		var changeItem = $(this).attr('data-changeItem');
		mui.prompt('请输入新的' + $(this).attr('data-title'), '新的' + $(this).attr('data-title'), $(this).attr('data-title') + '修改', ['取消', '确定'], function(e) {
			if(e.index == 0) {
				return;
			} else if(e.index == 1) {
				reqUpdateUserInfo(resUpdateUserInfo, username, changeItem, e.value);
				plus.storage.setItem(changeItem,e.value);
				userInfoInit();
			}
		});
	});
}

//更新用户信息
function resUpdateUserInfo(data) {
	mui.toast(data.data);
}