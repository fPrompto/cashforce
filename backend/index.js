const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const { ROUTE } = require('./config/strings');
const { cashForceRouter } = require('./routes');

const PORT = process.env.PORT || 7000;

const app = express();
app.use(bodyParser.json());

app.all('/*', (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,accept,access_token,X-Requested-With');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.use(ROUTE.CASHFORCE, cashForceRouter);

app.listen(PORT, () => console.log(`running on port ${PORT}`));
