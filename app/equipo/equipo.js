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


// margot
// luis
// danna
// rulo
// vero
// alex
// pablo
// carmen
// anuar
// sofia
// Alberto

// danna
// Hilario




  var equipo = [{
    nombre:'Margot',
    nombreCompleto:'Margot Duek',
    carrera:'Tecnologías Computacionales',
    foto:'margot.png',
    twitter:'duekis',
    subtitulo:'Estudiante de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey, Líder de MxHacks',
    descripcionCorta:'Ha sido parte de la Major League Hacking (MLH) durante dos años y parte del comité organizador de MXHacks IV desde su segunda edición.',
    descripcion:'Co-fundadora del Google Developer Group Polymer México y Wonder Coders. Trabajó como sensei en Dev.f y actualmente es parte de una Startup llamada Alter'
  },{
    nombre:'Luis',
    nombreCompleto:'Luis Trujillo',
    carrera:'Logística y patrocinios',
    foto:'luis.png',
    twitter:'LuisTruVa',
    subtitulo:'',
    descripcionCorta:'Estudiante/persona/joven emprendedor buscando nuevas oportunidades de aprender y conocer gente nueva. También tiene muchas ganas de cambiar el lugar donde vivimos por medio de la tecnología.',
    descripcion:'Estudiante/persona/joven emprendedor buscando nuevas oportunidades de aprender y conocer gente nueva. También tiene muchas ganas de cambiar el lugar donde vivimos por medio de la tecnología.'
  },{
    nombre:'Danna',
    nombreCompleto:'Danna Kiedis',
    carrera:'Creatividad, diseño, dev',
    foto:'danna.png',
    twitter:'danna_kiedis',
    subtitulo:'Publicista por profesión, hacker por vocación.',
    descripcionCorta:'Fundadora de .SABLE., un estudio dedicado al desarrollo de creatividad digital basada en nuevas tecnologías, junto a su equipo desarrollo y diseño MX Hacks IV basado en querer demostrar que en México también hay talento para desarrollar ideas. Amante de la organización y la creatividad, busca lograr la integración de más mujeres a la tecnología, actualmente es líder de la comunidad de Epic Queen CDMX. Parte del bacth 5 de Dev.f, emprendedora y amante del tequila. ',
    descripcion:''
  },{
    nombre:'Rulótico',
    nombreCompleto:'Rulótico González',
    carrera:'Creatividad, diseño, dev',
    foto:'rulo.png',
    twitter:'rulotico',
    subtitulo:'',
    descripcionCorta:'Diseñador Interactivo, creativo, coder, designer, motion, cool guy, inventor y dance dance baby, me encuentras como rulotico y la prueba de que los unicornios si existen (code + design)',
    descripcion:''
  },{
    nombre:'Vero',
    nombreCompleto:'Verónica Jaramillo',
    carrera:'Logistica y patrocinios',
    foto:'vero.png',
    twitter:'veronicasofiajl',
    subtitulo:'Estudia en la ENP 2 UNAM, es wikipedista, hacker y MUNer.',
    descripcionCorta:'Mi primer hackathon fue MXHacks II, estuve también en el III así como en el hackathon y conferencia de Wikimanía 15.',
    descripcion:'Forma parte de un grupo de alumnos de la UNAM que participaron en la creación de un artículo científico con la Stanford University y en 2015 dio una charla ignite en el DEV DAY 4 WOMAN'
  },{
    nombre:'Alex',
    nombreCompleto:'Alejandro Tapia',
    carrera:'Marketing',
    foto:'alex.png',
    twitter:'@alejandrotapiab',
    subtitulo:'',
    descripcionCorta:'Growth Hacker" Mentor y Consultor de Marketing Digital y Comercio Electrónico',
    descripcion:'“Gorwth Hacker” egresado del Dev.f con una maestría en e-Business por la Universidad  Walden en Estados Unidos. Tiene 6 años de experiencia profesional en Marketing Digital y Comercio Electrónico. Dentro de su trayectoria profesional destacan trabajos con la ONU, Bancomer, KIO, TIMEX y Mandarina Hub. Se considera un apasionado de la tecnología y apoya cualquier proyecto independiente que promueva la cultura Hacker en México.'
  },{
    nombre:'Pablo',
    nombreCompleto:'Pablo Trinidad',
    carrera:'Hackers Experience',
    foto:'pablo.png',
    twitter:'pablotrinidadpa',
    subtitulo:'Inventive & MLH.',
    descripcionCorta:'Fanático de los Hackathons y entusiasta de los servidores.',
    descripcion:'Fanático de los Hackathons y entusiasta de los servidores. Actualmente trabaja con Major League Hacking apoyando participantes y organizadores de hackathons en todo el mundo. Hace un año comenzó una compañía llamada Inventive en donde les apasiona llevar ideas a cabo mediante el desarrollo de Software. Le encanta participar en proyectos Open Source, la enseñanza y el aprendizaje.'
  },{
    nombre:'Carmen',
    nombreCompleto:'Carmen Cuevas',
    carrera:'Voluntarios y embajadores',
    foto:'carmen.png',
    twitter:'CarmenCuJz',
    subtitulo:'Creadora de mejores experiencias a las personas mediante el desarrollo web.',
    descripcionCorta:'Ella podrá ayudarte a crear y desarrollarte en esté maratón.',
    descripcion:'Organizadora y embajadora del GDG WonderCoders, Voluntaria en Voluntarios México, le apasiona transmitir sus conocimientos mediante eventos incluyentes. '
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
    carrera:'Swag',
    foto:'sof.png',
    twitter:'zaphirenomm',
    subtitulo:'Diseñadora Feelance. Apasionada por el rugby, los videojuegos y la animación',
    descripcionCorta:'Actualmente forma parte de Epic Queen. En proceso de titulación. Se siente muy orgullosa del diseño mexicano autóctono contemporáneo combinado con la actualidad.',
    descripcion:'Especializada en ilustración en busca de una maestría en animación, con miras de trabajar en proyectos de videojuegos. Participó en el diseño de Startup Weeken ITAM del 2015 y actualmente está en el concurso Interuniversitario de Animación creado y llevado acabo por Locomoción.'
  },{
    nombre:'Alberto',
    nombreCompleto:'Luis Alberto Villeda',
    carrera:'Logística',
    foto:'luis2.png',
    twitter:'luis_villedac',
    subtitulo:'"Siempre podemos aprender algo si estamos abiertos a estas posibilidades."',
    descripcionCorta:'Actualmente es Coach de la Major League Hacking, entusiasta del trabajo colaborativo, apasionado por lo hackatones y por aprender nuevas cosas.',
    descripcion:'Estudiante de ingeniería en computación en la Facultad de Ingeniería de la UNAM, actualmente escoach en la Major League Hacking, una organización internacional que se dedica a hacer hackathons en todo el mundo para animar a más estudiantes a crear algo sorprendente. Ha conocido a muchas personas del entorno empresarial, la tecnología y los hackers que son grandes fuentes de inspiración, a algunos ha tenido oportunidad de enseñarles, pero en muchas ocasiones a él le han enseñado grandes lecciones . '
  },{
    nombre:'Hilario',
    nombreCompleto:'',
    carrera:'Contabilidad',
    foto:'luis3.png',
    twitter:'rdunja2014',
    subtitulo:'Musicólogo, Compositor de música contemporánea con código',
    descripcionCorta:'Premio Reconocimiento Distinción Universidad Joven Académico 2014 UNAM.',
    descripcion:'Lic. En Música por la Universidad de Guadalajara, profesor de tiempo completo en la ENP 2 de la UNAM de composición de música con código.'
  }]

  var panelJueces = [{
    nombre:'Margot',
    nombreCompleto:'Margot Duek',
    carrera:'Tecnologías Computacionales',
    foto:'margot.png',
    twitter:'',
    subtitulo:'Estudiante de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey Líder de MxHacks',
    descripcionCorta:'He sido parte de la Major League Hacking (MLH) por aproximadamente dos años y el MXHacks IV es el tercer MXHacks que soy parte del comité organizador.',
    descripcion:'Fui co-fundadora del Google Developer Group Polymer México y Wonder Coders. En el pasado trabajé como sensei en Devf y actualmente soy parte de una Startup llamada Alter'
  }]

  var listaMentores = [{
    nombre:'Margot',
    nombreCompleto:'Margot Duek',
    carrera:'Tecnologías Computacionales',
    foto:'margot.png',
    twitter:'',
    subtitulo:'Estudiante de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey Líder de MxHacks',
    descripcionCorta:'He sido parte de la Major League Hacking (MLH) por aproximadamente dos años y el MXHacks IV es el tercer MXHacks que soy parte del comité organizador.',
    descripcion:'Fui co-fundadora del Google Developer Group Polymer México y Wonder Coders. En el pasado trabajé como sensei en Devf y actualmente soy parte de una Startup llamada Alter'
  }]

})();
