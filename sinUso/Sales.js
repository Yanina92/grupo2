module.exports = (sequelize, dataTypes) => {
  let alias = 'Sales';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      date: {
          type: dataTypes.date,
          allowNull: false
      },
      id_user: {
        type:dataTypes.INTEGER
      },
      id_product:{
        type:dataTypes.INTEGER
      }
  }
  let config = {
      tableName: 'Sales',
      timestamps: false
  };
  const Sales = sequelize.define(alias, cols, config);

  
  Sales.associate = (models) => {  
    Sales.hasMany(models.Products,
      {
        as:"products",
        foreignKey:"id_product",
        timestamps: false
      })
  }

  return Sales
}

