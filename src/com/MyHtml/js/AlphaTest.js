window.onload=function()
{
	var canvas=document.getElementById("drawingCanvas");
	var context=canvas.getContext("2d");
	
	context.globalCompositeOperation="xor";
	
	context.fillStyle="rgb(100,150,185)";
	context.lineWidth=10;
	context.strokeStyle="red";
	
	context.arc(110,120,100,0,2*Math.PI);
	context.fill();
	context.stroke();
	
	context.beginPath();
	
	context.fillStyle="rgba(100,150,185,0.5)";
	
	context.moveTo(215,50);
	context.lineTo(15,250);
	context.lineTo(315,250);
	context.closePath();
	context.fill();
	context.stroke();
	
	
};

