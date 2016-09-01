(function() {
  'use strict'

  var errorPage = {
    controller: errorCrl,
    templateUrl: '/app/404/404.html'
  }

  angular
    .module('app')
    .component('errorPage', errorPage)
    .controller('errorCrl', errorCrl)

    function errorCrl() {

    }
})();
