var dropBox;

window.onload = function()
{
    dropBox = document.getElementById("dropBox");
    dropBox.ondrapenter = ignoreDrag;
    dropBox.ondrapover = ignoreDrag;
    dropBox.ondrop = drop;
};

function drop(e)
{
    e.stopPropagation();
    e.preventDefault();

    var data = e.dataTransfer;
    var files = data.files;

    var data = e.dataTransfer;
    var files = data.files;

    processFiles(files);
}

function ignoreDrag()
{
    e.stopPropagation();
    e.preventDefault();

}

function processFiles(files)
{
    var file = files[0];
    var reader = new FileReader();

    reader.onload = function(e)
    {
        dropBox.style.backgroundImage = "url('" + e.target.result + "')";
    };

    reader.readAsDataURL(file);

}
