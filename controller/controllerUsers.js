const fs = require('fs');
const path = require('path');
const usersFile = path.join(__dirname, '../data/users.json');
// const userFileConsoleTest = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
// console.log('Lee en el inicio: ', userFileConsoleTest);

const controller = {
    index:function(req, res) {
        let users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
        res.render('./user/user-table', {users: users});
    },

    delete:function(req, res) {
        let id = req.params.id;
        let users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
		let finalUsers = users.filter(user => user.id != id);
		fs.writeFileSync(usersFile, JSON.stringify(finalUsers, null, ' '));
        res.redirect('/users');
    },

    edit:function(req, res) {
        let userId = req.params.id;
        let users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
		let editUser = users.filter(user => user.id == userId);
        console.log(editUser[0].firstName);
        res.render('./user/user-edit', {'user':editUser[0]});
    },

    put:function(req, res) {
        let id = req.params.id;
        let users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
		let userToEdit = users.find(user => user.id == id)

		userToEdit = {
			id: userToEdit.id,
			...req.body,
			//image: userToEdit.image,
		};
        console.log(req.body);
		console.log(userToEdit);
		let newUsers = users.map(user => {
			if (user.id == userToEdit.id) {
				return user = {...userToEdit};
			}
			return user;
		})

        console.log(newUsers);

		fs.writeFileSync(usersFile, JSON.stringify(newUsers, null, ' '));

        res.redirect('/users');
    },

    create:function(req, res) {
        console.log("ENTRE")
        let users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
        let newUser = {
			id: users[users.length - 1].id + 1,
			...req.body,
		};
		users.push(newUser)
		fs.writeFileSync(usersFile, JSON.stringify(users, null, ' '));
		res.redirect('/');
    }
}

module.exports = controller;