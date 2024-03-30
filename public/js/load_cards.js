// const requestURL = "/data/client_card.json";
// const request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();
//
//
// request.onload = function () {
//     const
// }
//
// function showCards(jsonObj) {
//     const cards = jsonObj["clientes"];
//
//     for (var i = 0;i< cards.length; i++){
//         document.getElementById(name).innerHTML = cards[i].nombre;
//     }
// }

// "use strict";
//
// import users from '/resources/client_card.json' with {type: 'json'};
//
// console.log(users);
// // document.getElementById("name").innerHTML = users[1].clientes[1].nombre;
//
// // for (var i = 0;i<users.length;i++){
//     // document.getElementById(name).innerHTML = users[i];
//     // document.getElementById("name").innerHTML = users[i].clientes[i].nombre;
//     console.log(users[1].clientes[1].nombre);
//     console.log(users[i].clientes[i].localidad);
//     console.log(users[i].clientes[i].precio);
//     console.log(users[i].clientes[i].descripcion);
// // }

loadJsonData("client_card.json").then((obj) => {
     console.log(obj);
 }).catch((e) => console.log(e));