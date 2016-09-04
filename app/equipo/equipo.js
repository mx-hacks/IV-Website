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
    nosotros.jueces = panelJueces;
    nosotros.mentores = listaMentores;
  };

  var equipo = [{
    nombre:'Margot',
    nombreCompleto:'Margot Duerk',
    carrera:'Tecnologías Computacionales',
    foto:'margot.png',
    twitter:'duekis',
    subtitulo:'Estudiante de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey Líder de MX Hacks',
    descripcionCorta:'He sido parte de la Major League Hacking (MLH) por aproximadamente dos años y el MXHacks IV es el tercer MXHacks que soy parte del comité organizador.',
    descripcion:'Fui co-fundadora del Google Developer Group Polymer México y Wonder Coders. En el pasado trabajé como sensei en Devf y actualmente soy parte de una Startup llamada Alter'
  },{
    nombre:'Luis',
    nombreCompleto:'Luis Alberto Villeda',
    carrera:'Logística',
    foto:'luis2.png',
    twitter:'LuisTruVa',
    subtitulo:'Siempre podemos aprender algo si estamos abiertos a estas posibilidades.',
    descripcionCorta:'Actualmente soy Coach de la Major League Hacking, entusiasta del trabajo colaborativo, apasionado por lo hackatones y por aprender nuevas cosas.',
    descripcion:'Entusiasta del trabajo colaborativo y estudiante de ingeniería en computación en la Facultad de Ingeniería de la UNAM, actualmente soy coach en la Major League Hacking, una organización internacional que se dedica a hacer hackathons todo el mundo para animar más aún estudiantes para crear algo sorprendente. He conocido a muchas personas del entorno empresarial , la tecnología y los hackers que son grandes fuentes de inspiración , algunos que he tenido oportunidad de enseñarles algo , pero en muchas ocasiones me he dado grandes lecciones . '
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
    nombre:'Rulo',
    nombreCompleto:'',
    carrera:'lic',
    foto:'rulo.png',
    twitter:'',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Pablo',
    nombreCompleto:'Pablo Trinidad',
    carrera:'Hacker Experience',
    foto:'pablo.png',
    twitter:'pablotrinidadpa',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Anuar',
    nombreCompleto:'Anuar Harb Becerra',
    carrera:'Logística & patrocinios',
    foto:'anuar.png',
    twitter:'anuarharb',
    subtitulo:'Hustler y Hacker, entusiasta de los temas de emprendimiento y tecnología. ',
    descripcionCorta:'Cree firmemente que la innovación y el código son el nuevo motor de los negocios de alto impacto y que para poder integrar los distintos ámbitos de un proyecto de manera eficiente hay que poder entenderlos. ',
    descripcion:'Estudia Administración en el ITAM, Trabajó como Full Stack developer en Beek la red social para lectores de habla hispana, actualmente es sensei del programa de “Cinta Blanca” en Dev.f, (El movimiento hacker más grande de Latinoamérica), miembro organizador del Google Developer Group de Polymer México, maneja "Aguacate Rugby" una página de noticias de Rugby en México y trabaja en proyectos como Freelance.'
  },{
    nombre:'Sofía',
    nombreCompleto:'Zaphire Nomm',
    carrera:'Diseñadora gráfica y ambiental',
    foto:'sof.png',
    twitter:'https://twitter.com/zaphirenomm',
    subtitulo:'Diseñadora Feelance. Apasionada por el rugby, los videojuegos y la animación',
    descripcionCorta:'Actualmente parte de Epic Queen, en proceso de titulación. Se siente muy orgullosa del diseño mexicano autóctono contemporáneo combinado con la actualidad.',
    descripcion:'Especializada en ilustración en busca de una maestría en animación, con miras de trabajar en proyectos de videojuegos. Participó en el diseño de Startup Weeken ITAM del 2015 y actualmente está en el concurso Interuniversitario de Animación creado y llevado acabo por Locomoción.'
  },{
    nombre:'Alex',
    nombreCompleto:'Alejandro Tapia',
    carrera:'Marketing',
    foto:'alex.png',
    twitter:'@alejandrotapiab',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Carmen',
    nombreCompleto:'Carmen Cuevas',
    carrera:'Voluntarios y embajadores',
    foto:'carmen.png',
    twitter:' CarmenCuJz  ',
    subtitulo:'Creadora de mejores experiencias a las personas mediante el desarrollo web.',
    descripcionCorta:'Ella podrá ayudarte a crear y desarrollarte en esté maratón.',
    descripcion:'Organizadora y embajadora del GDG WonderCoders, Voluntaria en Voluntarios México, le apasiona transmitir sus conocimientos mediante eventos incluyentes. '
  },{
    nombre:'Luis',
    nombreCompleto:'Luis Trujillo',
    carrera:'Logística & patrocinios',
    foto:'luis.png',
    twitter:'@LuisTruVa',
    subtitulo:'',
    descripcionCorta:'',
    descripcion:''
  },{
    nombre:'Vero',
    nombreCompleto:'Verónica Jaramillo',
    carrera:'lic',
    foto:'vero.png',
    twitter:'',
    subtitulo:'Estudio en la ENP 2 UNAM, soy wikipedista, hacker y MUNer.',
    descripcionCorta:'Mi primer hackathon fue MXHacks II, estuve también en el III así como en el hackathon y conferencia de Wikimanía 15.',
    descripcion:'Forme parte de un grupo de alumnos de la UNAM que participaron en la creación de un artículo científico con la Stanford University y en 2015 di una charla ignite en el DEV DAY 4 WOMAN'
  },{
    nombre:'Luis',
    nombreCompleto:'',
    carrera:'Lic. En Música',
    foto:'luis3.png',
    twitter:'',
    subtitulo:'Musicólogo, Compositor de música contemporánea con código',
    descripcionCorta:'Premio Reconocimiento Distinción Universidad Joven Académico 2014 UNAM.',
    descripcion:'Lic. En Música por la Universidad de Guadalajara, profesor de tiempo completo en la ENP 2 de la UNAM de composición de música con código.'
  },]

  var panelJueces = [{
    nombre:'Margot',
    nombreCompleto:'Margot Duerk',
    carrera:'Tecnologías Computacionales',
    foto:'margot.png',
    twitter:'',
    subtitulo:'Estudiante de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey Líder de MX Hacks',
    descripcionCorta:'He sido parte de la Major League Hacking (MLH) por aproximadamente dos años y el MXHacks IV es el tercer MXHacks que soy parte del comité organizador.',
    descripcion:'Fui co-fundadora del Google Developer Group Polymer México y Wonder Coders. En el pasado trabajé como sensei en Devf y actualmente soy parte de una Startup llamada Alter'
  }]

  var listaMentores = [{
    nombre:'Margot',
    nombreCompleto:'Margot Duerk',
    carrera:'Tecnologías Computacionales',
    foto:'margot.png',
    twitter:'',
    subtitulo:'Estudiante de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey Líder de MX Hacks',
    descripcionCorta:'He sido parte de la Major League Hacking (MLH) por aproximadamente dos años y el MXHacks IV es el tercer MXHacks que soy parte del comité organizador.',
    descripcion:'Fui co-fundadora del Google Developer Group Polymer México y Wonder Coders. En el pasado trabajé como sensei en Devf y actualmente soy parte de una Startup llamada Alter'
  }]

})();
