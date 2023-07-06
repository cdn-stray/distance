<?php
//禁用错误报告
error_reporting(0);
//定义请求头
header('Content-type:text/json');
$链接 = $_GET["url"];
if (empty($链接)) {
    $输出['code'] = 201;
    $输出["msg"] = '缺少URL';
    echo json_encode($输出,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
    exit;
}
$接口数组 = 请求地址("http://110.42.2.247:880/analysis/json/?uid=2449&my=acfgikquvzFGJRW459&url=".$链接);
if (empty($接口数组)) {
    $播放链接 = false;
} else {
$抓取 = json_decode($接口数组,true);
if ($抓取['code'] == 200 && empty($抓取['url']) == false) {
    $播放链接 = $抓取['url'];
} else {
    $播放链接 = false;
}
}
if ($播放链接 == false) {
    $输出['code'] = 404;
    $输出["msg"]='解析失败';
} else {
    $输出['code'] = 200;
    $输出["msg"] = '解析成功';
    $输出["url"] = $播放链接;
}
echo json_encode($输出,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);

function 请求地址($链接){
$初始化 = curl_init();
    curl_setopt($初始化, CURLOPT_URL, $链接);
    curl_setopt($初始化, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($初始化, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($初始化, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($初始化, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($初始化, CURLOPT_TIMEOUT, 3); 
    curl_setopt($初始化, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    curl_setopt($初始化, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0); //强制协议为1.0
    curl_setopt($初始化, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4); //强制使用IPV4协议解析域名
    $输出 = curl_exec($初始化);
    curl_close($初始化);
    return $输出;
}