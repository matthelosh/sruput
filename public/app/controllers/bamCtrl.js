angular.module('bamCtrl', [])
        .controller('bamCtrl', function($http, $scope) {
            $scope.cekGuru = !$scope.cekGuru;
            $scope.cariGuru = function(guru) {
                $http.get('/api/getGuru/'+guru)
                    .then(function(respon){
                        // console.log(respon);
                        if(respon.data == "" || respon.data == undefined ){
                            console.log('Zoonk');
                            $scope.namaGuru = "Data Nama tidak ada";
                            $scope.cekGuru= true;
                        } else {
                            $scope.cekGuru = !$scope.cekGuru;
                            $scope.namaGuru = respon.data[0].nama;
                            // console.log(respon.data[0].nama);
                        }
                       
                    });
            };
            $scope.cariDudi = function(dudi){
                $scope.total ="0";
                var date = new Date();
                $http.get('/api/bam/'+dudi)
                    .then(function(resData) {
                        // console.log(resData);
                        if (resData.data == "Dudi tidak ada") {
                            $scope.namaDudi = "Dudi tidak ditemukan";
                            $scope.bam = {};
                            $scope.total = '0';
                            $scope.tanggal = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
                        } else if(!resData.data.respon) {
                            $scope.bam ={};
                            $scope.tanggal = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
                        }else {
                        console.log(resData.data.respon[0].progli);
                            var progli = resData.data.respon[0].progli;
                            $scope.total = resData.data.respon.length;
                            $scope.bam = resData.data.respon;
                            // if(progli == "mm") {
                            //     $scope.progli == "Multimedia";
                            // } else if(progli=="tkj") {
                            //     $scope.progli == "Teknik Komputer dan Jaringan";
                            // }
                            $scope.progli = progli;
                            $scope.namaDudi = resData.data.dudi;
                            $scope.tanggal = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
                        }
                    });
            }
        });