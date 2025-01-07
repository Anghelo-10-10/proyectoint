const express = require('express');
const router = express.Router();
const reciclajeController = require('../controller/reciclajeController');

// Ruta raíz para comprobar funcionamiento
router.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de reciclaje!');
});

// Ejemplo de otra ruta
router.get('/centros', (req, res) => {
    res.json({
        message: 'Aquí estará la lista de centros de reciclaje',
        data: [] // Aquí puedes agregar datos reales más adelante
    });
});

// Exportar el router para que pueda ser utilizado en server.js
module.exports = router;


//map
router.get('/locations', reciclajeController.getLocations);
router.post('/locations', reciclajeController.addLocation);

module.exports = router;

