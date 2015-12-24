describe('LoginCtrl', function(){
  var $this;
  var AuthService;
  var $state;
  var $ionicPopup;
  var $localStorage;
  var $controller;
  var $q;

  beforeEach(module('musicHack.login'));
  beforeEach(module('ui.router'));
  beforeEach(module('ionic'));
  beforeEach(module('ngStorage'));

  beforeEach(module(function ($provide) {
    $provide.service('AuthService', function () {
      this.authWithPassword = function (user) {};
    });
  }));

  beforeEach(inject(function (_$controller_, _$q_, _AuthService_, _$state_, _$ionicPopup_, _$localStorage_) {
    $q = _$q_;
    $controller = _$controller_;
    AuthService = _AuthService_;
    $state = _$state_;
    $ionicPopup = _$ionicPopup_;
    $localStorage = _$localStorage_;
  }));

  beforeEach(function () {
    $this = $controller('LoginCtrl', {
      AuthService: AuthService,
      $state: $state,
      $ionicPopup: $ionicPopup,
      $localStorage: $localStorage
    });
  });

  it("Should be initialized", function () {
    expect($this).toBeDefined();
    expect($this.user).toEqual({});
  });

  it("Should call auth service when logging in", function () {
    var deferredSuccess = $q.defer();
    spyOn(AuthService, 'authWithPassword').and.returnValue(deferredSuccess.promise);
    $this.user = { email: 'foo', password: '12345678' };
    $this.authenticate();
    expect(AuthService.authWithPassword).toHaveBeenCalled();
    expect(AuthService.authWithPassword).toHaveBeenCalledWith($this.user);
    deferredSuccess.resolve();
  });

});
