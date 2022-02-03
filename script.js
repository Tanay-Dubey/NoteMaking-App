function opennav()
{
    if(document.querySelector(".sidebar-mobile").classList.contains("active")==false)
    {
        document.querySelector(".sidebar-mobile").classList.add("active")
        document.querySelector(".sidebar-mobile").style.display="block";
        document.querySelector("#overlay").style.display="block";
    }
    else
    {
        document.querySelector(".sidebar-mobile").classList.remove("active")
        document.querySelector(".sidebar-mobile").style.display="none";
        document.querySelector("#overlay").style.display="none";
    }

    
}

function closenav()
{
    document.querySelector("#overlay").style.display="none";
    document.querySelector(".sidebar-mobile").style.display="none";
}