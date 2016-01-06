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
        title: 'Welcome',
        template: 'Logged In as ' + authData.facebook.displayName
      });
      vm.user = {};
      $ionicLoading.hide();
      $state.go('side.home');
    }

    function handleAuthSuccess(authData) {
      saveAuthData(authData);
      $ionicPopup.alert({
        title: 'Welcome',
        template: 'Has ingresado como ' + authData.password.email
      });
      vm.user = {};
      $ionicLoading.hide();
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
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Authentication error',
        template: error
      });
    }
  }
})();
