const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./db');
router.use(bodyParser.json());

router.get('/readall', (req, resp, next) => {

});

router.get('/read', (req, resp, next) => {

});

router.post('/update', (req, resp, next) => {

});

router.post('/delete', (req, resp, next) => {

});

router.post('/create', (req, resp, next) => {

});

router.get('/milage', async (req, resp, next) => {

});

module.exports = router;