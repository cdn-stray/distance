// 筛选页功能关闭中
muban.mxone5.二级.desc = '.video-info-items:eq(6)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
var rule={
    title:'子子影视',
    模板:'mxone5',
    host:'https://www.ziziys.com',
    url:'/vodshow/fyfilter.html',
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'20&26&21&22',
    class_parse:'',
	lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == "1") {
			url = unescape(url)
		} else if (html.encrypt == "2") {
			url = unescape(base64Decode(url))
		}
		if (/m3u8|mp4/.test(url)) {
			input = url
		} else {
			input
		}
	`,
    // searchUrl:'/vsearch/**--fypage.html',
    searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
    detailUrl:'/vdetail/fyid.html', //非必填,二级详情拼接链接
    搜索:'json:list;name;pic;;id',
}
