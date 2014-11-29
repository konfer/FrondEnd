var outPutDiv;

window.onload = function()
{
    outPutDiv = document.getElementById("fileOutput");
};

function processFiles(files)
{
    for (var i=0; i < files.length; i++)
    {
        var file = files[i];
        var reader = new FileReader();

        reader.onload = function(e)
        {
            outPutDiv.textContent += e.target.result;
        };

        reader.readAsText(file);
    }

}
