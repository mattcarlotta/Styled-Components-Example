const express = require('express');

const app = express();
const consign = require('consign');

consign({ locale: 'en-us', verbose: false })
  .include('middlewares')
  .then('server')
  .into(app);
