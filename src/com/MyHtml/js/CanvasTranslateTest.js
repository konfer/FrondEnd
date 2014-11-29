window.onload=function()
{
	var canvas=document.getElementById("drawingCanvas");
	var context=canvas.getContext("2d");
	
	context.rect(0,0,30,30);
	context.translate(50,50);
	
	context.rect(0,0,30,30);
	context.translate(50,50);
	
	context.rect(0,0,30,30);
	
	context.stroke();

};