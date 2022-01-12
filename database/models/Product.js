module.exports = (sequelize, dataTypes) => {
  const alias = 'Product';
  const cols = {
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
      tablenName:'products',
      timestamps: false
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate =  function (models){  
    Product.hasOne(models.Category, // Relacion de Producto => Category
        { 
        as:"category",
        foreignKey:"id"
        });

    Product.belongsTo(models.Brand, // Relacion de Producto => Brand
        {
          as:"brand",                
          foreignKey:"id_brand"
        });


    Product.hasOne(models.Storage,  // Relacion de Producto => Storage
        {
            as:"storage",              
            foreignKey:"id_product"
        });

    Product.belongsToMany(models.User,  // Relacion de Productos => Usuarios
        {   
          as: "users",
          through: "products_users",
          foreignKey:"product_id",
          otherKey:"user_id",
          timestamps: false
        });
  }

  return Product
}


