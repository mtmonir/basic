const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Route 1");
});

router.get('/2', (req, res)=>{
    res.send("Route 2");
});

module.exports = router;