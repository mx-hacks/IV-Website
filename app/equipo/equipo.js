(function() {
  'use strict';

  var equipoNosotros = {
    controller:equipoCrl,
    templateUrl:'/app/equipo/equipo.html'
  }

  angular
  .module('app')
  .component('equipoNosotros', equipoNosotros)
  .controller('equipoCrl', equipoCrl);

  function equipoCrl() {
    var nosotros = this;
    nosotros.integrantes = equipo;
  };

  var equipo = [{
    nombre:'Alex',
    nombreCompleto:'',
    carrera:'Lic',
    foto:'alex.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Anuar',
    nombreCompleto:'Anuar Harb Becerra',
    carrera:'Administración',
    foto:'anuar.png',
    twitter:'anuarharb',
    subtitulo:'Hustler y Hacker, entusiasta de los temas de emprendimiento y tecnología. ',
    descripcionCorta:'Cree firmemente que la innovación y el código son el nuevo motor de los negocios de alto impacto y que para poder integrar los distintos ámbitos de un proyecto de manera eficiente hay que poder entenderlos. ',
    descripcion:'Estudia Administración en el ITAM, Trabajó como Full Stack developer en Beek la red social para lectores de habla hispana, actualmente es sensei del programa de “Cinta Blanca” en Dev.f, (El movimiento hacker más grande de Latinoamérica), miembro organizador del Google Developer Group de Polymer México, maneja "Aguacate Rugby" una página de noticias de Rugby en México y trabaja en proyectos como Freelance.'
  },{
    nombre:'Carmen',
    nombreCompleto:'',
    carrera:'lic',
    foto:'carmen.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Danna',
    nombreCompleto:'',
    carrera:'lic',
    foto:'danna.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'JuanPablo',
    nombreCompleto:'',
    carrera:'lic',
    foto:'juanpa.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Luis',
    nombreCompleto:'',
    carrera:'lic',
    foto:'luis.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Luis',
    nombreCompleto:'',
    carrera:'lic',
    foto:'luis2.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Luis',
    nombreCompleto:'',
    carrera:'lic',
    foto:'luis3.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Margot',
    nombreCompleto:'',
    carrera:'lic',
    foto:'margot.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Pablo',
    nombreCompleto:'',
    carrera:'lic',
    foto:'pablo.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Rulo',
    nombreCompleto:'',
    carrera:'lic',
    foto:'rulo.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Sofía',
    nombreCompleto:'',
    carrera:'Diseño Gráfico',
    foto:'sof.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  }]
})();
