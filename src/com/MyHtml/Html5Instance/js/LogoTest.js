var canvas;

$(document).ready(function()
{

    canvas = document.getElementById("logo");

    if (canvas.getContext)
    {
        drawLogo();
    }

});

function drawLogo()
{
    var context = canvas.getContext('2d');
    
    context.fillStyle = "#f00";
    context.strokeStyle = "#f00";

    context.font = 'italic 40px sans-serif';
    context.textBaseline = 'top';
    context.fillText('AwesomeCo', 60, 0);

    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, 40);
    context.lineTo(30, 0);
    context.lineTo(60, 40);
    context.lineTo(285, 40);
    context.stroke();

    context.closePath();

    
}
