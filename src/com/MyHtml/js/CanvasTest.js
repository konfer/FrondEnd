window.onload = function()
{
	var canvas = document.getElementById("drawingCanvas");
	var context = canvas.getContext("2d");
// 	
	// context.lineWidth=10;
	// context.strokeStyle="#cd2828";
	// context.lineCap="round";
// 	
	// context.moveTo(10,50);
	// context.lineTo(400,50);
	// context.stroke();
// 	
	// context.moveTo(10,120);
	// context.lineTo(400,120);
	// context.lineCap="round";
	// context.stroke();
// 	
	// context.moveTo(10,190);
	// context.lineTo(400,190);
	// context.lineCap="square";
	// context.stroke();
	
	// context.moveTo(250,50);
	// context.lineTo(50,250);
	// context.lineTo(450,250);
	// context.lineTo(250,50);
// 	
	// context.beginPath();
	// context.fillRect(0,10,100,200);
// 	
	// context.lineWidth=10;
	// context.strokeStyle="red";
	// context.lineCap="round";
	// context.stroke();
// 	
	// context.closePath();
	// context.fillStyle="blue";
	// context.fill();
// 	
	// var centerX=150;
	// var centerY=300;
	// var radius=100;
	// var startingAngle=0.5*Math.PI;
	// var endingAngel=2*Math.PI;
// 	
	// context.arc(centerX,centerY,radius,0,endingAngel);
	// context.stroke();
	
	context.lineWidth=6;
	context.strokeStyle="red";
	context.beginPath();
	
	context.moveTo(100,250);
	
	
	
	context.bezierCurveTo(187,32,429,480,365,133);
	
	context.stroke();	
	context.closePath();
};