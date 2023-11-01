const Sequelize = require('sequelize');
const db = require('../config/database');

const Admin = db.define('admin', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    }
});

Admin.sync().then(() => {
    console.log('admins table created');
});
module.exports = Admin;