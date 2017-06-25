//mui初始化配置
mui.init();
//api插件初始化
mui.plusReady(function(){
	//提交事件
	$('#submitBtn').on('tap',function(){
		if($('#textarea').val()==''){
			mui.toast('请填写内容！');
		}else{
			reqFeedBack(resFeedBack,$('#textarea').val(),plus.storage.getItem('username'));
		}
	});
	//取消事件
	$('#resetBtn').on('tap',function(){
		$('#textarea').val('');
	});
});

//提交回调函数
function resFeedBack(data){
	if(data.data=='success'){
		mui.toast('感谢您给予的支持，谢谢！');
		$('#textarea').val('');
	}
	mui.back();
}
