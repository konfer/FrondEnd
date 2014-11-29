var canvasE;

window.onload=function()
{
	canvasE=document.getElementById("canvasExtra");
	
	document.getElementById("headingExtra").innerHTML+=extraversion;
	
	plotScore(canvasE,extraversion,"Extraversion");
	
}

function plotScore(canvas,score,title)
{
	var context=canvas.getContext("2d");
	
	var img=document.getElementById("arrow_left");
	context.drawImage(img,12,10);
	img=document.getElementById("arrow_right");
	context.drawImage(img,498,10);
	
	context.moveTo(39,25);
	context.lineTo(503,25);
	context.lineWidth=10;
	context.strokeStyle="rgb(174,215,244)"
	context.stroke();
	
	context.fillStyle=context.strokeStyle;
	context.font="italic bold 18px Arial";
	
	context.fillText("-20",35,50);
	context.fillText("0",255,50);
	context.fillText("20",475,50);
	
	img=document.getElementById("star");
	context.drawImage(img,(score+20)/40*440+35-17,0);
	

	
		
}
