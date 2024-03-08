const express = require('express')
const path = require('path')
const app = express()
const port = 8080

const pages = { //Aquí se delcaran las paginas de la web: "url":"ubicacion-archivo.html"
    "/":"/pages/index.html",
    "/sobre-nosotros":"/pages/sobrenosotros.html",
    "/client-calendar":"/pages/client_calendar.html",
    "/nutritionist-calendar" : "/pages/nutritionist_calendar.html",
    "/register": "/pages/register.html"
}

app.use(express.static('public'))

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

app.get("/nutritionist-calendar", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/nutritionist-calendar"]))
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, pages["/register"]))
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})