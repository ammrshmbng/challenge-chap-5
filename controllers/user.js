const user = require('../db/users.json');

function userStatic(req,res){
    res.status(200)
    res.json(user);
}

module.exports= {
    userStatic
}