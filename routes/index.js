const express = require('express');
const router = express.Router();


//Main page
router.get('/', (req, res) => res.render('main'));


module.exports = router;
