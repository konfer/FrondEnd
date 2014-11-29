var canvas;
var context;

window.onload=function()
{
	canvas=document.getElementById("ContextCanvas");
	context=canvas.getContext("2d");
	
	context.font="bold 20px Arial";
	context.textBaseline="top";
	context.fillStyle="black";
	context.shadowColor="#bbbbbb";
	context.shadowBlur=20;
	context.shadowOffsetX=15;
	context.shadowOffsetY=15;
	context.fillText("I'm stuck in a canvas.SomeONE let me out!",10,10);
	
	


};
