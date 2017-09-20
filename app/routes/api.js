var Praktikan   = require('../models/praktikan'),
    Progli      = require('../models/progli'),
    Guru        = require('../models/guru'),
    Dudi        = require('../models/dudi'),
    async       = require('async');

module.exports = function(router) {
    
    
    
    // Route to get Data
    router.get('/gurus', function(req, res) {
        Guru.find({}, function(err, gurus) {
            if (err) res.json(err);
            res.json(gurus);
        }); 
    });

    router.get('/praktikans', (req, res, next) => {
        Praktikan.find({}, (err, data) => {
            if (err) {
                res.json( {success: false, msg: err });
            } else {
                res.json({ success: true, data: data });
            }
        });
    });

    router.post('/praktikan', function(req, res) {
        var siswa = new Praktikan();
        siswa._id = req.body._id,
        siswa.nama = req.body.nama,
        siswa.kelas = req.body.kelas,
        siswa.hp = req.body.hp,
        siswa._dudi = req.body._dudi,
        siswa._guru = req.body._guru;

        siswa.save(function(err) {
            if (err) res.json(err);
            res.json({ success: true, msg: "Sukses menyimpan data Praktikkan"});
        });
    });

    router.get('/bam', function(req, res) {
        Praktikan.find({}).populate('progli _dudi _guru' )
                 .exec(function(err, praktikans) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(praktikans);
                    }
                });
        // res.json({ success: true, msg: 'Test Bam request'});
   

    });

    router.get('/getGuru/:g', function(req, res) {
        var g = req.params.g,
            regx = new RegExp(g, "i"),
            dQry = { nama: regx };
            // console.log(dQry);
        
            Guru.find(dQry).exec(function(err, guru) {
                if(err){
                    res.json(err);
                }else {
                    if( guru < 1 ){
                        res.json()
                    } else {
                        res.json(guru);
                    }
                    
                }
            });
    });

    router.get('/dudiku', function(req, res) {
        Dudi.find({}).populate('_guru')
            .exec(function(err, dudis) {
                res.json(dudis);
            });
    });

    router.get('/bam/:q', function(req, res) {

        // query dudi
        var q = req.params.q,
            regex = new RegExp(q, "i"),
            qry = { namaDudi: regex };
        // console.log(qry);
        Dudi.find(qry, function(err, dudi){
            if( dudi < 1 ) {
                res.send("Dudi tidak ada");
            } else {
                // console.log(dudi[0].namaDudi);
                var dudi = dudi[0]._id;
                var namaDudi = dudi[0].namaDudi;
                Praktikan.find({_dudi:dudi}).populate('_dudi')
                        .exec(function(err, data) {
                            if(data < 1 ){
                                res.json({ respon: "Dudi tidak ditemukan"});
                            } else {
                                res.json({dudi: data[0]._dudi.namaDudi, respon: data });
                            }
                            
                        });
            }
        });
        
        
        // Praktikan.find(qry).populate('progli _dudi _guru' )
        //          .exec(function(err, bam) {
        //              if (err) { 
        //                  res.json({ success: false, msg: err })
        //              } else {
        //                  res.json(bam);
        //              }
        //          });
    });

    return router;
}