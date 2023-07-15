const express = require('express');
const router = express.Router();

router.use('/products', require('./products'));
router.get('/', (req, res)=>{
    return res.send('welcome to e-commerce platform');
})
module.exports = router;