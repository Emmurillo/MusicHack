(function() {
  'use strict';

  angular
    .module('musicHack.musicsearch')
    .controller('MusicSearchCtrl', MusicSearchCtrl);

  MusicSearchCtrl.$inject = ['SearchService', '$ionicPopup'];

  /* @ngInject */
  function MusicSearchCtrl(SearchService, $ionicPopup) {
    var vm = this;
    vm.videos = {};
    vm.search = search;

    function search() {
      SearchService.searchYoutubeAPI(vm.searchQuery)
        .then(setVideos)
        .catch(handleSearchFailure);
    }

    function setVideos(result) {
      vm.videos = result.data.items;
    }

    function handleSearchFailure(error) {
      $ionicPopup.alert({
        title: 'Ha ocurrido un error',
        template: error.data.error.message
      });
    }
  }
})();
