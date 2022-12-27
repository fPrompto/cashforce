module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.TINYINT,
    paymentStatusProvider: DataTypes.TINYINT,
    orderId: DataTypes.INTEGER(11),
    sponsorId: DataTypes.INTEGER(11),
  }, { tableName: 'offers' },
  );

  return Offer;
};
