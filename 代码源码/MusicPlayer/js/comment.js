//mui初始化配置
mui.init();
//api初始化
mui.plusReady(function(){
	reqSelfComment(resSelfComment,plus.storage.getItem('username'));
});
//请求个人评论回调
function resSelfComment(data){
	var html = template('selfCommentMode',data);
	$('.mui-content').html(html);
}
//关闭按钮
$(document).on('tap','.icon-close',function(){
	var commentid = $(this).attr('data-commentid');
	mui.confirm('确定要删除评论吗，删除后不能恢复！','确认删除',['取消','确认'],function(event){
		if(event.index == 1){
			reqDeleteSelfComment(resDeleteSelfComment,commentid);
		}
	});
});
//删除请求回调
function resDeleteSelfComment(data){
	if(data.data=='success'){
		mui.toast('删除成功！');
		reqSelfComment(resSelfComment,plus.storage.getItem('username'));
	}
}
