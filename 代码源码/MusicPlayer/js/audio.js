/*
 * 播放相关对象管理
 * 命名：audioXX
 */
//音频对象
var audiop = null;
//歌曲对象
var song = null;
//是否播放
var isPlaying = false;
//当前播放歌曲索引
var currentIndex;
//播放列表集合
var songlist;
//当前播放模式
var playmode = 'line';
//歌曲当前时间的计时器
var songTimer = null;
//当前歌曲总时长
var totalTimes;
var totalTimesBlock = document.getElementById("pdSongTotalTime");
//当前播放时长
var currentTimes;
var currentTimesBlock = document.getElementById("pdSongPlayTime");
//改变播放模式
var checkMode = 0;
var modeArr = ['line','loop','random'];
/*
 * 音频相关事件部分
 * 事件监听
 */
//乐库歌曲列表点击事件
$(document).on('tap','.song-online-item',function(){
	song = new Song($(this).attr('data-sid'),$(this).attr('data-songName'),$(this).attr('data-songSrc'),$(this).attr('data-author'),$(this).attr('data-songFrom'));
	song.startPlayer();
	currentIndex = $(this).attr('data-index');
	songlist = $('.song-online-item');
});
//歌单歌曲列表点击事件
$(document).on('tap','.song-form-item',function(){
	song = new Song($(this).attr('data-sid'),$(this).attr('data-songName'),$(this).attr('data-songSrc'),$(this).attr('data-author'),$(this).attr('data-songFrom'));
	song.startPlayer();
	currentIndex = $(this).attr('data-index');
	songlist = $(this).parent('.songitem-parent').children('.song-form-item');
});
//本地歌曲列表点击事件
$(document).on('tap','.song-download-item',function(){
	song = new Song($(this).attr('data-sid'),$(this).attr('data-songName'),$(this).attr('data-songSrc'),$(this).attr('data-author'),$(this).attr('data-songFrom'));
	song.startPlayer();
	//有问题 ，暂时没有找到办法
	currentIndex = $(this).attr('data-index');
	songlist = $('.song-download-item');
});
//显示详情面板
document.getElementById('playDetailBtn').addEventListener('tap', function() {
	showPlayer();
}, false);
//播放按钮事件
$('#playerBtn,#pdSongPlayBtn').bind('tap', function(event) {
	if(isPlaying) {
		song.pausePlayer();
		$('#playerBtn,#pdSongPlayBtn').html('&#xe600;');
	} else {
		if(!audiop){
			return;
		}
		song.resumePlayer();
		$('#playerBtn,#pdSongPlayBtn').html('&#xe609;');
	}
	event.stopPropagation();
});
//上一首按钮
$('#pdSongPrevBtn').bind('tap',prevSong);
//下一首按钮
$('#pdSongNextBtn').bind('tap',nextSong);
//切换换播放模式
$('#pdSongMode').bind('tap',changeMode);
//下载按钮
$('#pdSongDownBtn').bind('tap',songDetailDownload);

/*
 * 函数部分
 */
//歌曲对象
function Song(sid,songName,songUrl,author,songFrom){
	this.sid = sid;
	this.songName = songName;
	this.songUrl = songUrl;
	this.author = author;
	this.songFrom = songFrom;
	//歌曲播放方法
	this.startPlayer = function(){
		//清除歌曲时间计时器
		clearInterval(songTimer);
		mui('#pdSongProgress').progressbar().setProgress(0);
		if(plus.audio == undefined){
			mui.toast('Device not Ready!');
		}
		if(audiop){
			audiop.stop();
			audiop = null;
		}
		audiop = plus.audio.createPlayer(this.songUrl);
		audiop.play(function(){
			//清除歌曲时间计时器
			clearInterval(songTimer);
			audiop = null;
			song = null;
			continuePlay();
		},function(e){
			alert('Audio play error:' + e.message);
		});
		isPlaying = true;	
		startChange();
		//获取歌曲总时长
		setTimeout(function(){
			totalTimes = audiop.getDuration();
			totalTimesBlock.innerText = "0" + Math.floor(totalTimes / 60) + ':' + Math.floor(totalTimes % 60);
		},300);
		
		//更新当前歌曲播放位置
		songTimer = setInterval(function(){
			currentTimes = audiop.getPosition();
			currentTimesBlock.innerText = "0" + parseInt(currentTimes / 60) + ":" + (currentTimes % 60 < 10 ? "0" + Math.floor(currentTimes % 60): Math.floor(currentTimes % 60));
			mui('#pdSongProgress').progressbar().setProgress(parseInt(currentTimes / totalTimes * 100));
		},500);
	};
	this.pausePlayer = function(){
			audiop.pause();
			isPlaying = false;
	};
	this.resumePlayer = function(){
			audiop.resume();
			isPlaying = true;
	};
}
//开始播放-标识变化
function startChange(){
	//修改底部
	$('#playerBtn,#pdSongPlayBtn').html("&#xe609;");
	$('.bottom-player-songName').html(song.songName);
	$('.player-from').html(song.songFrom);
	//详情页面
	$('#pdSongName').html(song.songName);
	$('#pdAuthor').html(song.author);
}
//上一首
function prevSong(){
	if(currentIndex == 0){
		mui.toast('这已经是第一首了！');
		return;
	}else{
		mui.trigger(songlist[parseInt(currentIndex) - 1],'tap');
	}
}
//下一首
function nextSong(){
	if(currentIndex ==(songlist.length - 1)){
		mui.toast('列表播放结束！');
		return;
	} else{
		mui.trigger(songlist[parseInt(currentIndex) + 1],'tap');
	}
}
//继续播放
function continuePlay(){
	switch (playmode){
		case 'line':
			nextSong();
			break;
		case 'loop':
			mui.trigger(songlist[currentIndex],'tap');
			break;
		case 'random':
			mui.trigger(songlist[Math.round(Math.random()*(songlist.length - 1))],'tap');
	}
}
//改变播放模式
function changeMode(){
	checkMode++;
	switch (checkMode%3){
		case 1:
			$('#pdSongMode').html('&#xe604;');
			mui.toast('当前播放模式为：循环播放');
			playmode = modeArr[1];
			break;
		case 2:
			$('#pdSongMode').html('&#xe62a;');
			mui.toast('当前播放模式为：随机播放');
			playmode = modeArr[2];
			break;
		case 0:
			$('#pdSongMode').html('&#xe633;');
			mui.toast('当前播放模式为：顺序播放');
			playmode = modeArr[0];
			break;
	}
	
}
//歌曲下载
function songDetailDownload(){
	if(song.sid==0){
		mui.toast('当前的歌曲是本地歌曲，该歌曲已下载！');
		return;
	}
	var downPage = plus.webview.getWebviewById('downPage');
	downPage.evalJS("getSid("+song.sid+")");
}
