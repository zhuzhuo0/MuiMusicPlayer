//mui初始化配置
mui.init();
//歌曲标识
var sid;
//歌曲名称
var songname;
//歌曲评价页面
var frontPage = null;
//监听自定义事件
window.addEventListener('commentEdit',function(e){
	sid = e.detail.sid;
	songname = e.detail.songName;
	$('.songName').html(e.detail.songName);
	$('.author').html(e.detail.author);
	$('.songFrom').html(e.detail.songFrom);
});
//请求添加事件
$('#submitText').on('tap',function(){
	if($('#textarea').val()==''){
		mui.toast('请填写评论！');
		return;
	}else{
		reqSubmitComment(resSubmitComment,sid,songname,$('#textarea').val(),plus.storage.getItem('username'));
	}
	$('#textarea').val('');
	if(!frontPage){
		frontPage = plus.webview.getWebviewById('songDetail');
	}
	mui.fire(frontPage,'backrefaush',{
		sid : sid
	});
	mui.back();
});
//“取消”事件
$('#resetText').on('tap',function(){
	$('#textarea').val('');
	mui.back();
});
//请求添加回调
function resSubmitComment(data){
	mui.toast(data.data);
}
