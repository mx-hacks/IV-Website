(function() {
  'use strict'

  var indexView = {
    controller: indexCrl,
    templateUrl: '/app/indexView/indexView.html'
  }

  angular
    .module('app')
    .component('indexView', indexView)
    .controller('indexCrl', indexCrl)

    function indexCrl() {

    }
})();
