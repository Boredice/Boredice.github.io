"use strict";
//名称列表
var names = [
	"孙云辰",
	"孙唯",
	"戚繁延",
	"樊冉冉",
	"祝晗",
	"刘浩",
	"夏锦鹏",
	"李琳",
	"钱俊杰",
	"杜勇",
	"黄陶欣",
	"朱宇航",
	"徐沫瑶",
	"刘思萱",
	"戴安瑞",
	"李纪伟",
	"蔡文杰",
	"王靖",
	"吴冠谕",
	"贾欣海",
	"王雨彤",
	"陈航宇",
	"许欣蔚",
	"张波",
	"徐冉",
	"张俊杰",
	"刘思怡",
	"程子豪",
	"高怡沁",
	"王馨妍",
	"郭雨璐",
	"丁文杰",
	"业凡",
	"王思源",
	"钱锋",
	"于铭哲",
	"邓卓",
	"江振",
	"李昊勋"
];
//循环添加单个学生卡片
for (var i = 0; i < names.length; i++)
{
	document.getElementById("studentContainer").innerHTML += 
		"<div class=\"student\"><p class=\"name\">" + names[i] + 
		"</p><p class=\"likeAndUnlike\"><button class=\"likeBtn\" onClick=\"likeStudent('" + names[i] + "')\"><i class=\"fa fa-thumbs-o-up\"></i></button><span class=\"likeCount\" id=\"" + names[i] + 
		"LikeCount\">0</span><button class=\"unlikeBtn\" onClick=\"unlikeStudent('" + names[i] + "')\"><i class=\"fa fa-thumbs-o-down\"></i></button></p></div>";
}
//赞
function likeStudent(name)
{
	document.getElementById(name + "LikeCount").innerHTML = parseInt(document.getElementById(name + "LikeCount").innerHTML) + 1;
	sortTopList();
}
//踩
function unlikeStudent(name)
{
	document.getElementById(name + "LikeCount").innerHTML = parseInt(document.getElementById(name + "LikeCount").innerHTML) - 1;
	sortTopList();
}
//排行
function sortTopList()
{
	//我也不知道为什么Chrome内核下，全是0分时贾欣海排第一
	var topList = [];
	for (var i = 0; i < names.length; i++)
	{
		topList.push(names[i] + " " + document.getElementById(names[i] + "LikeCount").innerHTML);
	}
	topList.sort(function (y,x){
		var iy = parseInt(y.substring(y.indexOf(" ")));
		var ix = parseInt(x.substring(x.indexOf(" ")));
		if (ix < iy) {
			return -1;
		} else if (ix > iy) {
			return 1;
		} else {
			return 0;
		}
	});
	var topListStr = "";
	for (var i = 0; i < topList.length; i++)
	{
		topList[i] = topList[i].substring(0, topList[i].indexOf(" "));
		var name = topList[i];
		topList[i] = (i + 1) + " " + topList[i];
		topList[i] += " (" + document.getElementById(name + "LikeCount").innerHTML + ")";
		topListStr += i === topList.length - 1 ? topList[i] : topList[i] + "<br>";
	}
	document.getElementById("topList").innerHTML = topListStr;
}
sortTopList();
//分享
function share()
{
	var shareImage = document.getElementById("shareImage");
	if (shareImage.hidden === false)
	{
		shareImage.hidden = true;
		document.getElementsByClassName("navBtn")[0].innerHTML = "<i class=\"fa fa-share-alt\"></i>&nbsp;分享";
		document.getElementById("topListContainer").style.top = "100px";
		return;
	}
	var c = document.getElementById("shareCanvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,400,300);
	var text = document.getElementById("topList").innerHTML.split("<br>");
	var x = 10;
	var y = 20;
	var fontsize = 14;
	ctx.font = fontsize + "px 微软雅黑";
	ctx.fillStyle = "White";
	ctx.fillRect(0,0,400,300);
	ctx.fillStyle = "Black";
	for (var i = 0; i < text.length / 3; i++)
	{
		ctx.fillText(text[i], x, y + i * fontsize + i * 5);
	}
	for (var i = parseInt(text.length / 3) + 1; i < text.length / 3 * 2; i++)
	{
		ctx.fillText(text[i], x + 125, y + (i - text.length / 3 - 1) * fontsize + (i - text.length / 3) * 5);
	}
	for (var i = parseInt(text.length / 3 * 2) + 1; i < text.length; i++)
	{
		ctx.fillText(text[i], x + 250, y + (i - text.length / 3 * 2 - 1) * fontsize + (i - text.length / 3 * 2) * 5);
	}
	shareImage.src = c.toDataURL("image/png");
	shareImage.hidden = false;
	document.getElementsByClassName("navBtn")[0].innerHTML = "<i class=\"fa fa-close\"></i>&nbsp;关闭";
	document.getElementById("topListContainer").style.top = "410px";
}
//重置
function reset()
{
	location.reload();
}

//神兽保平安 (Consolas字体)-->
/*
    ╭─╮       ╭─╮
 ╭──╯ ┴───────╯ ┴──╮
 │                 │
 │       ───       │   ╔══════════════╗
 │  ─┰┘       └┰─  │   ║              ║
 │                 │  /║  FUCK BUGS!  ║
 │       ─┴─       │ / ║              ║
 │                 │/  ╚══════════════╝
 ╰───╮         ╭───╯
     │   ───   │
     │    ─    │
     │         │
     │         ╰──────────────╮
     │                        │
     │                        ├─╮
     │                        ┌─╯
     │                        │
     ╰─┐  ┬  ╭───────┬──┬  ╭──╯
       │ ─┤ ─┤       │ ─┤ ─┤
       ╰──┴──╯       ╰──┴──╯
*/