function addStorageKey()
{
    var key=document.getElementById("addKey").value;
    var value=document.getElementById("value").value;
    
    localStorage.setItem(key,value);
}

function deleteStorageKey()
{
    var key=document.getElementById("deleteKey").value;
    
    localStorage.removeItem(key);
}

function clearAll()
{
    localStorage.clear();
}
