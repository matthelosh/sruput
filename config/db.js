var mongoose    = require('mongoose'),
    secrets     = require('./secrets');

var db = mongoose.connection ;
mongoose.Promise = global.Promise;
mongoose.connect(secrets.db);

module.exports = {
    dbconnect: function() {
        db.on('error', console.error.bind(console, 'Koneksi ke database bermasalah'));
        db.once('open', function callback() {
            console.log('Database terbuka.');
        });
    }
};