export default (sequelize, DataTypes) => {
    return sequelize.define('Sales', {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    });
  };
  