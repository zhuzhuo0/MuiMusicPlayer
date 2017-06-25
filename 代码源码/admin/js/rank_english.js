$(document).ready(function() {
	if(!sessionStorage.getItem('loginFlag')){
		window.location.href = '../login.html';	
	}
	reqRankEnglish(resRankEnglish);
});
var table = null;

function resRankEnglish(data) {
	console.log(data)
	table = $('#table_id_example').DataTable({
		destroy: true,
		data: data.songs,
		columns: [{
				data: 'rank'
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
			},
			{
				data: 'sid'
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
			reqRankEnglishHandle(resRankEnglishHandle, flag, sid, '', '', '', '', '');
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
				var rank = $('#rank').val();
				reqRankEnglishHandle(resRankEnglishHandle, flag, sid, songName, songFrom, songUrl, author, rank);
			});
			break;
		case '2':
			$('.mask').show();
			$('.btn-yes').on('click', function() {
				$('.mask').hide();
				var sid = $('#sid').val();
				var songName = $('#songName').val();
				var songFrom = $('#songFrom').val();
				var songUrl = $('#songUrl').val();
				var author = $('#author').val();
				var rank = $('#rank').val();
				reqRankEnglishHandle(resRankEnglishHandle, flag, sid, songName, songFrom, songUrl, author, rank);
			});
			break;
	}
});
//选中事件
$(document).on('click', '#table_id_example tbody tr', function() {
	if($(this).hasClass('selected')) {
		$(this).removeClass('selected');
	} else {
		table.$('tr.selected').removeClass('selected');
		$(this).addClass('selected');
	}
});

function resRankEnglishHandle(data) {
	console.log(data);
	$('#songName,#songFrom,#songUrl,#author,#rank,#sid').val('');
	reqRankEnglish(resRankEnglish);
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