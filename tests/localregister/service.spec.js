(function() {
  'use strict';

  describe('RegistrationServicelocalOwner', function(){
    var RegistrationServicelocalOwner;
    var $firebaseAuth;
    var $firebaseArray;
    var env;
    var authProvider;

    beforeEach(module('musicHack.common'));
    beforeEach(module('musicHack.localregister'));

    beforeEach(module(function ($provide) {
      $provide.constant('env', {
        firebaseApiUrl: 'https://some_fake_url.firebaseio.com/'
      });
    }));

    beforeEach(module(function ($provide) {
      authProvider = { $createUser: function (userInfo) {} };
      $provide.value('$firebaseAuth', function (ref) {
        return authProvider
      });
    }));

    beforeEach(inject(function (_RegistrationServicelocalOwner_, _$firebaseAuth_, _env_, _$firebaseArray_) {
      RegistrationServicelocalOwner = _RegistrationServicelocalOwner_;
      $firebaseAuth = _$firebaseAuth_;
      env = _env_;
      $firebaseArray = _$firebaseArray_;
    }));

    it("Should be initialized", function () {
      expect(RegistrationServicelocalOwner).toBeDefined();
    });

    it("Should call firebase API when authenticating", function () {
      spyOn(authProvider, '$createUser');
      RegistrationServicelocalOwner.createUser(null);
      expect(authProvider.$createUser).toHaveBeenCalled();
    });

  });

})();
