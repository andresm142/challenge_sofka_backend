const { Schema, model } = require('mongoose');

const CategoriaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    nivel: {
        type: Number,
        required: true
    },
},
{
    timestamps: true
},
{
    collection: 'Categoria'
}
);

exports.Categoria = model('Categoria', CategoriaSchema);