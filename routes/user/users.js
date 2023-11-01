const express = require("express");
const Sequelize = require("sequelize");
const User = require('../../models/user');
const auth = require('../../middleware/auth');
const router = express.Router();
var session = require('express-session');
const Op = Sequelize.Op;

//contacts route
router.get("/", async(req, res) => {
    User.findAll()
        .then((user) =>

            res.render("user/userlist", {
                user,
                layout: 'layout/dash-lay1'
            })
        )

});


//route
router.get('/register', async(req, res) => {
    res.render('user/register', { layout: false });
});

// sign up here
router.post("/register", (req, res) => {
    let {
        name,
        email,
        password

    } = req.body;
    let errors = [];

    // Validate Fields
    if (!name) {
        errors.push({ text: "Please add a name" });
    }

    if (!email) {
        errors.push({ text: "Please add email" });
    }

    if (!password) {
        errors.push({ text: "Please add password" });
    }


    // Insert into table
    User.create({
            name,
            email,
            password


        })
        .then((user) => res.redirect("/user_login"))
        .catch((err) => res.render("error", { error: err.message }));

});
module.exports = router;