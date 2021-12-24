const express = require('express');
const router = express.Router();
const { Pregunta } = require('../models/Pregunta');
const {Categoria} = require('../models/Categoria');

// Crear una nueva pregunta y asignarla a una categoria
router.post('/new', async (req, res) => {
    if (req.body.categoria) {
        const categoria = await Categoria.findById(req.body.categoria);
        const pregunta = new Pregunta({
            pregunta: req.body.pregunta,
            respuesta1: req.body.respuesta1,
            respuesta2: req.body.respuesta2,
            respuesta3: req.body.respuesta3,
            respuestaCorrecta: req.body.respuestaCorrecta,
            categoria: categoria
        });
        
        pregunta.save().then((pregunta) => {
    
            res.json({ message: 'Pregunta creada correctamente', pregunta: pregunta });
        }).catch((err) => {
            res.json({ message: 'Error al crear la pregunta', err });
        });
    } else {
        res.status(500).send({ message: 'Debe seleccionar una categoria' });
    }
  
    
});

// Obtener todas las preguntas por categoria
router.get('/categoria/:id', (req, res) => {
    console.log("Obteniendo preguntas por categoria");
    Pregunta.find({categoria: req.params.id}).then((preguntas) => {
        res.json({message: 'Preguntas obtenidas correctamente', preguntas: preguntas});
    }).catch((err) => {
        res.json({message: 'Error al obtener las preguntas', err});
    });
});

// Obtener una pregunta por nivel de categoria
router.get('/nivel/:nivel', (req, res) => {
    // obtnemos todos las categorias con el nivel que nos llega por parametro
    
    Categoria.find({nivel: req.params.nivel}).then((categorias) => {
        // creamos un array con los ids de las categorias
        const ids = categorias.map(categoria => categoria._id);
        // buscamos todas las preguntas que tengan una categoria de esos ids
        Pregunta.find({categoria: {$in: ids}}).then((preguntas) => {
            // Seleccionamos una pregunta aleatoria
            const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
            // Enviamos la pregunta
            res.json({message: 'Pregunta obtenida correctamente', pregunta: pregunta});

        }).catch((err) => {
            res.json({message: 'Error al obtener las preguntas', err});
        });
    }).catch((err) => {
        res.json({message: 'Error al obtener las categorias', err});
    });
});



module.exports = router;