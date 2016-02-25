(function() {
  'use strict';

  angular
  .module('musicHack.locals')
  .service('VenuePlayerService', VenuePlayerService);

  VenuePlayerService.$inject = ['$rootScope', 'env', '$firebaseArray'];

  /* @ngInject */
  function VenuePlayerService($rootScope, env, $firebaseArray) {
    this.fetchQueue = fetchQueue;
    this.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    var ref = new Firebase(env.firebaseApiUrl);
    var uid = $rootScope.authenticatedUser.uid;
    var upcomingSongs = [
      {id: 'LDZX4ooRsWs', title: 'Nicki Minaj - Anaconda'},
      {id: 'bESGLojNYSo', title: 'Lady Gaga - Poker Face'},
      {id: '312Sb-2PovA', title: 'SUICIDE SILENCE - You Only Live Once (OFFICIAL VIDEO)'},
      {id: 'k27N-jRofrM', title: 'SUICIDE SILENCE - Slaves To Substance (OFFICIAL VIDEO)'}
    ];
    var actualSong = 0;
    var player;

    function onYouTubeIframeAPIReady() {
      var actualVideoId = upcomingSongs[actualSong].id;
      player = new YT.Player('player', {
        videoId: actualVideoId,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.ENDED) {
        actualSong = actualSong + 1;
        launchNextSong(upcomingSongs[actualSong].id, upcomingSongs[actualSong].title);
      }
    }

    function launchNextSong(id, title) {
      player.loadVideoById(id);
      YT.videoId = id;
      YT.videoTitle = title;
    }

    function fetchQueue(localID) {
      var refToQueue = ref.child("user/" + uid + "/locals/" + localID + "/queue");
      var queue = $firebaseArray(refToQueue);
      return queue.$loaded();
    }
  }
})();
