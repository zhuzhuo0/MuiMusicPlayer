$(document).ready( function () {
	if(!sessionStorage.getItem('loginFlag')){
		window.location.href = '../login.html';	
	}
    reqAdmin(resAdmin);
    //判断权限是否为最高
    if(sessionStorage.getItem('level')=="1"){
    	$('.btn-item').hide();
    }else{
    	$('.warning-title').hide();
    }
} );
//datatable对象
var table = null;
//请求回调
function resAdmin(data){
	console.log(data)
	table = $('#table_id_example').DataTable({
		destroy:true,
		data:data.admin,
		 columns: [
            { data: 'admin_user' },
            { data: 'admin_pass' },
            { data: 'admin_level' }
        ]
	});
}
//按钮点击事件
$('.btn-item').on('click', function() {
	$('#admin_user').removeAttr('disabled');
	var flag = $(this).attr('data-task');
	switch(flag) {
		case '0':
			$('.mask').show();
			$('#admin_level').val('1').attr('disabled','disabled');
			$('.btn-yes').on('click',function(){
				var admin_user = $('#admin_user').val();
				var admin_pass = $('#admin_pass').val();
				var admin_level = $('#admin_level').val();
				$('.mask').hide();
				reqAdminListHandle(resAdminListHandle,flag,admin_user,admin_pass,admin_level);
			});
			break;
		case '1':
			var admin_user = table.row('.selected').data().admin_user;
			if(table.row('.selected').data().admin_level==0){
				alert('不能删除最高权限用户，该管理员账户是唯一最高权限用户！');
			}else{
				reqAdminListHandle(resAdminListHandle,flag,admin_user,'','');
			}
			break;
		case '2':
			var admin_user = table.row('.selected').data().admin_user;
			$('.mask').show();
			$('#admin_user').attr('disabled','disabled').val(admin_user);
			$('#admin_pass').val(table.row('.selected').data().admin_pass);
			$('#admin_level').val(table.row('.selected').data().admin_level);
			$('.btn-yes').on('click',function(){
				$('.mask').hide();
				$('#admin_user').removeAttr('disabled');
				reqAdminListHandle(resAdminListHandle,flag,$('#admin_user').val(),$('#admin_pass').val(),$('#admin_level').val());
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

function resAdminListHandle(data) {
	console.log(data);
	if(data.data=='exist'){
		alert('该账号已存在！');
	}else{
		$('#admin_user,#admin_pass,#admin_level').val('');
		reqAdmin(resAdmin);
	}
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
