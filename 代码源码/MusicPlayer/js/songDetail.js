//mui初始化
mui.init({
	preloadPages:[{
		url:'submitComment.html',
		id:'submitComment'
	}]
});
//歌曲标识
var sid;
//歌名标识
var songname;
//评论页面
var submitPage = null;
//监听自定义事件获取传值
window.addEventListener('songId',function(event){
	sid = event.detail.sid;
	updateSongDetail();
	updateSongComment();
});
//刷新歌曲信息
function updateSongDetail(){
	reqSongItem(resSongItem,sid);
}
//获取歌曲信息
function resSongItem(data){
	songname = data.song.songName;
	var html = template('songInfoMode',data);
	$('.song-detail').html(html);
}
//刷新歌曲评论
function updateSongComment(){
	reqSongComment(resSongComment,sid);
}
//获取歌曲评论
function resSongComment(data){
	var html = template('songCommentMode',data);
	$('.songDetail-comment-block').html(html);
}
//评论事件
$('.bottom-edit').bind('tap',function(){
	if(plus.storage.getItem('isLogin')=='true'){
		if(!submitPage){
			submitPage = plus.webview.getWebviewById('submitComment');
		}
		mui.fire(submitPage,'commentEdit',{
			sid:sid,
			songName:songname,
			author:$('.author').html(),
			songFrom:$('.songFrom').html()
		});
		mui.openWindow({
			url:'submitComment'
		});
	}else{
		mui.toast('您当前为游客身份，请先登录或注册！');
	}
});
//返回事件触发
window.addEventListener('backrefaush',function(e){
	sid = e.detail.sid;
	updateSongDetail();
	updateSongComment();
});
//收藏按钮
$('#collectBtn').on('tap',function(){
	if(plus.storage.getItem('isLogin')=='true'){
		$('.mark').show();	
		reqUpdateForm(showSongForm,plus.storage.getItem('username'));
	}else{
		mui.toast('您当前是游客身份，请先登录/注册！');
	}
});
//关闭按钮
$('.icon-close').on('tap',function(){
	$('.mark').hide();
});
//显示歌单
function showSongForm(data){
	var html = template('formItemMode',data);
	$('.choice-content').html(html);
	$('.form-item').on('tap',function(){
		reqCollectSong(resCollectSong,sid,$(this).attr('data-formid'));
	});
}
//请求收藏歌曲
function resCollectSong(data){
	if(data.data=='success'){
		mui.toast('收藏成功！');
		$('.icon-close').trigger('tap');
		var main = plus.webview.getLaunchWebview();
		main.evalJS('userForm()');
	}else if(data.data=='exist'){
		mui.toast('该歌单中已存在！');
	}
}
