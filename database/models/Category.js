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
  const Category = sequelize.define(alias, cols, config);

  Category.associate = (models) => {  
    Category.hasMany(models.Product,
      {
        as:"products",
        foreignKey:"id_category"
      });
  }

  return Category
}

