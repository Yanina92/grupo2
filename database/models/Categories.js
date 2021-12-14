module.exports = (sequelize, dataTypes) => {
  let alias = 'Categories';
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
      tableName: 'Categories',
      timestamps: false
  };
  const Categories = sequelize.define(alias, cols, config);

  Categories.associate = (models) => {  
    Categories.hasMany(models.Products,
      {
        as:"products",
        foreignKey:"id_category"
      })
  }


  return Categories
}

