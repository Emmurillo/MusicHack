(function() {
  'use strict';

  angular
    .module('musicHack.login')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['AuthService', '$state', '$ionicPopup', '$ionicLoading', '$localStorage'];

  /* @ngInject */
  function LoginCtrl(AuthService, $state, $ionicPopup, $ionicLoading, $localStorage) {
    var vm = this;

    vm.user = {};

    vm.authenticate = authenticate;
    vm.authWithFacebook = authWithFacebook;

    function authenticate() {
      displayWaitModal();
      AuthService.authWithPassword(vm.user)
        .then(handleAuthSuccess)
        .catch(handleAuthError);
    }

    function authWithFacebook() {
      displayWaitModal();
      AuthService.authWithFacebook()
        .then(handleFacebookAuthSuccess)
        .catch(handleAuthError);
    }

    function displayWaitModal() {
      $ionicLoading.show({
        template: 'Ingresando...'
      });
    }

    function handleFacebookAuthSuccess(authData) {
      $ionicPopup.alert({
        title: 'Bienvenido',
        template: 'Ha iniciado sesión como ' + authData.facebook.displayName
      });
      vm.user = {};
      $ionicLoading.hide();
      $state.go('menu.qrscanner');
    }

    function handleAuthSuccess(authData) {
      saveAuthData(authData);
      $ionicPopup.alert({
        title: 'Bienvenido',
        template: 'Ha iniciado sesión como ' + authData.password.email
      });
      vm.user = {};
      $ionicLoading.hide();
      $state.go('menu.qrscanner');
    }

    function saveAuthData(authData) {
      $localStorage['uid'] = authData.uid;
      $localStorage['provider'] = authData.provider;
      $localStorage['access_token'] = authData.token;
      $localStorage['email'] = authData.password.email;
      $localStorage['profileImageURL'] = authData.password.profileImageURL;
    }

    function handleAuthError(error) {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Error de Autentificación',
        template: error
      });
    }
  }
})();
