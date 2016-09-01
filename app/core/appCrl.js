(function() {
  'use strict';

  angular
  .module('app')
  .controller('appCrl', appCrl);

  function appCrl ($scope, $location, $anchorScroll){
    $scope.scrollTo = function(scrollId) {
      $location.hash(scrollId);
      $anchorScroll();
    }
  };

})();
