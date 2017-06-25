//mui初始化配置
mui.init();
//纪录已下载的歌曲id
var hasDownload = new Array();
//首页
var main = null;
//api接口
mui.plusReady(function(){
	readCatalog();
	console.log(hasDownload);
	main = plus.webview.getLaunchWebview();
});
//获取sid
function getSid(sid){
	reqSongItem(createTask,sid);
}
//创建下载任务
function createTask(data){
	//判断是否已下载
	if(hasDownload.length > 0){
		for(var i = 0; i < hasDownload.length; i++){
			if(hasDownload[i].indexOf(data.song.songName)!=-1){
				mui.toast('歌曲已下载');
				return;
			}
		}
	}
	mui.toast('下载任务开始！');
	var task = Dtask(data.song.songName,data.song.sid,getBaseUrl()+data.song.songUrl);
	task.start();
	var html = template('downloadItem',data);
	$('#downloadBlock').append(html);
	if($('#downloadBlock').children('.down-item').length > 0){
		$('.no-download').hide();
	}
}
//下载任务
function Dtask(songname,sid,songsrc){
	var dtask = null;
	var options = {
		method:'GET',
		filename:'_downloads/'+songname+'.mp3'
	}
	dtask = plus.downloader.createDownload(songsrc,options,function(task,status){
		if(status == 200){
			mui.toast('下载成功' + task.filename);
			$(".down-item[data-sid="+sid+"]").remove();
			hasDownload.push(songname);
			if($('#downloadBlock').children('.down-item').length == 0){
				$('.no-download').show();
			}
		} else{
			mui.toast('下载失败！');
		}
	});
	return dtask;
}
//获取本地（_download文件夹对象）
function readCatalog(){
	hasDownload.splice(0,hasDownload.length);
	plus.io.requestFileSystem(plus.io.PUBLIC_DOWNLOADS,function(fs){
		//创建一个目录读取对象，用户读取目下的文件及子目录。
		var directoryReader = fs.root.createReader();
		//获取当前目录中的所有文件和子目录(过滤)
		directoryReader.readEntries(function(entries){
			for(var i = 0; i < entries.length; i++){
				hasDownload.push(entries[i].name);
			}
			var data = {
				songs:entries
			}
			showLocal(data);
			//删除事件
			$('.local-delete').on('tap',function(){
				entries[$(this).attr('data-target')].remove();
				$(this).parent('.mui-table-view-cell').remove();
				readCatalog();
				main.evalJS('localForm()');
			});
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
$('.complete-item-title').on('tap',function(){
	readCatalog();
});
