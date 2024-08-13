export default (sequelize, DataTypes) => {
    return sequelize.define('Inventory', {
      itemName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    });
  };
  