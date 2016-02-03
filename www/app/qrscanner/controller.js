(function() {
  'use strict';

  angular
    .module('musicHack.qrscanner')
    .controller('qrScannerCtrl', qrscannerCtrl);

  qrscannerCtrl.$inject = ['QRCodeService', '$cordovaBarcodeScanner', '$ionicPopup'];

  /* @ngInject */
  function qrscannerCtrl(QRCodeService, $cordovaBarcodeScanner, $ionicPopup) {
    var vm = this;

    vm.scan = scan;
    vm.handleIDInputSuccess = handleIDInputSuccess;

    function scan () {
      $cordovaBarcodeScanner
        .scan()
        .then(handleScanSuccess)
        .catch(handleScanError);
      }

    function handleScanSuccess (qrcodeData) {
      var qrcodeDataID = qrcodeData.text;
      if (!qrcodeData.cancelled) {
        retrieveDataFromLocalID(qrcodeDataID);
      }
    }

    function handleIDInputSuccess (localID) {
      retrieveDataFromLocalID(localID);
    }

    function retrieveDataFromLocalID (fetchedID) {
      QRCodeService.fetchLocalFromID(fetchedID)
        .then(
          function (fetchedData) {
            handleFetchDataSuccess (fetchedData);
          }
        );
    }

    function handleFetchDataSuccess (fetchedData) {
      $ionicPopup.alert({
        title: '¡Muy Bien!',
        template: 'Has leído el código de ' + fetchedData.localname
      });
    }

    function handleScanError (error) {
      $ionicPopup.alert({
        title: '¡Hubo un problema!',
        template: 'Hubo un error al leer el código QR'
      });
    }

  }

})();
