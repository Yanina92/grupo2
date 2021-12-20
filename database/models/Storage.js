module.exports = (sequelize, dataTypes) => {
  let alias = 'Storage';
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
      tableName: 'storages',
      timestamps: false
  };
  const Storage = sequelize.define(alias, cols, config);

  
  Storage.associate = (models) => {  
    Storage.belongsTo(models.Product,
      {
        as:"product",
        foreignKey:"id_product",
      })
  }

  return Storage
}

