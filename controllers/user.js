const express = require('express');
const router = express.Router();
const User = require('../models/user');
const validate = require('../middlewares/validator');
const auth = require('../middlewares/auth');
const formatQueries = require('../middlewares/formatQueries');
const { getAll, get, create, update, remove } = require('../middlewares/crud');

router.get('/', formatQueries, getAll(User));

router.get('/:id', get(User));

router.post('/', create(User));

router.patch('/:id', update(User));

router.delete('/:id', remove(User));

module.exports = router;