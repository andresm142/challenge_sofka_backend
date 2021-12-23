const CategoriaController = require('./CategoriaController');
const PreguntasController = require('./PreguntasController');

exports.registrarControladores = (app) => {
    app.use('/categorias', CategoriaController);
    app.use('/preguntas', PreguntasController);
 
}