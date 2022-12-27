module.exports = (sequelize, DataTypes) => {
  const OrderPortion = sequelize.define('OrderPortion', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.TINYINT,
    orderId: DataTypes.INTEGER(11),
  }, { tableName: 'orderportions' },
  );

  return OrderPortion;
};
