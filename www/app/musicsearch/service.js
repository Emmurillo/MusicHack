(function() {
  'use strict';

  angular
    .module('musicHack.musicsearch')
    .service('SearchService', SearchService);

  SearchService.$inject = ['$http', 'env', '$stateParams', '$firebaseArray'];

  /* @ngInject */
  function SearchService($http, env, $stateParams, $firebaseArray) {
    this.searchYoutubeAPI = searchYoutubeAPI;
    this.pushVideoIDToVenue = pushVideoIDToVenue;

    var ref = new Firebase(env.firebaseApiUrl);
    var videoIDPath = ref.child($stateParams.venuePath + '/queue');
    var songs = $firebaseArray(videoIDPath);

    function searchYoutubeAPI(query) {
      var params = {
        key: env.youtubeAPIKey,
        type: 'video',
        videoCategoryId : '10',
        maxResults: '10',
        part: 'id,snippet',
        fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
        q: query
      };
      return $http.get(env.youtubeAPIURL, { params: params });
    }

    function pushVideoIDToVenue(youTubeVideoInfo) {
      return songs.$add(youTubeVideoInfo);
    }
  }
})();
