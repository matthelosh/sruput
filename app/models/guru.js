var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var guruSchema = new Schema({
    _id: String,
    nama: String,
    hp: String,
    _dudi: {
        type: String,
        ref: 'Dudi'
    }
});

module.exports = mongoose.model("Guru", guruSchema, "gurus");