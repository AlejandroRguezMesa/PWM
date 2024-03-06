let formShowed = false;

function showLogin(event){

    if (formShowed){
        const form = document.querySelector(".flotante");
        form.classList.remove("showed");
        formShowed = false;
    } else{
        const form = document.querySelector(".flotante");
        form.classList.add("showed");
        formShowed = true;
    }



}