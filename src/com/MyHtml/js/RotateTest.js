window.onload=function()
{
	var canvas=document.getElementById("drawingCanvas");
	var context=canvas.getContext("2d");
	
	context.translate(100,100);
	
	var copies=7;
	for(var i=0;i<copies;i++)
	{
	
		
		context.rotate(2*Math.PI*1/(copies-1));
		context.rect(0,0,60,60);
	}
	
	context.stroke();
	
}
