module.exports = (sequelize, dataTypes) => {
  let alias = 'Brand';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
          type: dataTypes.STRING(255),
          allowNull: false
      }
  }
  let config = {
      tableName: 'brands',
      timestamps: false
  };
  const Brand = sequelize.define(alias, cols, config);

  
  Brand.associate = function (models) {  
    Brand.hasMany(models.Product,
      {
        as:"products",  //Con este nombre llamaremos a la relacion.
        foreignKey:"id_brand"
      });
  }


  return Brand
}

