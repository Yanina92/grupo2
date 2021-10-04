const path = require('path');
const controller = {
    login:function(req, res) {
        res.sendFile(path.join(__dirname, '../views/user/login.html'));
    },

    register:function(req, res) {
        res.sendFile(path.join(__dirname, '../views/user/register.html'));
    }
}

module.exports = controller;