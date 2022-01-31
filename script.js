function opennav()
{
    if(document.querySelector("#sidebar").classList.contains("active")==false)
    {
        document.querySelector("#sidebar").classList.add("active")
        document.querySelector("#sidebar").style.display="block";
        document.querySelector("#overlay").style.display="block";
    }
    else
    {
        document.querySelector("#sidebar").classList.remove("active")
        document.querySelector("#sidebar").style.display="none";
        document.querySelector("#overlay").style.display="none";
    }

    
}

function closenav()
{
    document.querySelector("#overlay").style.display="none";
    document.querySelector("#sidebar").style.display="none";
}