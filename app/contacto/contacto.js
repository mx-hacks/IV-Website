(function() {
  'use strict';

  var contactoView = {
    controller:contactoCrl,
    templateUrl:'/app/contacto/contactoView.html'
  }

  angular
  .module('app')
  .component('contactoView', contactoView)
  .controller('contactoCrl', contactoCrl);

  function contactoCrl() {

  };
})();
