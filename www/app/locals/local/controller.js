(function() {
  'use strict';

  angular
  .module('musicHack.locals')
  .controller('VenuePlayerCtrl', VenuePlayerCtrl);

  VenuePlayerCtrl.$inject = ['$stateParams', 'VenuePlayerService'];

  /* @ngInject */
  function VenuePlayerCtrl($stateParams, VenuePlayerService) {
    var vm = this;
    vm.localID = $stateParams.localID;
    vm.queue = [];
    vm.playQueue = playQueue;

    function playQueue() {
      VenuePlayerService.onYouTubeIframeAPIReady(vm.localID);
    }

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
