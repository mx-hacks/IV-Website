(function() {
  'use strict';

  var becaView = {
    controller:becaCrl,
    templateUrl:'/app/beca/becaView.html'
  };

  angular
    .module('app')
    .component('becaView', becaView)
    .controller('becaCrl', becaCrl);

    function becaCrl () {

    };
})();
