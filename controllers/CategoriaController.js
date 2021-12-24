const express = require('express');
const router = express.Router();
const { Categoria } = require('../models/Categoria');

// Obtener todas las categorias
router.get('/', async (req, res) => {

    Categoria.find().then((categorias) => {
        
        res.json({ message: 'Categorias obtenidas correctamente', categorias: categorias });
    }
    ).catch((err) => {
        res.json({ message: 'Error al obtener las categorias', err });
    }
    );

});

// Crear una categoria
router.post('/new', async (req, res) => {
    
    const categoria = new Categoria({
        nombre: req.body.nombre,
        nivel: req.body.nivel
    });
    
    categoria.save().then((categoria) => {
        res.json({ message: 'Categoria creada correctamente', categoria: categoria });
    }).catch((err) => {
        res.json({ message: 'Error al crear la categoria', err });
    });
});

// Obtener una categoria por id
router.get('/:id', async (req, res) => {
    Categoria.findById(req.params.id).then((categoria) => {
        res.json({ message: 'Categoria obtenida correctamente', categoria: categoria });
    }).catch((err) => {
        res.json({ message: 'Error al obtener la categoria', err });
    });
});


module.exports = router;