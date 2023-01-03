const {
  Buyer, Cnpj, Order, Provider, User,
} = require('../models');

const { STATUS_CODE } = require('../config/strings');

const findAllOrders = async () => {
  const find = await Order.findAll({
    include: [
      {
        model: Cnpj, as: 'cnpj',
      },
      {
        model: User, as: 'user',
      },
      {
        model: Buyer, as: 'buyer',
      },
      {
        model: Provider, as: 'provider',
      },
    ],
  });

  return {
    status: STATUS_CODE.OK,
    data: find,
  }
};

module.exports = {
  findAllOrders,
};
