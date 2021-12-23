const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000; // Configuramos el puerto

require('dotenv').config();

app.use(cors()); // Configuramos el middleware de cors para permitir peticiones desde cualquier origen
app.use(express.json()); // Configuramos el middleware de express para que pueda leer los datos enviados en formato json
app.use(express.urlencoded()); // Permite que los datos sean enviados en formato urlencoded
app.use(require('./routes/routers')); // Configuramos las rutas

const {
  registrarControladores
} = require('./controllers');

const {
  conectarAMongoDB,
  subscribirCerrar
} = require('./db/db');

// Establecer coneccion con la base de datos

conectarAMongoDB(); // Registramos ka configuración de las funciones controladoras

registrarControladores(app); // Configuramos watcher para cerrar la coneccion con la base de datos

subscribirCerrar();

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });