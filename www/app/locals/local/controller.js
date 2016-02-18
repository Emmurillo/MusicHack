(function() {
  'use strict';

  angular
  .module('musicHack.locals')
  .controller('VenuePlayerCtrl', VenuePlayerCtrl);

  VenuePlayerCtrl.$inject = ['$stateParams', 'VenuePlayerService', '$window'];

  /* @ngInject */
  function VenuePlayerCtrl($stateParams, VenuePlayerService, $window) {
    var vm = this;
    vm.localID = $stateParams.localID;
    vm.queue = [];

    activate();

    function activate() {
      VenuePlayerService.fetchQueue(vm.localID)
        .then(handleFetchSuccess)
        .catch(handleFetchError);
    }

    function handleFetchSuccess(result) {
      vm.queue = result;
    }

    function handleFetchError(error) {
      $ionicPopup.alert({
        title: 'Ha ocurrido un error',
        template: error
      });
    }
  }
})();
