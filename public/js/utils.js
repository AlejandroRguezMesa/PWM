let formShowed = false;
setTimeout(() => {
    form = document.querySelector(".flotante");
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
    form.classList.add("oculto");

}, 500);



function showLogin(event){

    if (formShowed){
        setTimeout(() => form.classList.add("oculto"), 600);
        form.classList.remove("showed");
        formShowed = false;
    } else{
        form.classList.remove("oculto");
        setTimeout(() =>  form.classList.add("showed"), 100);
        formShowed = true;
    }

    /*loadJsonData("user.json").then((obj) => {
        console.log(obj);
    }).catch((e) => console.log(e));*/

}

async function loadJsonData(fileUrl){

    let file = await fetch(fileUrl);

    let text = await file.text();

    let parsedObj = null;

    try {
        parsedObj = JSON.parse(text);
    } catch (e) {
        return Promise.reject("Error parse JSON");
    }

    return Promise.resolve(parsedObj);

}