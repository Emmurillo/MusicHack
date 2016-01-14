(function() {
  'use strict';

  angular
    .module('musicHack.qrscanner')
    .controller('qrScannerCtrl', qrscannerCtrl);

  qrscannerCtrl.$inject = ['$cordovaBarcodeScanner', '$ionicPopup'];

  /* @ngInject */
  function qrscannerCtrl($cordovaBarcodeScanner, $ionicPopup) {
    var vm = this;

    vm.scan = scan;

    function scan () {
      $cordovaBarcodeScanner
        .scan()
        .then(handleScanSuccess)
        .catch(handleScanError);
      }

    function handleScanSuccess (barcodeData) {
      if (!barcodeData.cancelled) {
        $ionicPopup.alert({
          title: '¡Muy bien!',
          template: 'Leiste un código QR ' + barcodeData.text
        });
      }
    }

    function handleScanError (error) {
    	$ionicPopup.alert({
        title: '¡Hubo un problema!',
        template: 'Hubo un error al leer el código QR'
      });
    }

  }

})();
