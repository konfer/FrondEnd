var canvas;
var context;

window.onload=function()
{
	canvas=document.getElementById("drawingCanvas");
	context=canvas.getContext("2d");
	
	canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
	
	
}

var isDrawing=false;

var previousColorElement;

function changeColor(color,imgElement)
{
	context.strokeStyle=color;
	imgElement.className="Selected";
	
	if(previousColorElement!=null)
	{
		previousColorElement.className="";
	}
	
	previousColorElement=imgElement;
}

var previousThicknessElement;

function changeThickness(thickness,imgElement)
{
	context.lineWidth=thickness;
	imgElement.className="Selected";
	if(previousThicknessElement!=null)
	{
		previousThicknessElement.className="";
	}
	previousThicknessElement=imgElement;
	
}


function startDrawing(e)
{
	isDrawing=true;
	context.beginPath();
	context.moveTo(e.pageX-canvas.offsetLeft,e.pageY-canvas.offsetTop);
}

function stopDrawing()
{
	isDrawing=false;
}

function draw(e)
{
	if(isDrawing==true)
	{
		var x=e.pageX-canvas.offsetLeft;
		var y=e.pageY-canvas.offsetTop;
		
		context.lineTo(x,y);
		context.stroke();
	}
}

function saveCanvas()
{
	var imageCopy=document.getElementById("saveImageCopy");
	imageCopy.src=canvas.toDataURL();
	var imageContainer=document.getElementById("saveCopyContainer");
	imageContainer.style.display="block";
}


function clearCanvas()
{
	context.clearRect(0,0,canvas.width,canvas.height);
}
