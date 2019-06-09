function index(req,res){
    res.render('index',{title: 'Inicio - '});
}

module.exports = {
    index
}