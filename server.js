var port = process.env.PORT = 3000;
var host = process.env.HOST = 'localhost';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var database = require('./config/database'),
    _server = require('./config/express');

//Inicializa a conexão com o banco
database.initialize((err) => { 
    
    if (err)
        throw err;
        
    console.log('Initializing application...');
    
    var server = _server();

    server.listen(port, () => {
        console.log("Server running at http://" + host + ":" + port);
    });    
        
});