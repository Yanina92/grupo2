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
      tableName: 'Brands',
      timestamps: false
  };
  const Brand = sequelize.define(alias, cols, config);

  
  Brand.associate = (models) => {  
    Brand.hasMany(models.Products,
      {
        as:"products",
        foreignKey:"id_brand",
        timestamps: false
      })
  }


  return Brand
}

