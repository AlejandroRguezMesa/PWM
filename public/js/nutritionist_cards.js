function loadCard(obj) {

    let dummy = document.getElementById("dummy")
    let tagdummy = document.getElementById("tagdummy")
    for (let i = 0; i < obj.length; i++) {
        let objeto = dummy.cloneNode(true);
        dummy.parentElement.append(objeto);

        let nombres = objeto.querySelectorAll(".name");

        for (let j= 0; j<nombres.length;j++ ){
            nombres[j].innerHTML = obj[i].nombre;
        }

        objeto.querySelector(".description").innerHTML = obj[i].descripcion;
        let localidades = objeto.querySelectorAll(".localidad");

        for (let j= 0; j<localidades.length;j++ ){
            localidades[j].innerHTML = obj[i].localidad;
        }

        let precios = objeto.querySelectorAll(".precio");

        for (let j= 0; j<precios.length;j++ ){
            precios[j].innerHTML = obj[i].precio + "€/hora";
        }

        for (let j = 0; j < obj[i].tags.length; j++) {
            let tag = tagdummy.cloneNode(true);

            objeto.querySelector(".tags").append(tag);

            tag.innerHTML = obj[i].tags[j];

            tag.classList.remove("ocultado")
        }

        // document.querySelector("#dummy .name").text = name;
        objeto.classList.remove("ocultado");
    }
}

setTimeout(()=> {
    loadJsonData("nutritionist_card.json").then((obj) => {
        loadCard(obj);
        //console.log(obj);
    }).catch((e) => console.log(e));
}, 150);
