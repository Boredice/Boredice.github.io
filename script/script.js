"use strict";

//Update & Debug
var updatedate = "";
if (updatedate !== "")
{
	window.location.href = "update?date=" + updatedate;
}
var debug = false;
if (window.location.href.indexOf("boredice.github.io" === -1))
{
	debug = true;
}
function checkDebug()
{
	if (debug)
	{
		console.warn("You are in debugging mode.\r\nThere has been a little change.");
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

//Notice Board
var notice = 
"Boredice把Random源代码误删了！(っ °Д °;)っ/n/没事干想做个Uwp版的Random，懒得做就直接把项目文件Shift+Delete了，结果删到旁边的WinformRandom了.../n/所以在近期，Xuler正式发布后，Random将重做啦！/n/将会加入更多新功能，如随机文件名，自定义规则随机，真随机等.../dn/对了，Xuler已经快做完了，敬请期待吧！/n/还有之前计划的Findow，额，Logo都设计好了，但不想管它了，近期内将不会开始开发。/dn/还有响应式网站设计，目前只有首页做到了，后续将会将其它页面适应移动端。/dn/发现一个惊天巨BU....G，INTROS中的网页引用JS时没有使用\"../\"，导致JS无法正常引用...";
function loadNotice()
{
	if (notice.length === 0)
	{
		notice = "这里空空如也";
	}
	notice = notice.replace(/\/n\//g, "\\n").replace(/\/dn\//g, "\\n\\n");
	var notice_a = document.getElementById("noticea");
	notice_a.href = "javascript:blurAlert('公告板 NOTICE BOARD\\n\\n" + notice + "')";
}

//Fuck Internet Explorer 9
var search = window.location.search;
if (search !== "?bslow") {
    var ievs = parseInt(navigator.appVersion.split(";")[1].replace(/[]/g, "").replace("MSIE", ""));
    if (navigator.appName === "Microsoft Internet Explorer" && ievs <= 9) {
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
	blurAlert("即将推出，敬请期待！你可以在反馈网页里说出对" + name + "的期待和建议。");
}
function blurAlert(msg)
{
	var body = document.getElementsByTagName("body")[0];
	setBlur(true);
	setTimeout(function(){alert(msg);},50);
	setTimeout(function(){setBlur(false);},50);
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
function formatNavtag()
{
	var navtag = document.getElementsByClassName("navtag");
	for (var i = 0; i < navtag.length; i++)
	{
		navtag[i].style.opacity = 1;
		if (navtag[i].innerHTML.indexOf("//") !== -1)
		{
			navtag[i].innerHTML = navtag[i].innerHTML.replace("//", "");
			navtag[i].style.color = "#00ABFF";
			navtag[i].style.fontWeight = "normal";
			navtag[i].style.borderBottom = "3px solid #00ABFF";
			navtag[i].style.height = "82px";
		}
	}
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
	document.getElementsByTagName("link")[1].setAttribute("href", bool ? "images/icons/icon.ico" : "images/icons/voidicon.ico");
}

//Console Log
if (!debug)
{
	console.log("                                                                  88    88                          \r\n88888888                                                          88    88                          \r\n88      88                                                        88                                \r\n88      88                                                        88                                \r\n88      88        88888888      88  88      888888        8888888888    88      888888      888888  \r\n88888888        88      8888    8888      88      88    88      8888    88    88          88      88\r\n88      8888    88        88    88        8888888888    88        88    88    88          8888888888\r\n88        88    88        88    88        88            88        88    88    88          88        \r\n88      8888    88      8888    88        88            88      8888    88    88          88        \r\n8888888888        88888888      88          888888        8888888888    88      888888      888888  ");
	console.log("哈哈，竟然有人看我代码了嘛，给你个彩蛋吧！（请将控制台调宽）");
}