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

  function eventoCrl (NgMap, $scope) {
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOBPmXtQ-4P62Duhm-algydKc2TonIHG0";
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

  }


})();
