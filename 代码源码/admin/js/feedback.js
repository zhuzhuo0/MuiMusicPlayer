$(document).ready( function () {
    reqFeedBack(resFeedBack);
    if(!sessionStorage.getItem('loginFlag')){
		window.location.href = '../login.html';	
	}
} );
//反馈信息回调
function resFeedBack(data){
	console.log(data)
	$('#table_id_example').DataTable({
		data:data.feedback,
		 columns: [
            { data: 'qid' },
            { data: 'ques_con' },
            { data: 'ques_from' },
            { data: 'date'  }
        ]
	});
}
//退出
$('#exit').on('click',function(){
	sessionStorage.removeItem('loginFlag');
	sessionStorage.removeItem('level');
	window.location.href = '../login.html';
});