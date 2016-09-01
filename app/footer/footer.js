(function() {
  'use strict';

  var footerView = {
    controller:footerCrl,
    templateUrl:'/app/footer/footer.html'
  };

  angular
    .module('app')
    .component('footerView', footerView)
    .controller('footerCrl', footerCrl);

    function footerCrl () {

    };
})();
