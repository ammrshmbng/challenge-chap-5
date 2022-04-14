function index(req,res){
    res.status(200)
    res.render('index');
}

module.exports = {
    index,
    
}