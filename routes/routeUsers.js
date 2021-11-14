const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerUsers');
const multer = require('multer');
const path = require('path');
const {body} =require('express-validator');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, './public/images/avatars');

    },
    filename: (req,file,cb)=>{
        let fileName =`${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }

});

const validations = [
    body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Tienes que escribir un formato de email válido'),
    body('phone').notEmpty().withMessage('Tienes que escribir un telefono'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('avatar').custom((value,{req}) => {
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

const uploadFile = multer({storage});

router.get('/', controller.index);
router.delete('/delete/:id', controller.delete);
router.patch('/edit/:id', controller.put);
router.get('/edit/:id', controller.edit);
router.post('/create', controller.create);
router.get('/register', controller.register);
router.post('/register', uploadFile.single('avatar'), validations, controller.processRegister);
router.get('/login', controller.login);
module.exports = router;