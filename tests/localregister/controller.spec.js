(function() {
  describe('LocalRegisterCtrl', function(){
    var $this;
    var RegistrationServicelocalOwner;
    var AuthService;
    var $state;
    var $ionicPopup;
    var $localStorage;
    var $controller;
    var $q;

    beforeEach(module('musicHack.common'));
    beforeEach(module('musicHack.localregister'));

    beforeEach(module(function ($provide) {
      $provide.service('RegistrationServicelocalOwner', function () {
        this.createUser = function (localOwner) {};
      });
    }));

    beforeEach(module(function ($provide) {
      $provide.service('AuthService', function () {
        this.authWithPassword = function (localOwner) {};
      });
    }));

    beforeEach(inject(function (_$controller_, _$q_, _RegistrationServicelocalOwner_, _AuthService_, _$state_, _$ionicPopup_, _$localStorage_, _$cordovaCamera_) {
      $q = _$q_;
      $controller = _$controller_;
      RegistrationServicelocalOwner = _RegistrationServicelocalOwner_;
      AuthService = _AuthService_;
      $state = _$state_;
      $ionicPopup = _$ionicPopup_;
      $localStorage = _$localStorage_;
    }));

    beforeEach(function () {
      $this = $controller('LocalRegisterCtrl', {
        RegistrationServicelocalOwner: RegistrationServicelocalOwner,
        AuthService: AuthService,
        $state: $state,
        $ionicPopup: $ionicPopup,
        $localStorage: $localStorage
      });
    });

    it("Should be initialized", function () {
      expect($this).toBeDefined();
      expect($this.localOwner.credentials).toEqual({});
      expect($this.localOwner.info).toEqual({});
    });

    it("Should call auth service when creating account", function () {
      var deferredSuccess = $q.defer();
      spyOn(RegistrationServicelocalOwner, 'createUser').and.returnValue(deferredSuccess.promise);
      $this.localOwner.credentials = { email: 'foo', password: '12345678' };
      $this.createOwnerAccount();
      expect(RegistrationServicelocalOwner.createUser).toHaveBeenCalled();
      expect(RegistrationServicelocalOwner.createUser).toHaveBeenCalledWith($this.localOwner.credentials);
      deferredSuccess.resolve();
    });

  });
})();
