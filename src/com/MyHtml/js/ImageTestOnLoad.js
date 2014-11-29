var canvas;
var context;

window.onload=function()
{
	canvas=document.getElementById("DrawingCanvas");
	context=canvas.getContext("2d");
	
	var img=new Image();

	img.onload=function()
	{
		context.drawImage(img,0,0,200,200,75,25,200,200);
	}	

	img.src="img/darwin.jpg";

	
}


