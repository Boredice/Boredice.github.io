"use strict";
/*jshint unused:false*/
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
//循环添加单个学生卡片
for (var i = 0; i < seats.length; i++)
{
	if (seats[i] === "#")
	{
		//占位符
		document.getElementById("studentContainer").innerHTML +=
			"<div class=\"student\" style=\"opacity: 0; animation: placeHolderStudentMove 1s;\"></div>";
	}
	else if (seats[i] === "*")
	{
		//换行符
		document.getElementById("studentContainer").innerHTML += "<br>";
	}
	else
	{
		document.getElementById("studentContainer").innerHTML += 
			"<div class=\"student\"><p class=\"name\">" + seats[i] + "</p>" +
			"<p class=\"likeAndUnlike\">" +
			"<button class=\"likeBtn\" onClick=\"likeStudent('" + seats[i] + "')\" title=\"给" + seats[i] + "点赞\">" +
			"<i class=\"far fa-thumbs-up\"></i></button>" +
			"<span class=\"likeCount\" id=\"" + seats[i] + "LikeCount\">0</span>" +
			"<button class=\"unlikeBtn\" onClick=\"unlikeStudent('" + seats[i] + "')\" title=\"给" + seats[i] + "点踩\">" +
			"<i class=\"far fa-thumbs-down\"></i></button></p></div>";
	}
}
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
	var likeCount = document.getElementById(name + "LikeCount");
	if (parseInt(likeCount.innerHTML) !== 0)
	{
		document.getElementById(name + "LikeCount").innerHTML = parseInt(likeCount.innerHTML) - 1;
		console.log("你给" + name + "点了一个踩");
		sortTopList();
	}
}
//排行
function sortTopList()
{
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
	var speakCount = 0;
	for (var i = 0; i < topList.length; i++)
	{
		topList[i] = topList[i].substring(0, topList[i].indexOf(" "));
		var name = topList[i];
		if (i === 0)
		{
			firstTopList = name;
		}
		var likeCount = document.getElementById(name + "LikeCount").innerHTML;
		topList[i] = (i + 1) + " " + topList[i];
		topList[i] += " (" + likeCount + ")";
		if (parseInt(likeCount) > 0)
		{
			topListStr += i === topList.length - 1 ? topList[i] : topList[i] + "<br>";
			speakCount++;
		}
	}
	document.getElementById("speakCount").innerHTML = speakCount;
	document.getElementById("topList").innerHTML = topListStr;
	console.log("成功排序了排行榜，第一名为" + firstTopList);
}
sortTopList();