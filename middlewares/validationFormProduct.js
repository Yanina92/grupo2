const validateFormCreate = [
  body('name').notEmpty().withMessage('Tenes que completar el campo de Nombre'),
  body('category').notEmpty().withMessage('Tenes que completar el campo de Categoria'),
  body('brand').notEmpty().withMessage('Tenes que completar el campo de Marca'),
  body('price')
  .notEmpty().withMessage('Tenes que completar el campo Precio').bail()
  .isNumeric().withMessage('Tenes que completar el campo Precio expresado en numeros'),
  body('offer').notEmpty().withMessage('Tenes que decir Si esta,o No en oferta')
];

module.exports = validateFormCreate;