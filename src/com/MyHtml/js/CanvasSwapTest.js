window.onload=function()
{
	var canvas=document.getElementById("drawingCanvas");
	var context=canvas.getContext("2d");
	
	context.rect(0,0,30,30);
	context.rect(50,50,30,30);
	context.rect(100,100,30,30);
	
	context.stroke();
	

};

