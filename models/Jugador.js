const { Schema, model } = require('mongoose');

const JuagadorSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    puntos: {
        type: Number,
        required: true,
        default: 0
    },
    nivel: {
        type: Number,
        required: true,
        default: 1
    }
},
{
    timestamps: true
},
{
    collection: 'Jugador'
}
);

exports.Jugador = model('Jugador', JuagadorSchema);