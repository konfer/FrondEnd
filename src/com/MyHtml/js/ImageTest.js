window.onload=function()
{
	var canvas=document.getElementById("drawingCanvas");
	var context=canvas.getContext("2d");
	
	var img=document.getElementById("arrow_left");
	context.drawImage(img,10,10);
}

