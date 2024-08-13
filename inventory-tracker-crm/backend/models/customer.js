export default (sequelize, DataTypes) => {
    return sequelize.define('Customer', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  };
  