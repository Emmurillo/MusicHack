(function() {
  'use strict';

  angular
    .module('musicHack.login')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['AuthService', '$state', '$ionicPopup', '$localStorage'];

  /* @ngInject */
  function LoginCtrl(AuthService, $state, $ionicPopup, $localStorage) {
    var vm = this;

    vm.user = {};

    vm.authenticate = authenticate;
    vm.authWithFacebook = authWithFacebook;

    function authenticate() {
      AuthService.authWithPassword(vm.user)
        .then(handleAuthSuccess)
        .catch(handleAuthError);
    }

    function authWithFacebook() {
      AuthService.authWithFacebook()
        .then(handleFacebookAuthSuccess)
        .catch(handleAuthError);
    }

    function handleFacebookAuthSuccess(authData) {
      $ionicPopup.alert({
        title: 'Bienvenido',
        template: 'Ha Iniciado sesion: ' + authData.facebook.displayName
      });
      vm.user = {};
      $state.go('side.home');
    }

    function handleAuthSuccess(authData) {
      saveAuthData(authData);
      $ionicPopup.alert({
        title: 'Bienvenido',
        template: 'Ha Iniciado sesion: ' + authData.password.email
      });
      vm.user = {};
      $state.go('side.home');
    }

    function saveAuthData(authData) {
      $localStorage['uid'] = authData.uid;
      $localStorage['provider'] = authData.provider;
      $localStorage['access_token'] = authData.token;
      $localStorage['email'] = authData.password.email;
      $localStorage['profileImageURL'] = authData.password.profileImageURL;
    }

    function handleAuthError(error) {
      $ionicPopup.alert({
        title: 'Authentication error',
        template: error
      });
    }
  }
})();
