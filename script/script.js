"use strict";

//Update & Debug
var updatedate = "";
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
			if (taga[i].href.indexOf("javascript:") === -1)
			{
				taga[i].href += ".html";
			}
		}
	}
}

//Notice Board
var notice = 
"Hi, Boredicer!/n/Boredice网站进行了一次大更新！ヾ(≧▽≦*)o/n/惊不惊喜？意不意外？喜欢吗，有建议就在反馈页面里说出来吧！/n/目前呢，正在继续更新网站，Xuler先不管了，Cnote也还在开发，CLock也先不管了";
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

//Emoticons
var emo_element;
//34 emoticons (颜文字)
var emo = ["ヾ(≧▽≦*)o", "( •̀ ω •́ )✧", "o(*￣▽￣*)ブ", "(＠_＠;)", "(ﾉ*･ω･)ﾉ", "(❤ ω ❤)", "\(@^0^@)/", "┗|｀O′|┛ ~~", "○( ＾皿＾)っ", "φ(゜▽゜*)♪", "(｡･∀･)ﾉ", "ヾ(•ω•`)o", "(´▽`ʃ♡ƪ)", "(✿◡‿◡)", "o(^▽^)o", "◑﹏◐", "(O _ O)", "Ψ(￣∀￣)Ψ", "( ఠൠఠ )ﾉ", "(✿◕‿◕✿)", "o(=•ェ•=)m", "(。・∀・)ノ", "( o=^•ェ•)o ┏━┓", "(～﹃～)~zZ", "(☆▽☆)", "( $ _ $ )", "(＞人＜；)", "O(∩_∩)O", "U•ェ•*U", "ε=ε=ε=(~￣▽￣)~", "( *︾▽︾)", "^(*￣(oo)￣)^", "┏ (゜ω゜)=☞", "(ಥ _ ಥ)"];
function loadEmoticons()
{
	emo_element = document.getElementById("emoticons");
	emo_element.href = "javascript:setEmoticons()";
	setInterval(function(){setEmoticons();}, 1250);
	setEmoticons();
}
function setEmoticons()
{
	emo_element.innerHTML = emo[random(0, emo.length - 1)];
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
function random(min, max)
{
	var dbrandom = (max - min) * Math.random() + min + 1;
	return parseInt(dbrandom);
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