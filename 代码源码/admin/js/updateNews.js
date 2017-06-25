//初始化
$(document).ready(function() {
	//判断是否登录
	if(!sessionStorage.getItem('loginFlag')){
		window.location.href = '../login.html';	
	}
	reqUpdate(resUpdate);
});
//table操作
var table = null;

function resUpdate(data) {
	//显示datatables
	table = $('#table_id_example').DataTable({
		destroy: true,
		data: data.updates,
		columns: [{
				data: 'upid'
			},
			{
				data: 'update_con'
			},
			{
				data: 'update_date'
			}
		]
	});
}
//按钮点击事件
$('.btn-item').on('click', function() {
	var flag = $(this).attr('data-task');
	switch(flag) {
		case '0':
			var upid = table.row('.selected').data().upid;
			reqUpdateNewsHandle(resUpdateNewsHandle, flag, upid, '');
			break;
		case '1':
			$('.mask').show();
			$('.btn-yes').on('click', function() {
				$('.mask').hide();
				var update_con = $('#update_con').val();
				reqUpdateNewsHandle(resUpdateNewsHandle, flag, '', update_con);
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

function resUpdateNewsHandle(data) {
	console.log(data);
	$('#update_con').val('');
	reqUpdate(resUpdate);
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