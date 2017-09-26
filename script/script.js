//Update
//window.location.href='update?date=9.28';

//Fuck Internet Explorer 9
var search = window.location.search;
if (search !== "?bslow")
{
	var ievs = parseInt(navigator.appVersion.split(";")[1].replace(/[]/g, "").replace("MSIE", ""));
	if (navigator.appName == "Microsoft Internet Explorer" && 
		ievs <= 9)
	{
		window.location.href = "bslow?iev=" + ievs;
	}
}

//Baidu Statistics
var _hmt = _hmt || [];
(function () {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?7e9a6e18dedc6b09b765fd1aac6591b4";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();

//Console Log
console.log("　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　囧　　囧　　　　　　　　　　　　　\r\n囧囧囧囧　　　　　　　　　　　　　　　　　　　　　　　　　　　　　囧　　囧　　　　　　　　　　　　　\r\n囧　　　囧　　　　　　　　　　　　　　　　　　　　　　　　　　　　囧　　　　　　　　　　　　　　　　\r\n囧　　　囧　　　　　　　　　　　　　　　　　　　　　　　　　　　　囧　　　　　　　　　　　　　　　　\r\n囧　　　囧　　　　囧囧囧囧　　　囧　囧　　　囧囧囧　　　　囧囧囧囧囧　　囧　　　囧囧囧　　　囧囧囧　\r\n囧囧囧囧　　　　囧　　　囧囧　　囧囧　　　囧　　　囧　　囧　　　囧囧　　囧　　囧　　　　　囧　　　囧\r\n囧　　　囧囧　　囧　　　　囧　　囧　　　　囧囧囧囧囧　　囧　　　　囧　　囧　　囧　　　　　囧囧囧囧囧\r\n囧　　　　囧　　囧　　　　囧　　囧　　　　囧　　　　　　囧　　　　囧　　囧　　囧　　　　　囧　　　　\r\n囧　　　囧囧　　囧　　　囧囧　　囧　　　　囧　　　　　　囧　　　囧囧　　囧　　囧　　　　　囧　　　　\r\n囧囧囧囧囧　　　　囧囧囧囧　　　囧　　　　　囧囧囧　　　　囧囧囧囧囧　　囧　　　囧囧囧　　　囧囧囧　");
console.log("\u54C8\u54C8\uFF0C\u7ADF\u7136\u6709\u4EBA\u770B\u6211\u4EE3\u7801\u4E86\u561B\uFF0C\u7ED9\u4F60\u4E2A\u5F69\u86CB\u5427\uFF01");