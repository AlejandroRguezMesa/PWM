const express = require('express')
const path = require('path')
const app = express()
const port = 8080

const pages = { //Aquí se delcaran las paginas de la web: "url":"ubicacion-archivo.html"
    "/":"/pages/index.html",
    "/sobre-nosotros":"/pages/sobrenosotros.html",
    "/nutritionist-calendar" : "/pages/nutritionist_calendar.html",
    "/register": "/pages/register.html",
    "/client-calendar":"/pages/client_calendar.html",
    "/client-list":"/pages/client_list.html",
    "/faq":"/pages/faq.html",
    "/otros-enlaces":"/pages/otrosenlaces.html",
    "/terminos":"/pages/terminos.html",
    "/contacto":"/pages/contacto.html",
    "/nutritionist-list":"/pages/nutritionist_list.html"
}

app.use(express.static('public'))
app.use(express.static('data'))

//Aquí te declara los respectivos gets de las paginas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/"]))
});

app.get("/sobre-nosotros", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/sobre-nosotros"]))
});

app.get("/client-calendar", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/client-calendar"]))
});

app.get("/client-list", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/client-list"]))
});
app.get("/nutritionist-calendar", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/nutritionist-calendar"]))
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/register"]))
});

app.get("/nutritionist-list", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/nutritionist-list"]))
});

app.get("/faq", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/faq"]))
});
app.get("/otros-enlaces", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/otros-enlaces"]))
});
app.get("/terminos", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/terminos"]))
});
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/contacto"]))
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})