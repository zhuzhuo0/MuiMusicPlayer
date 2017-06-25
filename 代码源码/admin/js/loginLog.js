$(document).ready( function () {
	if(!sessionStorage.getItem('loginFlag')){
		window.location.href = '../login.html';	
	}
    reqLoginLog(resLoginLog);
} );
function resLoginLog(data){
	console.log(data)
	$('#table_id_example').DataTable({
		data:data.log,
		 columns: [
            { data: 'id' },
            { data: 'username' },
            { data: 'date' }
        ]
	});
}
//退出
$('#exit').on('click',function(){
	sessionStorage.removeItem('loginFlag');
	sessionStorage.removeItem('level');
	window.location.href = '../login.html';
});