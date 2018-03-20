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
	//添加 张XX (0) 格式的学生到排行榜
	for (var i = 0; i < names.length; i++)
	{
		topList.push(names[i] + " " + document.getElementById(names[i] + "LikeCount").innerHTML);
	}
	//按分数排序
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
	//排行榜字符串
	var topListStr = "";
	//排行榜第一名
	var firstTopList = "";
	//举手发言人数
	var speakCount = 0;
	//最高点赞数
	var bestLikeCount = "-1";
	for (var i = 0; i < topList.length; i++)
	{
		//去除点赞数，只保留名字
		topList[i] = topList[i].substring(0, topList[i].indexOf(" "));
		//当前学生名字
		var name = topList[i];
		//当前学生的点赞数
		var likeCount = document.getElementById(name + "LikeCount").innerHTML;
		if (i === 0)
		{
			//排行榜第一名
			firstTopList = name;
			//加了小蓝点 视觉上太乱了 所以去掉了
			/*if (parseInt(likeCount) > 0)
			{
				//排行榜第一名 如果点赞数非0 则显示个小蓝点表示最高分
				topListStr += "<span style=\"color: #00ABFF; font-size: 15px; margin-right: 5px;\">●</span>";
				bestLikeCount = likeCount;
			}*/
		}
		/*else if (likeCount === bestLikeCount)
		{
			//第一名非0情况下的以下名次 如果与第一名点赞数相同 则也显示个小蓝点
			topListStr += "<span style=\"color: #00ABFF; font-size: 15px; margin-right: 5px;\">●</span>";
		}*/
		//添加名次和点赞数 比如 1 李XX (5)
		if (likeCount === "0")
		{
			//如果是零分就不显示名次
			topList[i] = topList[i] + " (0)";
		}
		else
		{
			topList[i] = (i + 1) + " " + topList[i] + " (" + likeCount + ")";
		}
		if (parseInt(likeCount) > 0)
		{
			//大于0分的学生 如果是最后一个名字 则不换行
			topListStr += (i === topList.length - 1 ? topList[i] : topList[i] + "<br>");
			speakCount++;
		}
		else
		{
			//0分的学生 名字颜色改为灰色 如果是最后一个名字 则不换行
			topListStr += "<span style=\"color:#888;\">" + (i === topList.length - 1 ? topList[i] + "</span>" : topList[i] + "</span><br>");
		}
	}
	document.getElementById("speakCount").innerHTML = speakCount;
	document.getElementById("unspeakCount").innerHTML = names.length - speakCount;
	document.getElementById("topList").innerHTML = topListStr;
	console.log("成功排序了排行榜，第一名为" + firstTopList);
}
sortTopList();