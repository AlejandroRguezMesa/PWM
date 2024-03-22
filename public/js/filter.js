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

let filterDescShowed;
let check
function openDescription(name, id, text) {
    check =  document.getElementsByClassName("filter-type").namedItem(name).style.height
    if(check === ""){
        filterDescShowed = true;
    }else {
        filterDescShowed = false;
    }
    if (filterDescShowed) {
        document.getElementsByClassName("filter-type").namedItem(name).style.height = "0";
        document.getElementsByClassName("filter-type").namedItem(name).style.display = "none";
        document.getElementsByClassName("text-filter").namedItem(text).innerHTML
            = id + " <i class=\"fa-solid fa-plus\"></i>";
        filterDescShowed = false;
    } else {
        document.getElementsByClassName("filter-type").namedItem(name).style.height = "";
        document.getElementsByClassName("filter-type").namedItem(name).style.display = "";
        document.getElementsByClassName("text-filter").namedItem(text).innerHTML
            = id + " <i class=\"fa-solid fa-minus\"></i>";
        filterDescShowed = true;
    }
}