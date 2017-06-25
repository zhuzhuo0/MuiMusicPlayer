/*
 * 网络请求
 */
function postServer(url,params,callback){
	$.ajax(getBaseUrl()+url, {
		type:'post',
		cache:false,//禁用缓存
		data:params,
		dataType:"json",
		success:function(data){
			if(data.errCode == 0) {
				callback(data);
			}else{
				mui.toast(data.errMsg);
			}
		},
		error:function(){
			mui.toast('查询失败');
		}
	});
}
