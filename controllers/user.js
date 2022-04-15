const user = require('../db/users.json');

function userStatic(req,res){
    res.status(200)
    res.json(user);
}

function login(req,res){
    const email = req.body.email;
    const password = req.body.password;

    // cek vaidasi
    const emailData =  user[1].email;
    const passwordData = user[1].password;
    
    if(email == emailData && password == passwordData ){
        res.json({message: "login berhasil"});
    }else{
        res.json({message: "mungkin salah username atau pasword"});
    }

}

module.exports= {
    userStatic,
    login,
}