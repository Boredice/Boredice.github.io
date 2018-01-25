"use strict";

//Cursor Light
function loadCursorLight()
{
	var body = document.getElementsByTagName("body")[0];
	var cursorlight = document.createElement("div");
	cursorlight.className = "cursorlight";
	body.appendChild(cursorlight);
	document.onmousemove = function(ev){updateCursorLight(ev);};
}
function updateCursorLight(ev)
{
	var cursorlight = document.getElementsByClassName("cursorlight")[0];
	cursorlight.style.left = ev.clientX - 1 + "px";
	cursorlight.style.top = ev.clientY - 1 + "px";
}

//Update & Debug
var updatedate = "1.28";
if (updatedate !== "")
{
	window.location.href = "update?date=" + updatedate;
}
var debug = false;
if (window.location.href.indexOf("https") === -1)
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
			if (taga[i].href.endsWith("/"))
			{
				taga[i].href += "boredice.github.io/index.html";
			}
			else if (taga[i].href.indexOf("javascript:") === -1 && taga[i].href.indexOf("#") === -1)
			{
				taga[i].href += ".html";
			}
		}
	}
}

//Memorial Day Gray
var month = new Date().getMonth() + 1;
var date = new Date().getDate();
if (month === 12 && date === 13)
{
	//NJDTS...
	document.getElementsByTagName("html")[0].style.filter = "grayscale()";
}
if (month === 5 && date === 12)
{
	//WCDDZ...
	document.getElementsByTagName("html")[0].style.filter = "grayscale()";
}

//Notice Board
var notice = 
"马上期末考试了啊啊啊啊！网站先不管了寒假再说！";
if (notice.length === 0)
{
	notice = "这里空空如也";
}
function alertNotice()
{
	blurAlert("公告板 NOTICE BOARD\n\n" + notice);
}

//Fuck Internet Explorer 9
var ievs = parseInt(navigator.appVersion.split(";")[1].replace(/[]/g, "").replace("MSIE", ""));
if (navigator.appName === "Microsoft Internet Explorer" && ievs <= 9)
	window.location.href = "bslow?iev=" + ievs;

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
		navtag[i].style.display = "inline-block";
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