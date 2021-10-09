
const fs = require('fs');
const path = require('path');
const usersFile = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));

const controller = {
    index:function(req, res) {
        res.render('./user/user-table');
    }
}

module.exports = controller;