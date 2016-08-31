(function () {
  'use strict';

  var sideBar = {
    controller: sidebarCrl,
    templateUrl:"app/sideBar/sideBar.html"
  }

  angular
    .module('app')
    .component("sideBar", sideBar)
    .controller('sidebarCrl', sidebarCrl);

    function sidebarCrl(){
        var navBar = this;
        navBar.sections = icons;
        navBar.hide = false;



  };


  var flag = 0;
  $('body').on('click','#sidebarMenu', function(){
    console.log('click')
    if (flag == 0){
      $('.nav').removeClass('black');
      flag = 1;
    }else {
      $('.nav').addClass('black');
      flag = 0;
    }

  });



  $("body").on('mouseenter', '.m_btn', function(event) {
   
    console.log(this);

    $(this).append("<div class='tag'>"+ $(this).attr("tag") +" </div>");
 
    

  });


  $("body").on('mouseleave', '.m_btn', function(event) {
    event.preventDefault();
    

    $(".tag").remove();
    

  });




   $('body').on('click','.menu_bars', function(e){
        e.preventDefault();
        console.log("ohola")
        $("#wrapper").toggleClass("toggled");
        $(".stay_menu").jAnimate("");
    });


    var icons = [{
      img:'home',
      imgHover:'homecolor',
      route:'acercade',
      rosa: false
    },{
      img:'sponsor_g',
      imgHover:'sponsor_r',
      route:'sponsors'
    },{
      img:'agenda',
      imgHover:'agendacolor',
      route:'agenda'
    },{
      img:'faqs',
      imgHover:'faqscolor',
      route:'faq'
    },{
      img:'becas',
      imgHover:'becascolor',
      route:'beca'
    },{
      img:'apoyo',
      imgHover:'apoyocolor',
      route:'apoyo'
    },{
      img:'evento',
      imgHover:'eventocolor',
      route:'evento'
    },{
    //   img:'equipo',
    //   imgHover:'equipocolor',
    //   route:'equipo'
    // },{
      img:'contacto_g',
      imgHover:'contacto_r',
      route:'contacto'
    }
  ];

})();

