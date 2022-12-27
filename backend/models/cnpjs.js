module.exports = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define('Cnpj', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
  }, { tableName: 'cnpjs' },
  );

  return Cnpj;
};
