//请求歌曲列表
function reqQuerySongList(callback){
	var url = 'server/getSong.php';
	var param = {};
	postServer(url,param,callback);
}
//登录请求
function reqLogin(callback,username,password){
	var url = 'server/login.php';
	var param = {};
	param.username = username;
	param.password = password;
	postServer(url,param,callback);
}
//注册请求
function reqRegister(callback,username,password,useremail,userqq,usertel){
	var url = 'server/register.php';
	var param = {};
	param.username = username;
	param.password = password;
	param.useremail = useremail;
	param.userqq = userqq;
	param.usertel = usertel;
	postServer(url,param,callback);
}
//修改用户信息请求
function reqUpdateUserInfo(callback,username,changeItem,changeContent){
	var url = 'server/updateUserInfo.php';
	var param = {};
	param.username = username;
	param.changeItem = changeItem;
	param.changeContent = changeContent;
	postServer(url,param,callback);
}
//请求具体的歌单内容
function reqUserFormItem(callback,formid){
	var url = 'server/readList.php';
	var param = {};
	param.formid = formid;
	postServer(url,param,callback);
}
//请求排行榜信息
function reqGetRank(callback,rankTable){
	var url = 'server/getRank.php';
	var param = {};
	param.rankTable = rankTable;
	postServer(url,param,callback);
}
//请求搜索歌曲
function reqSearch(callback,keyword){
	var url = 'server/search.php';
	var param = {};
	param.keyword = keyword;
	postServer(url,param,callback);
}
//请求歌曲（单条）信息
function reqSongItem(callback,sid){
	var url = 'server/songItem.php';
	var param = {};
	param.sid = sid;
	postServer(url,param,callback);
}
//请求歌曲评论信息
function reqSongComment(callback,sid){
	var url = 'server/songComment.php';
	var param = {};
	param.sid = sid;
	postServer(url,param,callback);
}
//请求添加评论信息
function reqSubmitComment(callback,sid,songname,comment_con,comment_from){
	var url = 'server/submitComment.php';
	var param = {};
	param.sid = sid;
	param.songname = songname;
	param.comment_con = comment_con;
	param.comment_from = comment_from;
	postServer(url,param,callback);
}
//添加收藏的歌曲
function reqCollectSong(callback,sid,form){
	var url = 'server/collect.php';
	var param = {};
	param.sid = sid;
	param.form = form;
	postServer(url,param,callback);
}
//添加歌单
function reqAddForm(callback,formname,username){
	var url = 'server/createForm.php';
	var param = {};
	param.formname = formname;
	param.username = username;
	postServer(url,param,callback);
}
//更新歌单
function reqUpdateForm(callback,username){
	var url = 'server/updateSongForm.php';
	var param = {};
	param.username = username;
	postServer(url,param,callback);
}
//删除歌单
function reqDeleteForm(callback,username,formid){
	var url = 'server/deleteForm.php';
	var param = {};
	param.username = username;
	param.formid = formid;
	postServer(url,param,callback);
}
//请求个人评论
function reqSelfComment(callback,username){
	var url = 'server/selfComment.php';
	var param = {};
	param.username = username;
	postServer(url,param,callback);
}
//删除个人评论
function reqDeleteSelfComment(callback,commentid){
	var url = 'server/deleteComment.php';
	var param = {};
	param.comment_id = commentid;
	postServer(url,param,callback);
}
//提交反馈意见
function reqFeedBack(callback,content,username){
	var url = 'server/feedback.php';
	var param = {};
	param.username = username;
	param.content = content;
	postServer(url,param,callback);
}
//请求关于信息
function reqUpdateNews(callback){
	var url = 'server/updateNews.php';
	var param = {};
	postServer(url,param,callback);
}
//取消歌曲收藏
function reqCancelCollect(callback,formid,sid){
	var url = 'server/cancelCollect.php';
	var param = {};
	param.formid = formid;
	param.sid = sid;
	postServer(url,param,callback);
}
