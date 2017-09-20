var express  = require('express'),
    app     = express(),
    port    = process.env.PORT || 5000,
    bodyParser  = require('body-parser'),
    router      = express.Router(),
    mongoose    = require('mongoose'),
    morgan      = require('morgan'),
    api         = require('./app/routes/api')(router),
    path        = require('path'),
    db          = require('./config/db');


// Menyambung ke Database
db.dbconnect();

// Logging pada proses pengembangan dengan morgan
app.use(morgan('dev'));

// Middleware body-parser untuk mengambil data dari form
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menggunakan directory public untuk dapat diakses secara statis
app.use(express.static(__dirname + '/public'));

app.use('/api', api);

app.get('*', function(req, res, next) {
    res.sendFile(path.resolve(__dirname + '/public/app/views/index.html'));
});

// Menjalankan Server pada port 8000
app.listen(port, function() {
    console.log('Kami siap melayani Anda pada jalur port ' + port);
});