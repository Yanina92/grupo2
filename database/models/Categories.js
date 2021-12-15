module.exports = (sequelize, dataTypes) => {
  const alias = 'Category';
  const cols = {
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
      tableName: 'categories',
      timestamps: false
  };
  const Categories = sequelize.define(alias, cols, config);

  Categories.associate = (models) => {  
    Categories.hasMany(models.Product,
      {

        foreignKey:"id_category"
      })
  }


  return Categories
}

