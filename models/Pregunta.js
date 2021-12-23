const { Schema, model } = require('mongoose');

const PreguntaSchema = new Schema({
    pregunta: {
        type: String,
        required: true
    },
    respuesta1: {
        type: String,
        required: true
    },
    respuesta2: {
        type: String,
        required: true
    },
    respuesta3: {
        type: String,
        required: true
    },
    respuestaCorrecta: {
        type: String,
        required: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
},
{
    timestamps: true
},
{
    collection: 'Pregunta'
}
);

exports.Pregunta = model('Pregunta', PreguntaSchema);