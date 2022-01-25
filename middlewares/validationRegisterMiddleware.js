const express= require('express');
const router= express.Router();
const {body} =require('express-validator');
const path = require('path');
const { check } = require('express-validator');

const validations = [
    check('first_name').notEmpty().withMessage('Tienes que escribir un nombre'),
    check('last_name').notEmpty().withMessage('Tienes que escribir un apellido'),
    check('email')
        .notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Tienes que escribir un formato de email válido'),
        check('phone').notEmpty().withMessage('Tienes que escribir un telefono'),
        check('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
        check('admin').notEmpty().withMessage('Debes indicar la modalidad del usuario'),
   check('image').custom((value,{req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.gif', '.png'];
        

        if (!file) {
            throw new Error('Tienes que subir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]

module.exports = validations;