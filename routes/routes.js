const express = require('express');
const RoutesCtrl = require('../controllers/RoutesController');
const Router = express.Router();

Router.get('/',RoutesCtrl.index);

module.exports = Router;