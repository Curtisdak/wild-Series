const express = require('express');

const router = express.Router();

const {browse, read} = require('../../../controllers/categoryActions')

router.get('/', browse);
router.get('/:id', read);// this allow to get a specific categorie via the params ID

module.exports = router;