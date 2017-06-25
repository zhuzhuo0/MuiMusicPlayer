//mui初始化配置
mui.init();
//api插件初始化
mui.plusReady(function(){
	reqUpdateNews(resUpdateNews);
});
//请求回调
function resUpdateNews(data){
	var html = template('updateItemMode',data);
	$('.update_block').html(html);
}
