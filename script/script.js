"use strict";
/* jshint unused:false */

//Browser
/*function isMobile()
{
	return /Android|WebOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
}
if (isMobile())
{
	window.location.href = "more/mobile.html";
}*/
function getBrowser() {
	//Opera和Edge就不管了
	var browser = "Unknown";
	var version = "Unknown";
	var ua =navigator.userAgent.toLowerCase();
	if (IEVersion() !== -1){
    	browser = "Internet Exlorer";
		version = IEVersion();
	}
	else if (ua.match(/firefox/)){
    	browser = "Firefox";  
		version = ua.match(/firefox\/([\d.]+)/)[1];
	}
	else if (ua.match(/chrome/)){
		browser = "Chrome";
		version = ua.match(/chrome\/([\d.]+)/)[1];
	}
	else if (ua.match(/safari/)) {
    	browser = "Safari";
		version = ua.match(/version\/([\d.]+)/)[1];
	}
	return [browser, version];
}
function IEVersion() {
	//From https://www.cnblogs.com/XCWebLTE/archive/2017/06/15/7017338.html
    var userAgent = navigator.userAgent;
	//判断是否IE<11浏览器  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        }
		else if(fIEVersion == 8) {
            return 8;
        }
		else if(fIEVersion == 9) {
            return 9;
        }
		else if(fIEVersion == 10) {
            return 10;
        }
		else {
            return 6;//IE版本<=7
        }   
    }
	else if(isIE11) {
        return 11;
    }
	else {
		//不是IE浏览器
        return -1;
    }
}
if (IEVersion() !== -1 && IEVersion() < 9) {
	//Fuck IE 8
	window.location.href = "bslow?iev=" + IEVersion();
}

//Cursor Light
function loadCursorLight() {
	var body = document.getElementsByTagName("body")[0];
	var cursorlight = document.createElement("div");
	cursorlight.className = "cursorlight";
	body.appendChild(cursorlight);
	document.onmousemove = function (ev) {
		updateCursorLight(ev);
	};
}
function updateCursorLight(ev) {
	var cursorlight = document.getElementsByClassName("cursorlight")[0];
	cursorlight.style.left = ev.clientX - 1 + "px";
	cursorlight.style.top = ev.clientY - 1 + "px";
}

//Update & Debug
String.prototype.startsWith = function(str){var reg = new RegExp("^" + str);return reg.test(this);};
String.prototype.endsWith = function(str){var reg = new RegExp(str + "$");return reg.test(this);};
var updatedate = "";
if (updatedate !== "") {
	window.location.href = "update?date=" + updatedate;
}
var debug = false;
if (window.location.href.startsWith("file:///")) {
	debug = true;
}
function checkDebug() {
	if (debug) {
		console.warn("You are in debugging mode.\r\nThere has been a little change.");
		var taga = document.getElementsByTagName("a");
		for (var i = 0; i < taga.length; i++) {
			if (taga[i].href.endsWith("/")) {
				taga[i].href += "icyqjj.github.io/index.html";
			} else if (taga[i].href.indexOf("javascript:") === -1 && taga[i].href.indexOf("#") === -1) {
				taga[i].href += ".html";
			}
		}
	}
}

//Notice Board
var notice = "";
if (notice.length === 0) {
	notice = "这里空空如也";
}
function alertNotice() {
	blurAlert("公告板 NOTICE BOARD\n\n" + notice);
}

//Functions
function soonAlert(name) {
	blurAlert("即将推出，敬请期待！你可以在反馈网页里说出对" + name + "的期待和建议。");
}
function blurAlert(msg) {
	var body = document.getElementsByTagName("body")[0];
	body.style.filter = "blur(8px)";
	body.style.pointerEvents = "none";
	setTimeout(function () {
		alert(msg);
		body.style.filter = "";
		body.style.pointerEvents = "all";
	}, 425);
}
function refresh() {
	location.reload();
}
function linkTo(href) {
	location.href = href;
}
function voidDrag() {
	var taga = document.getElementsByTagName("a");
	for (var i = 0; i < taga.length; i++) {
		taga[i].draggable = false;
	}
	var tagimg = document.getElementsByTagName("img");
	for (var i = 0; i < tagimg.length; i++) {
		tagimg[i].draggable = false;
	}
}

//Title & Icon
function loadTitle() {
	setTitle(true);
	window.onblur = function () {
		setTitle(false);
	};
	window.onfocus = function () {
		setTitle(true);
	};
}
function setTitle(bool) {
	document.title = bool ? "Hi, IcyFlamer!" : "IcyFlame";
	document.getElementsByTagName("link")[1].setAttribute("href", bool ? "images/icons/icon.ico" : "images/icons/voidicon.ico");
}

//Console Log
if (!debug) {
	console.log("                                                                  88    88                          \r\n88888888                                                          88    88                          \r\n88      88                                                        88                                \r\n88      88                                                        88                                \r\n88      88        88888888      88  88      888888        8888888888    88      888888      888888  \r\n88888888        88      8888    8888      88      88    88      8888    88    88          88      88\r\n88      8888    88        88    88        8888888888    88        88    88    88          8888888888\r\n88        88    88        88    88        88            88        88    88    88          88        \r\n88      8888    88      8888    88        88            88      8888    88    88          88        \r\n8888888888        88888888      88          888888        8888888888    88      888888      888888  ");
	console.log("哈哈，竟然有人看我代码了嘛，给你个彩蛋吧！（请将控制台调宽）");
}

//Show/Hide Header On Scroll
var lastScrollY = 0;
function loadHeaderScroll() {
	//强行搭趟车（滑稽）
	if (getBrowser()[0] === "Safari")
	{
		document.getElementsByTagName("header")[0].style.backgroundColor = "rgba(255,255,255,0.6)";
		document.getElementsByTagName("header")[0].style.backdropFilter = "blur(5px)";
	}
	//延时，一开始的动画以及浏览器问题会导致滚动条微微起伏
	setTimeout(function() {
		window.onscroll = function() {
			headerScroll();
		};
	}, 500);
}
function headerScroll() {
	//我一开始还以为多难呢，没想到几行代码轻松搞定
	var header = document.getElementsByTagName("header")[0];
	//又强行搭趟车（滑稽）
	var bgimg = document.getElementsByClassName("background")[0];
	if (bgimg !== undefined)
	{
		bgimg.style.bottom = 0 - window.scrollY / 8 + "px";
	}
	if (window.scrollY - lastScrollY > 0 && window.scrollY > 165)
	{
		//往下滚动，隐藏导航栏（加个165表示在页面顶部滚动不隐藏）
		header.style.transition = "";
		header.style.top = "-70px";
	}
	else if (window.scrollY - lastScrollY < 0)
	{
		//往上滚动，显示导航栏
		header.style.top = "0px";
	}
	lastScrollY = window.scrollY;
}