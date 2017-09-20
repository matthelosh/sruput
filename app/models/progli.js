var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var progliSchema = new Schema({
    _id: String,
    namaDudi: String
});

module.exports = mongoose.model('Progli', progliSchema, 'proglis');