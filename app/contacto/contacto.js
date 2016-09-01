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

///===========================================================   MAIL VALIDATION

function validateEmail(sEmail) {
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (filter.test(sEmail)) {
    return true;  
  }
  else {
    return false;
    
  }
}



///=========================================================== 


              var name;
             var maily;
             var company;
             var msg;

              $("body").on('click', '.inputButton', function(event) {
                        

                        name=$(".name_f").val();
                        console.log(name);
                        maily=$(".maily").val();
                        console.log(maily);
                        company=$(".company_f").val();
                        console.log(company);

                        msg=$(".msg_f").val();
                        console.log(msg);


                        if (name=="") {
                          $(".ms span").html("");
                          $(".ms span").append('Revisa tu nombre');
                          $(".ms ").jAnimate("fadeInDown");
                        }else if (maily=="") {

                          $(".ms span").html("");
                          $(".ms span").append('Te falta el mail');
                          $(".ms ").jAnimate("fadeInDown");             
                        }else  if (validateEmail(maily) == false){
        
                          $(".ms span").html("");
                          $(".ms span").append('El mail es incorrecto');
                          $(".ms ").jAnimate("fadeInDown"); 
      
                        }else if (company=="") {
                          $(".ms span").html("");
                          $(".ms span").append('Te falta la empresa');
                          $(".ms ").jAnimate("fadeInDown"); 
                        }else if (msg=="") {
                          $(".ms span").html("");
                          $(".ms span").append('Te falta tu mensaje');
                          $(".ms ").jAnimate("fadeInDown"); 
                        }else{


                            $.ajax({
                                url: 'https://api.mxhacks.mx/contact/sponsors/',
                                type: 'POST',
                                data: { 
                                  first_name: name,
                                  last_name: "web page",
                                  email:maily,
                                  company:company,
                                  message:msg
                                } ,
                                success: function (res) {
                                    console.log(res);
                                    $(".ms span").html("");
                                   $(".ms span").append('Tu mensaje se ha enviado');
                                  $(".ms ").jAnimate("fadeInDown"); 

                                  $(".name_f").attr('disabled', 'disabled');
                                  $(".maily").attr('disabled', 'disabled');
                                  $(".company_f").attr('disabled', 'disabled');
                                  $(".msg_f").attr('disabled', 'disabled');
                                  $(".inputButton").attr('disabled', 'disabled');
                                    
                                },
                                error: function (res) {
                                    console.log(res);
                                    
                                    
                                }
                            }); 


                        }


             });

  };


            
             

            



})();
