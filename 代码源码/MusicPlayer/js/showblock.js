$(document).ready(function() {
	firstDiv();
});
/*歌曲详情页*/
var detailPage = null;
/*
 * 顶部选项卡（div模式）
 * 第一个div
 */
function firstDiv() {
	reqQuerySongList(resQuerySongList);
}
//歌曲列表回调
function resQuerySongList(data) {
	template.helper('baseUrl', function(str) {
		return getBaseUrl() + str + '';
	});
	var html = template('firstDivContent', data);
	$('#firstDiv').html(html);
	//更多选项
	$('.icon-more').on('tap', function(event) {
		event.stopPropagation();
		var downPage = plus.webview.getWebviewById('downPage');
		var songsid = $(this).attr('data-sid');
		var btnArray = [{
			title: '歌曲详情'
		}, {
			title: '下载歌曲'
		}];
		plus.nativeUI.actionSheet({
			title: '更多操作',
			cancel: '取消',
			buttons: btnArray
		}, function(event) {
			var index = event.index;
			switch(index) {
				case 0:
					break;
				case 1:
					openDetail(songsid);
					break;
				case 2:
					downPage.evalJS("getSid("+songsid+")");
					break;
			}
		});
	});
}

/*
 * 顶部选项卡（div模式）
 * 第二个div
 */
function secondDiv() {
	//本地歌曲列表显示
	localForm();
	//网络歌单列表
	userForm();
}
//用户歌单
function userForm() {
	var html = $("<div class='no-login'><p class='no-login-title'>您当前尚未登陆，请登录后查看用户歌单</p><div class='no-login-btn-block'><button id='loginBtn' type='button' class='mui-btn mui-btn-purple no-login-btn'>登录</button></div></div>");
	if(plus.storage.getItem('isLogin') == 'true') {
		//如果处于已登录的状态
		var loginData = JSON.parse(plus.storage.getItem('loginData'));
		showUserForm(loginData);
	} else {
		//处于未登录状态
		$('#userForm').html(html);
		$('#loginBtn').bind('tap', function() {
			mui.openWindow({
				url: 'pages/login.html',
				id: 'login'
			});
		});
	}
}
//本地歌曲
function localForm() {
	plus.io.requestFileSystem(plus.io.PUBLIC_DOWNLOADS,function(fs){
		//创建一个目录读取对象，用户读取目下的文件及子目录。
		var directoryReader = fs.root.createReader();
		//获取当前目录中的所有文件和子目录(过滤)
		directoryReader.readEntries(function(entries){
			var data = {
				songs:entries
			}
			showLocal(data);
		},function(e){
			alert(e.message);
		});
	},function(e){
		alert(e.message);
	});
}
//绘制本次歌曲列表
function showLocal(data){
	var html = template('localItemMode',data);
	$('#localItemBlock').html(html);
}
//已下载列表显示
$(document).on('tap','.complete-item-title',function(){
	localForm();
});
//显示用户歌单(包括具体歌曲项)
function showUserForm(data) {
	var html = template('userFormMode', data);
	$('#userForm').html(html);
	var maskhtml = template('formItemMode', data);
	$('.choice-content').html(maskhtml);
	$('.user-form').one('tap', function() {
		var userFormBlock = $(this);
		reqUserFormItem(function(data) {
			template.helper('baseUrl', function(str) {
				return getBaseUrl() + str + '';
			});
			var html = template('userFormItemMode', data);
			userFormBlock.find('.mui-table-view').html(html);
		}, $(this).attr('data-formid'));
	});
}
//显示歌单歌曲项操作
$(document).on('longtap', '.selform-item', function() {
	var songsid = $(this).attr('data-sid');
	var formid = $(this).parent('.songitem-parent').attr('data-formid');
	var btnArray = [{
		title: '歌曲详情'
	}, {
		title: '取消收藏'
	}];
	plus.nativeUI.actionSheet({
		title: '选择操作',
		cancel: '取消',
		buttons: btnArray
	}, function(event) {
		var index = event.index;
		switch(index) {
			case 0:
				break;
			case 1:
				openDetail(songsid);
				break;
			case 2:
				reqCancelCollect(resCancelCollect, formid, songsid);
				break;
		}
	});
});
//取消收藏歌曲回调
function resCancelCollect(data) {
	if(data.data == 'success') {
		mui.toast('取消收藏成功！');
		reqUpdateForm(resUpdateForm, plus.storage.getItem('username'));
	}
}
//添加歌单
$('.add-songlist').on('tap', function() {
	if(plus.storage.getItem('isLogin') == 'true') {
		mui.prompt('新歌单名称', '歌单名', '创建歌单', ['取消', '确认'], function(event) {
			if(event.index == 1) {
				reqAddForm(resAddForm, event.value, plus.storage.getItem('username'));
			}
		})
	} else {
		mui.toast('您当前是游客身份，请先登录/注册！');
	}
});
//添加歌单回调
function resAddForm(data) {
	if(data.data == 'exist') {
		mui.toast('歌单已存在！');
	} else if(data.data == 'success') {
		mui.toast('添加成功！');
		reqUpdateForm(resUpdateForm, plus.storage.getItem('username'));
	} else if(data.data == 'over') {
		mui.toast('每个用户最多只能创建5个歌单');
	}
}
//删除歌单
$('.delete-songlist').on('tap', function() {
	if(plus.storage.getItem('isLogin') == 'true') {
		$('.mark').show();
		$('.form-item').on('tap', function() {
			var formid = $(this).attr('data-formid');
			var username = plus.storage.getItem('username');
			mui.confirm('确定要删除歌单吗，删除后无法恢复', '确认删除', ['取消', '确定'], function(e) {
				if(e.index == 1) {
					reqDeleteForm(resDeleteForm, username, formid);
				}
			});
		});
	} else {
		mui.toast('您当前是游客身份，请先登录/注册！');
	}
});
//关闭删除选项面板
$('.icon-close').on('tap', function() {
	$('.mark').hide();
});
//删除歌单回调
function resDeleteForm(data) {
	if(data.data == 'success') {
		mui.toast('删除成功');
	}
	reqUpdateForm(resUpdateForm, plus.storage.getItem('username'));
	$('.icon-close').trigger('tap');
}
//更新歌单回调
function resUpdateForm(data) {
	showUserForm(data);
}
/*
 * 顶部选项卡（div模式）
 * 第三个div
 */
function thirdDiv() {
	showRankBlock();
}
//展示框架
function showRankBlock() {
	var html = template('rankBlockMode');
	$('#rankBlock').html(html);
	$('.rank-tap').one('tap', function() {
		var rankblock = $(this).attr('data-target');
		reqGetRank(resGetRank, $(this).attr('data-ranktable'));

		function resGetRank(data) {
			var html = template('rankItemMode', data);
			$('.' + rankblock).html(html);
		}
	});
	$(".rank-tap[data-target='rank-block01']").trigger('tap');
	$(document).on('tap', '.rank-item', function() {
		openDetail($(this).attr('data-sid'));
	});
}
//跳转到详情页
function openDetail(sid) {
	//触发页面的refresh事件
	if(!detailPage) {
		detailPage = plus.webview.getWebviewById('songDetail');
	}
	mui.fire(detailPage, 'songId', {
		sid: sid
	});
	//打开新页面
	mui.openWindow({
		id: 'songDetail'
	});
}