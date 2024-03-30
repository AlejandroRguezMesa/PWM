function loadCard(obj) {

    let dummyClient = document.getElementById("dummy-Client")
    for (let i = 0; i < obj.length; i++) {
        let objeto = dummyClient.cloneNode(true);
        dummyClient.parentElement.append(objeto);


        console.log(objeto);
        objeto.querySelector(".client_name").innerHTML = obj[i].nombre;

        // document.querySelector("#dummy .name").text = name;
        objeto.classList.remove("ocultado");
    }
}

setTimeout(()=> {
    loadJsonData("client_card.json").then((obj) => {
        loadCard(obj);
        //console.log(obj);
    }).catch((e) => console.log(e));
}, 150);
