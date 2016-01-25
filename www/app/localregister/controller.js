(function() {
  'use strict';

  angular
    .module('musicHack.localregister')
    .controller('localRegisterCtrl', localRegisterCtrl);

  localRegisterCtrl.$inject = ['$cordovaCamera'];

  /* @ngInject */
  function localRegisterCtrl($cordovaCamera) {
    var vm = this;

    vm.openCamera = openCamera;

      var options = {
        quality: 50,
        // destinationType: Camera.DestinationType.DATA_URL,
        // sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: 0,
        targetWidth: 100,
        targetHeight: 100,
        // popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };
      function openCamera(){
        $cordovaCamera
        .getPicture(options)
        .then(takePicture)
        .catch(pictureErr)
      }
      function takePicture(imageData) {
        var image = getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;

      }
      function pictureErr(){

      }

  }
})();
