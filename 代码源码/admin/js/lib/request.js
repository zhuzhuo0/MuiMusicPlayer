//登录请求
function reqAdminLogin(callback,admin_user,admin_pass){
	var url = 'admin/login.php';
	var param = {};
	param.admin_user = admin_user;
	param.admin_pass = admin_pass;
	postServer(url,param,callback);
}
//获取登录日志
function reqLoginLog(callback){
	var url = 'admin/loginlog.php';
	postServer(url,'',callback);
}
//获取中文排名
function reqRankChina(callback){
	var url = 'admin/rank_China.php';
	postServer(url,'',callback);
}
//获取日文排名
function reqRankJapan(callback){
	var url = 'admin/rank_Japan.php';
	postServer(url,'',callback);
}
//获取英文排名
function reqRankEnglish(callback){
	var url = 'admin/rank_English.php';
	postServer(url,'',callback);
}
//获取歌曲列表
function reqSonglist(callback){
	var url = 'admin/songlist.php';
	postServer(url,'',callback);
}
//获取歌曲评论
function reqSongComment(callback){
	var url = 'admin/songComment.php';
	postServer(url,'',callback);
}
//获取反馈意见
function reqFeedBack(callback){
	var url = 'admin/feedback.php';
	postServer(url,'',callback);
}
//获取用户列表
function reqUserlist(callback){
	var url = 'admin/userlist.php';
	postServer(url,'',callback);
}
//获取管理员账户列表
function reqAdmin(callback){
	var url = 'admin/adminlist.php';
	postServer(url,'',callback);
}
//获取公告
function reqUpdate(callback){
	var url = 'admin/updateNews.php';
	postServer(url,'',callback);
}
//处理歌曲列表
function reqSonglistHandle(callback,flag,sid,songName,songFrom,songUrl,author){
	var url = 'admin/songlistHandle.php';
	var param = {};
	param.sid = sid;
	param.flag = flag;
	param.songName = songName;
	param.songFrom = songFrom;
	param.songUrl = songUrl;
	param.author = author;
	postServer(url,param,callback);
}
//处理歌曲评论
function reqSongCommentHandle(callback,comment_id){
	var url = 'admin/songCommentHandle.php';
	var param = {};
	param.comment_id = comment_id;
	postServer(url,param,callback);
}
//处理中文歌曲排名
function reqRankChinaHandle(callback,flag,sid,songName,songFrom,songUrl,author,rank){
	var url = 'admin/rankChinaHandle.php';
	var param = {};
	param.sid = sid;
	param.flag = flag;
	param.songName = songName;
	param.author = author;
	param.songUrl = songUrl;
	param.songFrom = songFrom;
	param.rank = rank;
	postServer(url,param,callback);
}
//处理英文歌曲排名
function reqRankEnglishHandle(callback,flag,sid,songName,songFrom,songUrl,author,rank){
	var url = 'admin/rankEnglishHandle.php';
	var param = {};
	param.sid = sid;
	param.flag = flag;
	param.songName = songName;
	param.author = author;
	param.songUrl = songUrl;
	param.songFrom = songFrom;
	param.rank = rank;
	postServer(url,param,callback);
}
//处理日文歌曲排名
function reqRankJapanHandle(callback,flag,sid,songName,songFrom,songUrl,author,rank){
	var url = 'admin/rankJapanHandle.php';
	var param = {};
	param.sid = sid;
	param.flag = flag;
	param.songName = songName;
	param.author = author;
	param.songUrl = songUrl;
	param.songFrom = songFrom;
	param.rank = rank;
	postServer(url,param,callback);
}
//处理用户列表
function reqUserListHandle(callback,username){
	var url = 'admin/userListHandle.php';
	var param = {};
	param.userName = username;
	postServer(url,param,callback);
}
//处理管理员账户
function reqAdminListHandle(callback,flag,admin_user,admin_pass,admin_level){
	var url = 'admin/adminListHandle.php';
	var param = {};
	param.flag = flag;
	param.admin_user = admin_user;
	param.admin_pass = admin_pass;
	param.admin_level = admin_level;
	postServer(url,param,callback);
}
//处理公告
function reqUpdateNewsHandle(callback,flag,upid,update_con){
	var url = 'admin/updateNewsHandle.php';
	var param = {};
	param.flag = flag;
	param.upid = upid;
	param.update_con = update_con;
	postServer(url,param,callback);
}
