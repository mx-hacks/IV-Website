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


             console.log("hola");
              $.ajax({
                  url: 'https://api.mxhacks.mx/applications/'+mail+'/personal/',
                  type: 'PUT',
                  data: { 
                    first_name: name,
                    last_name: lastn,
                    age:edad,
                    male:male,
                    female:female,
                    phone_number:telefono,
                  } ,
                  success: function (res) {
                      console.log(res);
                      console.log("f1");
                      f1=true;
                  },
                  error: function (res) {
                      console.log(res);
                      
                      
                  }
              }); 


  
})();
