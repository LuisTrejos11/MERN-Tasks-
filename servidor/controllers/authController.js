const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');


exports.autenticarUsuario = async (req, res)=>{
    // revisamos si hay errores 
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    // extraer el email y el password 
    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({email});

        if(!usuario){
            return res.status(400).json({msg:"El usuario no existe"});
        }

        // revisar el password
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);
        if(!passwordCorrecto){
            return res.status(400).json({msg:"Password incorrecto"});
        }

        // si todo es correcto crear y firmar el jwt
        const payload = {
            usuario : {
                id: usuario.id
            }
         };
 
         // firmar el jwt
         jwt.sign(payload, process.env.SECRETA,{
             expiresIn: 3600
         }, (error, token)=>{
             if(error) throw error;
 
                 // mensaje de confirmacion 
             res.json({token});
         });
         
    } catch (error) {
        console.log(error);
    }


}