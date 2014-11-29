$(document).ready(function()
{
    var links = $("a.popup");

    links.click(function(event)
    {
        event.preventDefault();
        window.open($(this).attr('href'));
        
        
        
    });

});

