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
      img:'logoSable.svg'
    },{
      name:'Rappi',
      img:'logoRapi.png'
    },
  ];

  var silver = [{
    name:'SG',
    img:'logoSG.svg'
  },{
    name:'MLH',
    img:'logoMLH.svg'
  },{
    name:'Tundra',
    img:'logoTundra.png'
  },{
    name:'Inventivs',
    img:'logoInv.svg'
  },

  ];
})();
