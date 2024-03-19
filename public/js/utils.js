let formShowed = false;

setTimeout(() => {
    formLogin = document.getElementById("form-login-all");

    formLogin.onsubmit = (event) => {
        event.preventDefault();

        let [user, pass] = formLogin.elements;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: user,
                    pass: pass
                }
            })
        });
    }
}, 500);



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

