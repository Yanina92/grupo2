const fs = require('fs');
const path = require('path');
const usersFile = path.join(__dirname, '../data/users.json');
const User = {
  findById: (id) => {
      let users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));      
  let userFind = users.find(user => user.id == id)
      return userFind;
  },
  findByField: (field,text) => {
      let users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));      
  let userField = users.find(user => user[field] == text)
      return userField;
  },

}
  
module.exports = User;