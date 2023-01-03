const cashService = require('../services/cashService');

const findAllOrders = async (_req, res) => {
  const find = await cashService.findAllOrders();
  return res.status(find.status).json(find.data);
};

module.exports = {
  findAllOrders,
};
