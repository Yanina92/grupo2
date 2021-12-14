module.exports = (sequelize, dataTypes) => {
  let alias = 'Storages';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      amount: {
          type: dataTypes.INTEGER,
          allowNull: false
      },
      id_product:{
        type:dataTypes.INTEGER
      }
  }
  let config = {
      tableName: 'Storages',
      timestamps: false
  };
  const Storages = sequelize.define(alias, cols, config);

  
  Storages.associate = (models) => {  
    Storages.belongsTo(models.Products,
      {
        as:"products",
        foreignKey:"id_product",
        timestamps: false
      })
  }

  return Storages
}

