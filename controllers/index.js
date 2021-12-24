const CategoriaController = require('./CategoriaController');
const PreguntasController = require('./PreguntasController');

exports.registrarControladores = (app) => {
    app.use('/categoria/', CategoriaController);
    app.use('/pregunta/', PreguntasController);
 
}