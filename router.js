const express = require('express');
const router = express.Router();

router.get('/binario',(req, res)=>{
    res.send('BINARIO');
})

module.exports = router;

router.get('/binarioInt', (req, res)=>{
    res.render('binarioInt');
})