(function() {
  'use strict';

  angular
    .module('musicHack.register')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['RegistrationService', 'AuthService', '$state', '$ionicPopup', '$localStorage'];

  /* @ngInject */
  function RegisterCtrl(RegistrationService, AuthService, $state, $ionicPopup, $localStorage) {
    var vm = this;
    vm.user = {};

    vm.createAccount = createAccount;

    function createAccount() {
      RegistrationService.createUser(vm.user)
        .then(handleCreationSuccess)
        .catch(handleCreationError);
    }

    function handleCreationSuccess(userData) {
      AuthService.authWithPassword(vm.user)
        .then(handleAuthSuccess);
    }

    function handleAuthSuccess(authData) {
      saveAuthData(authData);
      $ionicPopup.alert({
        title: 'Welcome',
        template: 'You can now log in as ' + authData.password.email
      });
      vm.user = {};
      vm.passwordConfirm = null;
      $state.go('side.home');
    }

    function saveAuthData(authData) {
      $localStorage['uid'] = authData.uid;
      $localStorage['provider'] = authData.provider;
      $localStorage['access_token'] = authData.token;
      $localStorage['email'] = authData.password.email;
      $localStorage['profileImageURL'] = authData.password.profileImageURL;
    }

    function handleCreationError(error) {
      $ionicPopup.alert({
        title: 'Error',
        template: error
      });
    }
  }
})();
