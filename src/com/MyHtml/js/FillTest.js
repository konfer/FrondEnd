var canvas;
var context;

window.onload=function()
{
	canvas=document.getElementById("FillCanvas");
	context=canvas.getContext("2d");
	
	var img=document.getElementById("brickTile");
	
	var img=document.getElementById("brickTile");
	var pattern=context.createPattern(img,"repeat");
	
	context.fillStyle=pattern;
	context.rect(0,0,canvas.width,canvas.height);
	context.fill();
	
	
};
