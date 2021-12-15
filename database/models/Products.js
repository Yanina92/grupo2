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
  const Products = sequelize.define(alias, cols, config);

  Products.associate =  function (models){  
    Products.hasOne(models.Category,
        { 
                  // Relacion de Productos => Categories
        foreignKey:"id"
        }),

    Products.belongsTo(models.Brands,
        {
          as:"brands",                  // Relacion de Productos => Brand
          foreignKey:"id_brand",
        }),


    Products.hasOne(models.Storages,
              {
                as:"storages",              // Relacion de Productos => Storages
                foreignKey:"id_product",
              })

    Products.belongsToMany(models.User,{
            as: "user",
            through: "products_users",
            foreignKey: "user_id",
            otherKey: "product_id",
            timestamps: false
        });
  }

  return Products
}


