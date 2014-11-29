var Circles=[];

var canvas;
var context;

window.onload=function()
{
	canvas=document.getElementById("canvas");
	context=canvas.getContext("2d");
	
	canvas.onmousedown=canvasClick;
	canvas.onmouseup=stopDragging;
	canvas.onmouseout=stopDragging;
	canvas.onmousemove=dragCircle;
	
}

function clearCanvas()
{
	context.clearRect(0,0,canvas.width,canvas.height);
}

function addRandomCircle()
{
	var radius=randomFromTo(10,60);
	var x=randomFromTo(0,canvas.width);
	var y=randomFromTo(0,canvas.height);
	
	var colors=["green","blue","red","yellow","magenta","orange","brown","purple","pink"];
	var color=colors[randomFromTo(0,8)];
	
	var circle=new Circle(x,y,radius,color);
	Circles.push(circle);
	
	drawCircles();
	
}

function drawCircles()
{
	context.clearRect(0,0,canvas.width,canvas.height);
	context.globalAlpha=0.85;
	context.strokeStyle="black";
	
	for(var i=0;i<Circles.length;i++)
	{
		var circle=Circles[i];
		context.beginPath();
		context.arc(circle.x,circle.y,circle.radius,0,Math.PI*2);
		context.fillStyle=circle.color;
		
		context.fill();
		context.stroke();
	}
	
}


function canvasClick()
{

}

function stopDragging()
{

}

function dragCircle()
{

}

function randomFromTo(from,to)
{
	return Math.floor(Math.random()*(to-from+1)+from);
}
