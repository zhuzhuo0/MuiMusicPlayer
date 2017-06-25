//初始化
$(document).ready(function() {
	//判断是否登录
	if(!sessionStorage.getItem('loginFlag')){
		window.location.href = '../login.html';	
	}
	reqSonglist(resSonglist);
});
//table操作
var table = null;

function resSonglist(data) {
	//显示datatables
	table = $('#table_id_example').DataTable({
		destroy: true,
		data: data.songs,
		columns: [{
				data: 'sid'
			},
			{
				data: 'songName'
			},
			{
				data: 'songFrom'
			},
			{
				data: 'songUrl'
			},
			{
				data: 'author'
			}
		]
	});
}
//按钮点击事件
$('.btn-item').on('click', function() {
	var flag = $(this).attr('data-task');
	switch(flag) {
		case '0':
			var sid = table.row('.selected').data().sid;
			reqSonglistHandle(resSonglistHandle, flag, sid, '', '', '', '');
			break;
		case '1':
			var sid = table.row('.selected').data().sid;
			$('.mask').show();
			$('.btn-yes').on('click', function() {
				$('.mask').hide();
				var songName = $('#songName').val();
				var songFrom = $('#songFrom').val();
				var songUrl = $('#songUrl').val();
				var author = $('#author').val();
				reqSonglistHandle(resSonglistHandle, flag, sid, songName, songFrom, songUrl, author);
			});
			break;
		case '2':
			$('.mask').show();
			$('.btn-yes').on('click', function() {
				$('.mask').hide();
				var songName = $('#songName').val();
				var songFrom = $('#songFrom').val();
				var songUrl = $('#songUrl').val();
				var author = $('#author').val();
				reqSonglistHandle(resSonglistHandle, flag, '', songName, songFrom, songUrl, author);
			});
			break;
	}
});
//选中事件
$(document).on('click', '#table_id_example tbody tr', function() {
	console.log(1);
	if($(this).hasClass('selected')) {
		$(this).removeClass('selected');
	} else {
		table.$('tr.selected').removeClass('selected');
		$(this).addClass('selected');
	}
});

function resSonglistHandle(data) {
	console.log(data);
	$('#songName,#songFrom,#songUrl,#author').val('');
	reqSonglist(resSonglist);
	$('.btn-yes').off('click');
}
$('.btn-no').on('click', function() {
	$('.mask').hide();
});
//退出
$('#exit').on('click',function(){
	sessionStorage.removeItem('loginFlag');
	sessionStorage.removeItem('level');
	window.location.href = '../login.html';
});