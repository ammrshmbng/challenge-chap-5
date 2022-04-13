// ubah index.html menjadi index.ejs lalu pindahkan ke view
// membuat alamat untuk menampilkan alamatnya
// untuk assetnya sajikan secara static menggunakan express statis

const express = require('express');
const app = express();

const port  = 8000;

app.set('view engine','ejs');

// middleware
app.use('/assets',express.static('assets'))


//routing
app.get('/game',function(req,res){
    res.render('game');
});

app.get('/',function(req,res){
    res.render('index');
});


app.listen(port,()=>{console.log('server is running')})