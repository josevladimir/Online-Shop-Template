const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Routes = require('./routes/routes');

App.use(bodyParser.urlencoded({extended: true}));

App.use(express.static('./public'));

App.set('view engine','pug');

App.use('/',Routes);

App.listen(3001,function(){
    console.log('Corriendo en el puerto: 3001');
});