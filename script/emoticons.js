"use strict";

//53个颜文字
var emo = [
	"ヾ(≧▽≦*)o",
	"( •̀ ω •́ )✧",
	"o(*￣▽￣*)ブ",
	"(＠_＠;)",
	"(ﾉ*･ω･)ﾉ",
	"(❤ ω ❤)",
	"\(@^0^@)/",
	"┗|｀O′|┛ ~~",
	"○( ＾皿＾)っ",
	"φ(゜▽゜*)♪",
	"(｡･∀･)ﾉ",
	"ヾ(•ω•`)o",
	"(´▽`ʃ♡ƪ)",
	"(✿◡‿◡)",
	"o(^▽^)o",
	"◑﹏◐",
	"(O _ O)",
	"Ψ(￣∀￣)Ψ",
	"( ఠൠఠ )ﾉ",
	"(✿◕‿◕✿)",
	"o(=•ェ•=)m",
	"(。・∀・)ノ",
	"( o=^•ェ•)o ┏━┓",
	"(～﹃～)~zZ",
	"(☆▽☆)",
	"( $ _ $ )",
	"(＞人＜；)",
	"O(∩_∩)O",
	"U•ェ•*U",
	"ε=ε=ε=(~￣▽￣)~",
	"( *︾▽︾)",
	"^(*￣(oo)￣)^",
	"┏ (゜ω゜)=☞",
	"(ಥ _ ಥ)",
	"ヾ(＠⌒ー⌒＠)ノ",
	"(●ˇ∀ˇ●)",
	"(＾▽＾)",
	"(O '◡' O)",
	"ο(=•ω＜=)ρ⌒☆",
	"( *︾▽︾)",
	"（；´д｀）ゞ",
	"(๐॔˃̶ᗜ˂̶๐॓)",
	"Σ(っ °Д °;)っ",
	"(｡･∀･)ﾉﾞHi~",
	"(★ ω ★)",
	"(￣_,￣ )",
	"(ㄟ( ▔, ▔ )ㄏ)",
	"(。>︿<)_θ",
	"(⊙﹏⊙)",
	"(⊙_⊙)？",
	"（；´д｀）ゞ",
	"╮（╯＿╰）╭",
];

var emo_element = document.getElementById("emoticons");
emo_element.href = "javascript:setEmoticons()";
setInterval(function(){setEmoticons();}, 1250);
setEmoticons();

function setEmoticons()
{
	emo_element.innerHTML = emo[random(0, emo.length - 1)];
}

function random(min, max)
{
	var dbrandom = (max - min) * Math.random() + min + 1;
	return parseInt(dbrandom);
}