(function() {
  'use strict';

  var eventoView = {
    controller: eventoCrl,
    templateUrl: '/app/evento/eventoView.html'
  };

  angular
  .module('app')
  .component('eventoView', eventoView)
  .controller('eventoCrl', eventoCrl);

  function eventoCrl () {

  }
})();
