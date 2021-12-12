module.exports = (sequelize, dataTypes) => {
  let alias = 'User';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      first_name: {
          type: dataTypes.STRING(255)
      },
      last_name: {
          type: dataTypes.STRING(255)
      },
      email:{
          type: dataTypes.STRING(255)
      },
      password: {
          type: dataTypes.STRING(255)
      },
      phone: {
          type: dataTypes.STRING(255)
      },
      image: {
          type: dataTypes.STRING(255)
      },
      admin: {
        type: dataTypes.BOOLEAN,
        defaultValue: 0
    }
  };
  let config = {
      tableName: 'Users',
      timestamps: false
  };
  const User = sequelize.define(alias, cols, config)

  return User
}

