const express = require('express');
const User = require('../../models/user');
const auth = require('../../middleware/auth');
const router = express.Router();
var session = require('express-session');

router.get('/', async(req, res) => {
    if (req.session.user) {
        // res.render('admin/admin', {layout: false, user:req.session.user});
        res.redirect('/admin');
    } else {
        res.render('login/userlogin', { layout: false });
    }
});

router.post('/', async(req, res) => {
    // res.render('admin/admin', {layout: false});
    res.redirect('/admin');

});

router.get('/out', async(req, res) => {
    req.session.destroy(function() {
        console.log("user logged out.")
    });

    res.redirect('/user_login');

});
module.exports = router;