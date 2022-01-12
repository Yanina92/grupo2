module.exports = (sequelize, dataTypes) => {
  let alias = 'products_users';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      id_user: {
        type: dataTypes.INTEGER,        
      },
      id_product: {
        type: dataTypes.INTEGER,
    }
  }
  let config = {
      tableName: 'products_users',
      timestamps: false
  };
  const products_users = sequelize.define(alias, cols, config);

  products_users.associate = (models) => {
    products_users.belongsTo(models.Products,{
        as:"products",
        foreignKey:"id_product",
    })
  }
  
  products_users.associate = (models) => {
    products_users.belongsTo(models.User,{
        as:"users",
        foreignKey:"id_user",
    })
  }

  return products_users
}

