function game(req,res){
    res.status(200)
    res.render('game');
}

module.exports = {
    game
}