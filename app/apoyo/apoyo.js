(function() {
  'use strict';

  var apoyoView = {
    controller: 'apoyoCrl',
    templateUrl: '/app/apoyo/apoyoView.html'
  };

  angular
    .module('app')
    .component('apoyoView', apoyoView)
    .controller('apoyoCrl', apoyoCrl);

    function apoyoCrl () {

    };
})();
