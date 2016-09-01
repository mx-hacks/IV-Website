(function() {
  'use strict'

  angular
    .module('app')
    .config(routes)

    function routes($routeProvider) {
      $routeProvider
        .when('/',{
          templateUrl:'/app/indexView/indexView.html'
        })
        .when('/equipo',{
          template:'<equipo-nosotros></equipo-nosotros>'
        })
        .otherwise({
          template:'<error-page></error-page>'
        })
    }
})();
