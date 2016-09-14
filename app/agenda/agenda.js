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
      titulo:'Sábado 12 de noviembre',
      dias:[{
        hora:'8:00 a.m - 9:00 a.m',
        actividad:'Salida autobuses de Metro Auditorio y Zapata'
      },{
        hora:'9:00 a.m - 10:00 a.m',
        actividad:'Inicia registro de participantes'
      },{
        hora:'10:00 a.m - 11:00 a.m',
        actividad:'Coffebreak / Creación de equipos',
      },{
        hora:'11:00 a.m - 12:00 p.m',
        actividad:'Inauguración MX Hacks IV'
      },{
        hora:'12:00 p.m - 3:00 p.m',
        actividad:'Hacking time!',
      },{
        hora:'3:00 p.m - 5:00 p.m',
        actividad:'Comida',
      },{
        hora:'5:00 p.m-9:00 p.m',
        actividad:'Hacking time!'
      },{
        hora:'9:00 p.m - 10:00 p.m',
        actividad:'Cena'
      }]
    },{
      titulo:'Domingo 13 de noviembre',
      dias:[{
        hora:'2.30 a.m',
        actividad:'Actividad',
      },{
        hora:'6:00 a.m - 7:00 a.m',
        actividad:'Actividad',
      },{
        hora:'9:30 a.m - 10:30 a.m',
        actividad:'Desayuno',
      },{
        hora:'10:30 a.m - 1:30 p.m',
        actividad:'Final hacking time!',
      },{
        hora:'1:30 p.m - 2:30 p.m',
        actividad:'Jurado',
      },{
        hora:'2:30 p.m',
        actividad:'Presentaciones finales y clausura Mx Hacks IV',
      }]
    }];
})();
