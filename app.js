const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000; // Configuramos el puerto

require('dotenv').config();

app.use(cors()); // Configuramos el middleware de cors para permitir peticiones desde cualquier origen
app.use(express.json()); // Configuramos el middleware de express para que pueda leer los datos enviados en formato json
app.use(express.urlencoded()); // Permite que los datos sean enviados en formato urlencoded


const {registrarControladores} = require('./controllers');

const {conectarAMongoDB, subscribirCerrar} = require('./db/db');

conectarAMongoDB(); // Establecer coneccion con la base de datos

registrarControladores(app);  // Registramos la configuración de las funciones controladoras

// Configuramos watcher para cerrar la coneccion con la base de datos

subscribirCerrar();


// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });