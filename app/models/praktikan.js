var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

var praktikanSchema = new Schema({
    _id : String,
    _periode: String,
    nama : String,
    progli : {
        type: String,
        ref: 'Progli'
    },
    hp : String,
    _dudi: {
        type: String,
        ref: 'Dudi'
    },
    _guru: {
        type: String,
        ref: 'Guru'
    }
});

module.exports = mongoose.model("Praktikan", praktikanSchema, "praktikans");