const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(__dirname + '/public'))

app.get('/formulario', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'formulario.html'))
});

app.get('/formulariologin', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'formulariologin.html'))
});

app.get('/carrito', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'carrito.html'))
});

app.get('/detalle', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'detalle.html'))
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
});



app.listen(PORT, function(){
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});