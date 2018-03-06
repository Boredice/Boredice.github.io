"use strict";
//名称及座位
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
var seats = [
	"#",
	"贾欣海",
	"#",
	"夏锦鹏",
	"程子豪",
	"#",
	"*",
	"吴冠谕",
	"李纪伟",
	"王馨妍",
	"高怡沁",
	"刘思萱",
	"王雨彤",
	"*",
	"江振",
	"刘思怡",
	"徐冉",
	"于铭哲",
	"许欣蔚",
	"戚繁延",
	"*",
	"业凡",
	"钱锋",
	"杜勇",
	"朱宇航",
	"徐沫瑶",
	"孙云辰",
	"*",
	"黄陶欣",
	"张波",
	"邓卓",
	"钱俊杰",
	"丁文杰",
	"祝晗",
	"*",
	"刘浩",
	"陈航宇",
	"蔡文杰",
	"张俊杰",
	"孙唯",
	"王靖",
	"*",
	"李昊勋",
	"王思源",
	"戴安瑞",
	"樊冉冉",
	"李琳",
	"郭雨璐"
];
document.getElementById("shareCount").innerHTML = names.length;
//循环添加单个学生卡片
for (var i = 0; i < seats.length; i++)
{
	if (seats[i] == "#")
	{
		//占位符
		document.getElementById("studentContainer").innerHTML += 
		"<div class=\"student\" style=\"opacity: 0;\"></div>";
	}
	else if (seats[i] == "*")
	{
		//换行符
		document.getElementById("studentContainer").innerHTML += 
		"<br>";
	}
	else
	{
		document.getElementById("studentContainer").innerHTML += 
		"<div class=\"student\"><p class=\"name\">" + seats[i] + 
		"</p><p class=\"likeAndUnlike\"><button class=\"likeBtn\" onClick=\"likeStudent('" + seats[i] + "')\" title=\"给" + seats[i] + "点赞\"><i class=\"fa fa-thumbs-o-up\"></i></button><span class=\"likeCount\" id=\"" + seats[i] + 
		"LikeCount\">0</span><button class=\"unlikeBtn\" onClick=\"unlikeStudent('" + seats[i] + "')\" title=\"给" + seats[i] + "点踩\"><i class=\"fa fa-thumbs-o-down\"></i></button></p></div>";
	}
}
console.log("成功添加" + names.length + "位学生");
document.getElementsByClassName("classIndexSelect")[0].onchange = function() {
	document.getElementById("shareContainer").hidden = true;
	share();
};
//赞
function likeStudent(name)
{
	document.getElementById(name + "LikeCount").innerHTML = parseInt(document.getElementById(name + "LikeCount").innerHTML) + 1;
	console.log("你给" + name + "点了一个赞");
	sortTopList();
}
//踩
function unlikeStudent(name)
{
	document.getElementById(name + "LikeCount").innerHTML = parseInt(document.getElementById(name + "LikeCount").innerHTML) - 1;
	console.log("你给" + name + "点了一个踩");
	sortTopList();
}
//排行
function sortTopList()
{
	//我也不知道为什么仅在Chrome内核下，全是0分时贾欣海排第一
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
	var firstTopList = "";
	for (var i = 0; i < topList.length; i++)
	{
		topList[i] = topList[i].substring(0, topList[i].indexOf(" "));
		var name = topList[i];
		if (i === 0)
		{
			firstTopList = name;
		}
		topList[i] = (i + 1) + " " + topList[i];
		topList[i] += " (" + document.getElementById(name + "LikeCount").innerHTML + ")";
		topListStr += i === topList.length - 1 ? topList[i] : topList[i] + "<br>";
	}
	document.getElementById("topList").innerHTML = topListStr;
	console.log("成功排序了排行榜，第一名为" + firstTopList);
	if (document.getElementById("shareContainer").hidden === false)
	{
		//刷新分享图
		document.getElementById("shareContainer").hidden = true;
		share();
	}
}
sortTopList();
var remark = "";
//分享
function share()
{
	var shareContainer = document.getElementById("shareContainer");
	var shareImage = document.getElementById("shareImage");
	if (shareContainer.hidden === false)
	{
		shareContainer.hidden = true;
		document.getElementById("shareBtn").innerHTML = "<i class=\"fa fa-share-alt\"></i>&nbsp;分享";
		document.getElementById("topListContainer").style.top = "100px";
		return;
	}
	var c = document.getElementById("shareCanvas");
	var ctx = c.getContext("2d");
	if (remark === "")
	{
		c.height = 305;
		document.getElementById("topListContainer").style.top = "508px";
	}
	else
	{
		c.height = 358;
		document.getElementById("topListContainer").style.top = "561px";
	}
	var text = document.getElementById("topList").innerHTML.split("<br>");
	var x = 10;
	var y = 60;
	var fontsize = 14;
	ctx.fillStyle = "White";
	ctx.fillRect(0,0,c.width,c.height);
	ctx.fillStyle = "#00CDCD";
	ctx.font = "20px 微软雅黑";
	var month = new Date().getMonth() + 1;
	var date = new Date().getDate();
	ctx.fillText(month + "月" + date + "日" + document.getElementsByClassName("classIndexSelect")[0].value + "排行榜", x, y - 30);
	ctx.fillStyle = "Black";
	ctx.font = fontsize + "px 微软雅黑";
	var count = parseInt(document.getElementById("shareCount").innerHTML);
	for (var i = 0; i < text.length / 3; i++)
	{
		if (i >= count)
		{
			break;
		}
		ctx.fillText(text[i], x, y + i * fontsize + i * 5);
	}
	for (var i = parseInt(text.length / 3); i < text.length / 3 * 2; i++)
	{
		if (i >= count)
		{
			break;
		}
		ctx.fillText(text[i], x + 125, y + (i - text.length / 3) * fontsize + (i - text.length / 3) * 5);
	}
	for (var i = parseInt(text.length / 3 * 2); i < text.length; i++)
	{
		if (i >= count)
		{
			break;
		}
		ctx.fillText(text[i], x + 250, y + (i - text.length / 3 * 2) * fontsize + (i - text.length / 3 * 2) * 5);
	}
	ctx.fillStyle = "#666";
	ctx.font = "16px 微软雅黑";
	var remarkArray = remark.split("/n/");
	for (var i = 0; i < remarkArray.length; i++)
	{
		ctx.fillText(remarkArray[i], x, y + 255 + i * fontsize + i * 4);
	}
	//ctx.fillText(remark, x, y + 255);
	shareImage.src = c.toDataURL("image/png");
	shareContainer.hidden = false;
	for (var i = 0; i < shareContainer.children.length; i++)
	{
		//刷新一下，因为Edge浏览器某些情况下会不显示一些子元素
		shareContainer.children[i].hidden = true;
		shareContainer.children[i].hidden = false;
	}
	document.getElementById("shareBtn").innerHTML = "<i class=\"fa fa-close\"></i>&nbsp;关闭";
	console.log("成功绘制Canvas，转换为Base64并显示");
}
//编辑备注
function editRemark()
{
	var remark2 = prompt("修改分享备注（不会自动换行，请使用“/n/”作为换行符）：", remark);
	if (remark2 === null)
	{
		return false;
	}
	remark = remark2;
	document.getElementById("shareContainer").hidden = true;
	console.log("成功修改分享备注");
	share();
}
//重置
function reset()
{
	for (var i = 0; i < names.length; i++)
	{
		document.getElementById(names[i] + "LikeCount").innerHTML = "0";
	}
	remark = "";
	document.getElementsByClassName("classIndexSelect")[0].value = "语文课";
	document.getElementById("shareCount").innerHTML = names.length;
	console.log("成功重置数据");
	var shareContainer = document.getElementById("shareContainer");
	if (shareContainer.hidden === false)
	{
		shareContainer.hidden = true;
		share();
	}
	sortTopList();
}
//下载
function download()
{
	var filename = new Date().getMonth() + 1 + "月" + new Date().getDate() + "日" + document.getElementsByClassName("classIndexSelect")[0].value + "排行榜";
	var content = filename + "\r\n\r\n" + remark + (remark === "" ? "" : "\r\n\r\n") + document.getElementById("topList").innerHTML.replace(/<br>/g, "\r\n");
	var blob = new Blob([content], {type: "text/plain; charset = utf-8"});
	saveAs(blob, filename + ".txt");
	console.log("开始下载该排行榜的文本文档");
}
function downloadImage()
{
	//鼠标右键下载按钮
	if (confirm("将下载图片到本地，确定吗？") === true)
	{
		var filename = new Date().getMonth() + 1 + "月" + new Date().getDate() + "日" + document.getElementsByClassName("classIndexSelect")[0].value + "排行榜";
		document.getElementById("shareCanvas").toBlob(function(blob) {saveAs(blob, filename + ".png")});
		console.log("开始下载该排行榜的图片");
	}
}
//分享数量
function shareCountPlus()
{
	var count = parseInt(document.getElementById("shareCount").innerHTML) + 1;
	if (count > 39)
	{
		count = 39;
	}
	document.getElementById("shareCount").innerHTML = count;
	document.getElementById("shareContainer").hidden = true;
	console.log("成功增加分享数量");
	share();
}
function shareCountMinus()
{
	var count = parseInt(document.getElementById("shareCount").innerHTML) - 1;
	if (count < 3)
	{
		count = 3;
	}
	document.getElementById("shareCount").innerHTML = count;
	document.getElementById("shareContainer").hidden = true;
	console.log("成功减少分享数量");
	share();
}

//神兽保佑代码永无BUG ~(￣▽￣)~ (Consolas字体)
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