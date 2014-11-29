var canvas;
var context;

window.onload=function()
{
	canvas=document.getElementById("GradientCanvas");
	context=canvas.getContext("2d");
	
	var gradient=context.createLinearGradient(10,20,100,0);
	
	gradient.addColorStop(0,"magenta");
	gradient.addColorStop(1,"yellow");
	
	drawHeart(60,50);
	
	context.fillStyle=gradient;
	context.fill();
	context.stroke();
}

function drawHeart(x, y)
{
	context.beginPath();
	context.moveTo(x, y);
	context.bezierCurveTo(x, y - 40, x - 45, y - 40, x - 48, y);
	context.bezierCurveTo(x - 45, y + 30, x, y + 40, x, y + 80);
	context.bezierCurveTo(x, y + 90, x + 45, y + 40, x + 45, y);
	context.bezierCurveTo(x + 45, y - 30, x, y - 30, x, y);
	context.closePath();
}