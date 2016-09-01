(function() {
  'use strict';

  var agendaView = {
      controller: agendaCrl,
      templateUrl: '/app/agenda/agendaView.html'
  }

  angular
    .module('app')
    .component('agendaView', agendaView)
    .controller('agendaCrl', agendaCrl);

    function agendaCrl() {
      var agenda = this;
      agenda.horarios = plan;
    };

    var plan = [{
      titulo:'Sábado 5 de noviembre',
      dias:[{
        hora:'8:00 - 9:00',
        actividad:'Sale el autobus del metro'
      },{
        hora:'9:00 - 10:00',
        actividad:'Registro en las instalaciones'
      },{
        hora:'10:00 - 11:00',
        actividad:'coffebreak / equipos',
      },{
        hora:'11:00 - 12:00',
        actividad:'inauguración'
      },{
        hora:'12:00 - 15:00',
        actividad:'hacking',
      },{
        hora:'15:00 - 17:00',
        actividad:'comida',
      },{
        hora:'17:00-21:00',
        actividad:'hacking'
      }]
    },{
      titulo:'Domingo 6 de noviembre',
      dias:[{
        hora:'9:30 - 10:30',
        actividad:'Desayuno',
      },{
        hora:'10:30 - 13:30',
        actividad:'hacking',
      },{
        hora:'13:30 - 14:30',
        actividad:'Jurado',
      },{
        hora:'14:30',
        actividad:'Presentaciones finales y clausura',
      }]
    }];
})();
