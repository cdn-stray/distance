muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = '#y-playList .tab-item';
var rule = {
	title:'大师兄影视',
	模板:'mxpro',
	host:'https://www.shzpin.com',
	url:'/vodshow/fyfilter.html',
        class_name:'电影&电视剧&综艺&动漫',
        class_url:'20&26&21&22',
	class_parse:'.navbar-items.swiper-wrapper li;a&&title;a&&href;/(\\d+).html',
	lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
	searchUrl:'/vodsearch/**-------------.html',
	二级访问前:'log(MY_URL);MY_URL=MY_URL.replace("/p","/v").replace("-1-1","")',
	搜索:'json:list;name;pic;;id',
}
