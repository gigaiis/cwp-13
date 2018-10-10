const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./db');
router.use(bodyParser.json());

router.post('/create', (req, resp, next) => {
    
});

module.exports = router;