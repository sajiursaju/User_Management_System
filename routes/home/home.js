const express = require('express');

const router = express.Router();


router.get('', async(req, res) => {
    res.render('home/home', { layout: false });
})



module.exports = router;