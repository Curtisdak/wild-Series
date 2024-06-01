const express = require("express");

const router = express.Router();

const { browse, read } = require('../../../controllers/programsAction');

router.get('/', browse)

// this is to get one program via an ID


router.get('/:id', read)

module.exports = router;