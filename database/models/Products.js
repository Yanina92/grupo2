module.exports = (sequelize, dataTypes) => {
  let alias = 'Product';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
          type: dataTypes.STRING(255)
      },
      description: {
          type: dataTypes.STRING(255)
      },
      offer:{
          type: dataTypes.STRING(255)
      },
      discount: {
          type: dataTypes.STRING(255)
      },
      price: {
          type: dataTypes.STRING(255)
      },
      image: {
          type: dataTypes.STRING(255)
      },
      stock: {
          type: dataTypes.STRING(255)
      },
      id_category:{
        type:dataTypes.INTEGER
      },
      id_brand:{
        type:dataTypes.INTEGER
      },
      
  };
  let config = {
      tableName: 'Products',
      timestamps: false
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {  
    Product.belongsTo(models.Categories,
        {
        as:"categories",
        foreignKey:"id_category",
        timestamps: false
        })

    Product.belongsTo(models.Brands,
        {
          as:"brands",
          foreignKey:"id_brand",
        })

    Product.belongsTo(models.User)
  }

  return Product
}


