(function() {
  'use strict';

  angular
    .module('musicHack.qrscanner')
    .controller('qrScannerCtrl', qrscannerCtrl);

  qrscannerCtrl.$inject = ['$cordovaBarcodeScanner', '$ionicPopup', '$state'];

  /* @ngInject */
  function qrscannerCtrl($cordovaBarcodeScanner, $ionicPopup, $state) {
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
        $state.go('place')
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
