(function() {
  'use strict';

  angular
    .module('musicHack.locals')
    .controller('LocalsCtrl', LocalsCtrl);

  LocalsCtrl.$inject = ['FetchLocalsService', '$ionicPopup'];

  /* @ngInject */
  function LocalsCtrl(FetchLocalsService, $ionicPopup) {
    var vm = this;
    vm.locals = [];

    activate();

    function activate() {
      FetchLocalsService.fetchLocals()
        .then(handleLocalsFetch)
        .catch(handleFetchError);
    }

    function handleLocalsFetch(data) {
      vm.locals = data;
    }

    function handleFetchError() {
      $ionicPopup.alert({
        title: 'Error',
        template: 'Ha ocurrido un error al obtener tus locales'
      });
    }

  }
})();
