const multer = require('multer');
const path = require('path');

const storageProd = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, './public/upload/productsImages');

    },
    filename: (req,file,cb)=>{
        let fileNameProd =`${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileNameProd);
    }

});

module.exports = storageProd;