const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
  });

router.post('/', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    res.redirect('/success?message=Form filled successfully');
});
module.exports = router;