var itemList;

window.onload = function()
{
    window.addEventListener("storage", StorageChanged, false);

    itemList = document.getElementById("showAllStorageKeys");
    itemList.innerHTML = "";

    for (var i = 0; i <= localStorage.length - 1; i++)
    {
        var key = localStorage.key(i);
        var value = localStorage[key];
        
        addStorageItem(key,value);

    }
};

function StorageChanged(e)
{
    var key=e.key;
    var oldKey=e.oldKey;
    var value=e.newValue;
    
    
    if(key==oldKey)
    {
        var li=document.getElementById(liKey_"+key);
        li.innerHTML=key + ":" + value;
    }
    else
    {
        addStorageItem(key,value);
    }
    
}

function addStorageItem(key, value)
{
    var newItem = document.createElement("li");
    newItem.id="liKey_"+key;

    newItem.innerHTML = key + ":" + value;

    itemList.appendChild(newItem);
}

