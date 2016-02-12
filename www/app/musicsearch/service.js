(function() {
  'use strict';

  angular
    .module('musicHack.musicsearch')
    .service('SearchService', SearchService);

  SearchService.$inject = ['$http', 'env'];

  /* @ngInject */
  function SearchService($http, env) {
    this.searchYoutubeAPI = searchYoutubeAPI;

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
  }
})();
