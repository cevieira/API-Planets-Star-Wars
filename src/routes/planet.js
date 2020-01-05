'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/planet-controller');

router.post('/', controller.post);
router.delete('/', controller.delete);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/name/:name', controller.getByName);

module.exports = router;