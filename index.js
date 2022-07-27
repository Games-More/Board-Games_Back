const express = require('express');
const app = express();
const port = 4000;


app.get('/', (req, res) => {
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

// inicie el servidor en el puerto 4000!
app.listen(port, () => {
    console.log(`Aplicación de ejemplo escuchando en el puerto ${port}.`);
});
