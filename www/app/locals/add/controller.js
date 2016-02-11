(function() {
  'use strict';

  angular
  .module('musicHack.locals')
  .controller('AddLocalCtrl', AddLocalCtrl);

  AddLocalCtrl.$inject = ['AddLocalService', '$ionicPopup', '$state'];

  /* @ngInject */
  function AddLocalCtrl(AddLocalService, $ionicPopup, $state) {
    var vm = this;
    vm.localOwner = {};

    vm.registerLocal = registerLocal;

    function registerLocal() {
      vm.localOwner.info.available = false;
      AddLocalService.createNewUserLocal(vm.localOwner.info)
        .then(handleLocalSaved)
        .catch(handleSavingLocalError);
    }

    function handleLocalSaved() {
      $ionicPopup.alert({
        title: '¡Muy bien!',
        template: 'Guardaste el local ' + vm.localOwner.info.name
      });
      vm.localOwner = {};
      $state.go('menu.locals');
    }

    function handleSavingLocalError() {
      $ionicPopup.alert({
        title: 'Error',
        template: 'Ha ocurrido un error al intentar guardar el local'
      });
    }
  }
})();
