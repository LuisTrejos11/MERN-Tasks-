// rutas para autenticar usuarios

const { Router } = require('express');
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');


// crea un usuario 
// api/auth
router.post('/',
    [
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser de al menos 6 carateres').isLength({min:6})
    ],
    authController.autenticarUsuario
);

module.exports = router;