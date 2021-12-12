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

  Categories.associate = () => {  
    Categories.hasMany(models.Products,
      {
        as:"products",
        through: "id",
        foreignKey:"id_category",
        otherKey:"",
        timestamps: false
      })
  }


  return Categories
}

