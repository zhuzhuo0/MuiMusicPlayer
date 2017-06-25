$(document).ready( function () {
	if(!sessionStorage.getItem('loginFlag')){
		window.location.href = '../login.html';	
	}
    reqSongComment(resSongComment);
} );
var table = null;
function resSongComment(data){
	console.log(data)
	table = $('#table_id_example').DataTable({
		destroy:true,
		data:data.songcomment,
		 columns: [
            { data: 'comment_id' },
            { data: 'songname' },
            { data: 'comment_con' },
            { data: 'comment_from'  },
            { data: 'date'},
            { data: 'sid'}
        ]
	});
}
//选中事件
$(document).on('click','#table_id_example tbody tr',function(){
	if($(this).hasClass('selected')){
		$(this).removeClass('selected');
	} else{
		table.$('tr.selected').removeClass('selected');
		$(this).addClass('selected');
	}
});
//按钮点击事件
$('.btn-item').on('click',function(){
	var comment_id = table.row('.selected').data().comment_id;
	reqSongCommentHandle(resSongCommentHandle,comment_id);
});
function resSongCommentHandle(data){
	console.log(data);
	table.destroy();
	reqSongComment(resSongComment);
}
//退出
$('#exit').on('click',function(){
	sessionStorage.removeItem('loginFlag');
	sessionStorage.removeItem('level');
	window.location.href = '../login.html';
});