(function() {
  'use strict';

  angular
    .module('musicHack.musicsearch', [
      'musicHack.common',
    ])
    .run(setupYoutube)
    .config(setupHeaders);

  function setupYoutube() {
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  setupHeaders.$inject = ['$httpProvider'];

  function setupHeaders($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
})();
