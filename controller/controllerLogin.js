const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const usersFile = path.join(__dirname, '../data/users.json');


const controller = {
    index:function(req, res) {
        res.render('./user/login');
    },
    login: (req, res) => {
        
        let users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
        let user = users.filter(user => user.email == req.body.email);
        if (user){
            let passwordCompare = bcryptjs.compareSync(req.body.password, user.password)
            if(passwordCompare){
                delete user.password;
                req.session.userLogged = user
               return  res.send('Todo correcto , podes ingresar')
            }
            return res.render('./user/login', { errors:{ 
                email:{
                    msg:'Los datos ingresados son incorrectos'
                }
            }})
        }
        return res.render('./user/login', { errors:{ 
            email:{
                msg:'No se encontro al Usuario'
            }
        }})

    },
    logout: (req,res)=>{
        req.session.destroy();
        return redirect('/');
    }
}

module.exports = controller;