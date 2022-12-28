module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.TINYINT,
    cashforceAdm: DataTypes.TINYINT,
  }, { tableName: 'users' },
  );

  return Sponsor;
};
