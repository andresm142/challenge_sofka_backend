const CategoriaController = require('./CategoriaController');
const PreguntasController = require('./PreguntasController');
const JugadorController = require('./JugadorController');

exports.registrarControladores = (app) => {
    app.use('/categoria/', CategoriaController);
    app.use('/pregunta/', PreguntasController);
    app.use('/jugador/', JugadorController);
 
}