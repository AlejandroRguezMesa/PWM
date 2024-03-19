let filterShowed;
function openNav() {

    if (filterShowed) {
        document.getElementById("mySidepanel").style.width = "80%";
        document.getElementById("filter-hamburger").innerHTML = "&#x2716";
        filterShowed = false;
    } else {
        document.getElementById("mySidepanel").style.width = "0";
        document.getElementById("filter-hamburger").innerHTML = "&#9776 Filtros";
        filterShowed = true;
    }
}
let filterID;
let filterDescShowed = true;
function openDescription(name, id) {
    filterID= document.getElementById(id).innerHTML;
    if (filterDescShowed) {
        document.getElementsByClassName("filter-type").namedItem(name).style.height = "0";
        document.getElementsByClassName("filter-type").namedItem(name).style.display = "none";
        document.getElementsByClassName("text-filter").namedItem('prueba').innerHTML = filterID + "&#43;";
        filterDescShowed = false;
    } else {
        document.getElementsByClassName("filter-type").namedItem(name).style.height = "";
        document.getElementsByClassName("filter-type").namedItem(name).style.display = "";
        document.getElementsByClassName("text-filter").namedItem('prueba').innerHTML =filterID + "&#45";

        filterDescShowed = true;
    }
}