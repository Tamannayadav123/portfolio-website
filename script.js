let tablinks = Array.from(document.getElementsByClassName("tab-links"));
console.log(tablinks);
let tabcontents =Array.from(document.getElementsByClassName("tab-contents"));

console.log(tabcontents);

function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("side_menu");

function openmenu()
{
    sidemenu.style.right = "0";
} 
function closemenu()
{
    sidemenu.style.right="-200px";
}

