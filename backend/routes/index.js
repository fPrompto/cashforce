const { Router } = require('express');

const {
  findAllOrders,
} = require('../controllers/cashController');

const { ROUTE } = require('../config/strings');

const cashForceRouter = Router();

cashForceRouter.get(ROUTE.FIND_ALL_ORDERS, findAllOrders);

module.exports = { cashForceRouter };
