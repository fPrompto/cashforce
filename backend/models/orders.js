const associate = (models) => {
  models.Order.belongsTo(models.Cnpj, {
    foreignKey: 'cnpjId',
    as: 'cnpj',
  });

  models.Order.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
  });

  models.Order.belongsTo(models.Buyer, {
    foreignKey: 'buyerId',
    as: 'buyer',
  });

  models.Order.belongsTo(models.Provider, {
    foreignKey: 'providerId',
    as: 'provider',
  });
};

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    cnpjId: DataTypes.INTEGER(11),
    userId: DataTypes.INTEGER(11),
    buyerId: DataTypes.INTEGER(11),
    providerId: DataTypes.INTEGER(11),
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING,
  }, { tableName: 'orders' },
  );

  Order.associate = associate;

  return Order;
};
