const express = require('express');
const app = express();
const morgan = require('morgan');

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(__dirname + '/public'));

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));


//en la ruta raiz de abrira el juego
app.get('/', (req, res) => {
  res.sendFile('index.html');
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto http://localhost:${PORT}`);
});