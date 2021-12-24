const express = require('express');
const router = express.Router();
const { Jugador } = require('../models/Jugador');

// Crear un nuevo jugador
router.post('/new', async (req, res) => {
    const jugador = new Jugador({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        puntos: req.body.puntos,
        nivel: req.body.nivel
    });
    jugador.save().then((jugador) => {
        res.json({ message: 'Jugador creado correctamente', jugador: jugador });
    }).catch((err) => {
        res.json({ message: 'Error al crear el jugador', err });
    });
});

// Obtener todos los jugadores
router.get('/', async (req, res) => {
    Jugador.find().then((jugadores) => {
        res.json({ message: 'Jugadores obtenidos correctamente', jugadores: jugadores });
    }).catch((err) => {
        res.json({ message: 'Error al obtener los jugadores', err });
    });
});

module.exports = router;