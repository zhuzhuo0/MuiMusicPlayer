//mui配置初始化
mui.init();
//历史纪录
var historylist; 
/*歌曲详情页*/
var detailPage = null;
//自定义事件监听
document.addEventListener('refreshSearch',function(){
	$('.search-items-content').html('');
	$('#searchCon').val('');
	$('#searchCon').trigger('blur');
	mui.plusReady(function(){
		if(plus.storage.getItem('historylist')){
			historylist = JSON.parse(plus.storage.getItem('historylist'));
			if(historylist.lists.length > 5){
				historylist.lists.shift();
			}
		}else{
			historylist = {lists:[]};
		}
		showHistr(historylist);
	});
});

//搜索栏部分
$('#searchCon').on('input',function(){
	if($(this).val()==''){
		$('#searchItemBlock').html('');
	}else{
		reqSearch(resSearch,$(this).val());
	}
});
$('#searchCon').on('blur',function(){
	$('#searchItemBlock').html('');
	$('.search-history').css('display','block');
});
//搜索歌曲处理
function resSearch(data){
	var html = template('searchItemMode',data);
	$('#searchItemBlock').html(html);
	$('.search-item').on('tap',function(){
		var hisobj = {};
		hisobj.songname = $(this).html();
		hisobj.songid = $(this).attr('data-sid');
		historylist.lists.push(hisobj);
		plus.storage.setItem('historylist',JSON.stringify(historylist));
		openDetail($(this).attr('data-sid'));
	});
}
//搜索历史
$('#searchCon').on('focus',function(){
	$('.search-history').css('display','none');
});
function showHistr(data){
	var html = template('historyItemMode',data);
	$('.search-items-content').html(html);
}
$(document).on('tap','.history-item',function(){
	openDetail($(this).attr('data-sid'));
});
//跳转到详情页(通过歌曲ID)
function openDetail(sid){
	//触发页面的refresh事件
	if(!detailPage){
		detailPage = plus.webview.getWebviewById('songDetail');
	}
	mui.fire(detailPage,'songId',{
		sid : sid
	});
	//打开新页面
	mui.openWindow({
		id:'songDetail'
	});
}

