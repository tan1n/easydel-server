const express = require('express');
const router = express.Router();
const Pickup = require('../models/pickup');
const validate = require('../middlewares/validator');
const auth = require('../middlewares/auth');
const formatQueries = require('../middlewares/formatQueries');
const { getAll, get, create, update, remove } = require('../middlewares/crud');

router.get('/', formatQueries, getAll(Pickup));

router.get('/:id', get(Pickup));

router.post('/', create(Pickup));

router.patch('/:id', update(Pickup));

router.delete('/:id', remove(Pickup));

module.exports = router;