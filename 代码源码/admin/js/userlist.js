$(document).ready( function () {
	if(!sessionStorage.getItem('loginFlag')){
		window.location.href = '../login.html';	
	}
    reqUserlist(resUserlist);
} );
var table = null;
//显示用户列表
function resUserlist(data){
	console.log(data);
	table = $('#table_id_example').DataTable({
		destroy:true,
		data:data.user,
		columns: [
            { data: 'username' },
            { data: 'password' },
            { data: 'usertel' },
            { data: 'useremail' },
            { data: 'userqq'},
            { data: 'selform'}
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
	var username = table.row('.selected').data().username;
	reqUserListHandle(resUserListHandle,username);
});
function resUserListHandle(data){
	console.log(data);
	reqUserlist(resUserlist);
}
//退出
$('#exit').on('click',function(){
	sessionStorage.removeItem('loginFlag');
	sessionStorage.removeItem('level');
	window.location.href = '../login.html';
});