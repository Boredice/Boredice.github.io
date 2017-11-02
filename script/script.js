"use strict";

//Update Page
var updatedate = "";
if (updatedate !== "")
{
	window.location.href = "update?date=" + updatedate;
}

//Fuck Internet Explorer 8
var search = window.location.search;
if (search !== "?bslow") {
    var ievs = parseInt(navigator.appVersion.split(";")[1].replace(/[]/g, "").replace("MSIE", ""));
    if (navigator.appName === "Microsoft Internet Explorer" && ievs <= 8) {
        window.location.href = "bslow?iev=" + ievs;
    }
}

//Functions
function setBlur(bool)
{
	var body = document.getElementsByTagName("body")[0];
	body.style.filter = bool?"blur(5px)":"";
}
function soonAlert(name)
{
	blurAlert("即将推出，敬请期待！你可以在评论网页里说出对" + name + "的期待和建议。");
}
function blurAlert(msg)
{
	var body = document.getElementsByTagName("body")[0];
	setBlur(true);
	setTimeout(function(){alert(msg);},50);
	setTimeout(function(){body.style.filter = "";},50);
}
function refresh()
{
	location.reload();
}
function linkTo(href)
{
	location.href = href;
}
function voidDrag()
{
	var taga = document.getElementsByTagName("a");
	for (var i = 0; i < taga.length; i++)
	{
		taga[i].draggable = false;
	}
	var tagimg = document.getElementsByTagName("img");
	for (var i = 0; i < tagimg.length; i++)
	{
		tagimg[i].draggable = false;
	}
}
function checkDebug()
{
	var lchref = window.location.href;
	if (lchref.indexOf("boredice.github.io" === -1))
	{
		console.warn("You are in debugging mode...");
		var taga = document.getElementsByTagName("a");
		for (var i = 0; i < taga.length; i++)
		{
			if (taga[i].href.indexOf("javascript:") === -1)
			{
				taga[i].href += ".html";
			}
		}
	}
}
function loadAllFunction()
{
	voidDrag();
	loadTitle();
	loadOfflineTip();
	checkDebug();
}

//Title & Icon
function loadTitle()
{
	setTitle(true);
	window.onblur = function(){setTitle(false);};
	window.onfocus = function(){setTitle(true);};
}
function setTitle(bool)
{
	document.title = bool ? "Hi, Boredicer!" : "Boredice";
	document.getElementsByTagName("link")[1].setAttribute("href", bool ? "icon.ico" : "voidicon.ico");
}

//Offline Tip
function loadOfflineTip()
{
	window.ononline = function(){setOfflineTip(true);};
	window.onoffline = function(){setOfflineTip(false);};
	document.getElementById("offline").className = "tipbar";
	document.getElementById("offlinetxt").innerHTML = "你似乎未连接到Internet~";
	document.getElementById("offlineicon").src = "images/Internet.png";
	document.getElementById("offlineicon").draggable = "false";
}
function setOfflineTip(bool)
{
	console.log(bool);
	document.getElementById("offline").hidden = bool;
}

//Baidu Statistics
var _hmt = _hmt || [];
var hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?7e9a6e18dedc6b09b765fd1aac6591b4";
var s = document.getElementsByTagName("script")[0];
s.parentNode.onerror = function () {blurAlert("Error");};
s.parentNode.insertBefore(hm, s);

//Console Log
console.log("                                                                  88    88                          \r\n88888888                                                          88    88                          \r\n88      88                                                        88                                \r\n88      88                                                        88                                \r\n88      88        88888888      88  88      888888        8888888888    88      888888      888888  \r\n88888888        88      8888    8888      88      88    88      8888    88    88          88      88\r\n88      8888    88        88    88        8888888888    88        88    88    88          8888888888\r\n88        88    88        88    88        88            88        88    88    88          88        \r\n88      8888    88      8888    88        88            88      8888    88    88          88        \r\n8888888888        88888888      88          888888        8888888888    88      888888      888888  ");
console.log("\u54C8\u54C8\uFF0C\u7ADF\u7136\u6709\u4EBA\u770B\u6211\u4EE3\u7801\u4E86\u561B\uFF0C\u7ED9\u4F60\u4E2A\u5F69\u86CB\u5427\uFF01\uFF08\u8BF7\u5C06\u63A7\u5236\u53F0\u8C03\u5BBD\uFF09");