var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;
    
var dudiSchema = new Schema({
    _id     : String,
    namaDudi  : String,
    alamat  : String,
    _guru : {
        type: String,
        ref: 'Guru'
    },
    kontak  : String
});

module.exports = mongoose.model("Dudi", dudiSchema, "dudis");