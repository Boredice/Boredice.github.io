//The particles effect is based on an anonymous user's answer of Zhihu.

"use strict";
var canvas = document.getElementById("bgparticle");
var ctx = canvas.getContext("2d");
canvas.style.position = "fixed";
canvas.style.zIndex = "-1";
canvas.style.left = canvas.style.top = 0;
canvas.oncontextmenu = function() { return false; };
canvas.width = window.innerWidth < 800 ? 800 : window.innerWidth;
canvas.height = window.innerHeight < 700 ? 700 : window.innerHeight;
canvas.hidden = false;
canvas.draggable = false;
var allRound = [];
var dxdy = [];
function fnRandom(min, max) {
	var dbrandom = (max - min) * Math.random() + min + 1;
	return parseInt(dbrandom);
}
function Round() {
	this.r = 0;
	this.diam = this.r * 2;
	var x = fnRandom(0, canvas.width - this.r);
	this.x = x < this.r ? this.r : x;
	var y = fnRandom(0, canvas.height - this.r);
	this.y = y < this.r ? this.r : y;
	var speed = fnRandom(2, 4) / 10;
	this.speedX = fnRandom(0, 4) > 2 ? speed : -speed;
	this.speedY = fnRandom(0, 4) > 2 ? speed : -speed;
	this.color = "#F2F2F2";
}
Round.prototype.draw = function () {
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
};
Round.prototype.move = function () {
	this.x += this.speedX;
	if (this.x > canvas.width - this.r) {
		this.x = this.r;
	} else if (this.x < this.r) {
		this.x = canvas.width - this.r;
	}
	this.y += this.speedY;
	if (this.y > canvas.height - this.r) {
		this.y = this.r;
	} else if (this.y < this.r) {
		this.y = canvas.height - this.r;
	}
};
for (var i = 0; i < 30; i++) {
	var obj = new Round();
	obj.draw();
	obj.move();
	allRound.push(obj);
}
(function roundMove() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < allRound.length; i++) {
		var round = allRound[i];
		round.draw();
		round.move();
		dxdy[i] = {
			dx: round.x,
			dy: round.y
		};
		var dx = dxdy[i].dx;
		var dy = dxdy[i].dy;
		for (var j = 0; j < i; j++) {
			var sx = dxdy[j].dx;
			var sy = dxdy[j].dy;
			var l = Math.sqrt((dx - sx) * (dx - sx) + (dy - sy) * (dy - sy));
			var C = 1 / l * 7 - 0.009;
			var o = C > 0.03 ? 0.03 : C;
			ctx.strokeStyle = 'rgba(0,0,0,' + o + ')';
			ctx.beginPath();
			ctx.lineWidth = 2;
			ctx.moveTo(dxdy[i].dx, dxdy[i].dy);
			ctx.lineTo(dxdy[j].dx, dxdy[j].dy);
			ctx.closePath();
			ctx.stroke();
		}
	}
	window.requestAnimationFrame(roundMove);
})();