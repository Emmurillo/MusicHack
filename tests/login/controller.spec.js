describe('LoginCtrl', function(){
    var scope;

    beforeEach(module('musicHack.login'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('LoginCtrl', {$scope: scope});
    }));

    it('Sample test', function(){
        expect(true).toBeTruthy();
    });
});
