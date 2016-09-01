(function () {
  'use strict';

  var sponsorsView = {
    controller: sponsorsCrl,
    templateUrl: "app/sponsors/sponsorsView.html",
  }

  angular
    .module('app')
    .component('sponsorsView', sponsorsView)
    .controller('sponsorsCrl', sponsorsCrl);

    function sponsorsCrl() {
      var sponsors = this;
      sponsors.estrella = 'logoGE.svg'
      sponsors.patrocinadoresGold = gold;
      sponsors.patrocinadoresSilver = silver;


    };

    var gold = [{
      name:'Sable',
      img:'logoSable.svg',
      vinculo:'http://sable.mx/'
    },{
      name:'Rappi',
      img:'logoRapi.png',
      vinculo:'https://www.rappi.com/'
    },
  ];

  var silver = [{
    name:'SG',
    img:'logoSG.svg',
    vinculo:'http://sg.com.mx/'
  },{
    name:'MLH',
    img:'logoMLH.svg',
    vinculo:'https://mlh.io/'
  },{
    name:'Tundra',
    img:'logoTundra.png',
    vinculo:'https://www.facebook.com/TundraMX/'
  },{
    name:'Inventive',
    img:'logoInv.svg',
    vinculo:'https://inventivehack.com'
  },

  ];
})();
