const {body} =require('express-validator');
const path = require('path');

const validations = [
    body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Tienes que escribir un formato de email válido'),
    body('phone').notEmpty().withMessage('Tienes que escribir un telefono'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('image').custom((value,{req}) => {
        let file = req.file;
        let accepptedExtensions = ['.jpg','.gif','.png'];
        if (!file){
            throw new Error('Tienes que subir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!accepptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
            }
        }
        return true;
    }),
]

module.exports = validations;