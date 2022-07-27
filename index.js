// const express = require('express')
// const a = express()
// const port = process.env.PORT || 3000
// a.get('/', (req, res) => {
//     res.type('text/plain')
//     res.send('Server Expresso ☕')
// })
// a.get('/about', (req, res) => {
//     res.type('text/plain')
//     res.send('Server Expresso ☕ About')
// })
// a.use((req, res) => {
//     res.type('text/plain')
//     res.status(404)
//     res.send('404 Not found ☕_☕')
// })
// a.listen(port, () => console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `))
// Requerir express y crear una instancia de ello
var express = require('express');
var app = express();

// en la solicitud de root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b> Mi </b> primer servidor http express');
});

// En localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Holi</b> Bienvenido a mi servidor http hecho con express');
});

// Cambiar el mensaje 404 modificando el middleware
app.use(function(req, res, next) {
    res.status(404).send("Lo siento, esa ruta no existe. Que tengas un buen día :)");
});

// inicie el servidor en el puerto 3000!
app.listen(3000, function () {
    console.log('Aplicación de ejemplo escuchando en el puerto 3000.');
});
