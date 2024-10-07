const express = require('express');
const carRouter = require('./car.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/cars', carRouter);

module.exports = router;
