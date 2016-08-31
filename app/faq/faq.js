(function() {
  'use strict';

  var faqView = {
    controller: faqCrl,
    templateUrl:'/app/faq/faqView.html'
  }

  angular
    .module('app')
    .component('faqView', faqView)
    .controller('faqCrl', faqCrl);

    function faqCrl(){
      var faq = this;
      faq.preguntas = dudas;
    };

    var dudas = [{
      img:'icon1',
      titulo:'¿Qué es un hackatón?',
      respuesta:'Un hackatón es un evento donde se reunen algunas de las personas más talentosas con diferentes perfiles para desarrollar un proyecto en 24 hasta 36 horas seguidas de programación. Al final se presentan los demos de las aplicaciones y se elige a los mejores.'
    },{
      img:'icon2',
      titulo:'¿Major League Hacking apoya con reembolso de viajes?',
      respuesta:'Desafortunadamente, Major League Hacking no es capaz de proveer reembolso en los viajes de los hackers. Hemos reembolsado viajes en el pasado en ciertos casos, pero siempre estamos en la búsqueda constante de encontrar formas más sustentables de llevar más estudiantes a los hackathons.'
    },{
      img:'icon3',
      titulo:'Me acabo de graduar, ¿Aún puedo asistir a un evento?',
      respuesta:'Sí. Cualquier persona que se haya graduado dentro de los últi- mos 12 meses aún puede asistir a un evento miembro de MLH. Después de eso, existen muchos hackathons no estudi- antiles a los que puedes considerar asistir.'
    },{
      img:'icon4',
      titulo:'¿Será molesto para la gente si les hago preguntas?',
      respuesta:'!Para nada¡ Este es un malentendido muy común acerca de los hackathons y de hecho, es completamente lo opuesto. El am- biente en estos eventos está diseñado especialmente para alentar a todos a divertirse y ayudarse mutuamente. Si alguna vez te encuentras en problemas con algo, anda y busca a un voluntario que pueda ayudar y si no puede, seguramente con- ocerá a alguien que sí pueda.'
    },{
      img:'icon5',
      titulo:'¿Qué pasa si no se programar?',
      respuesta:'!No hay problema¡ El equipo completo de Major League Hack- ing tenían muy pocos conocimientos cuando asistieron a su primer hackathon. Es completamente irrelevante la experiencia que tengas dentro del hackathon, se trata más acerca de tu interés en la tecnología. Todos los eventos miembros de MLH son apa- sionados haciendo los hackathons muy inclusivos y amigables para los principiantes. Si estás esperando aprender cómo pro- gramar fuera de un hackathon, existe un blog post fantástico que deberías leer. Después, deberías checar las siguientes plataformas: Treehouse, Codecademy, y el Blog de Major League Hacking para comenzar.'
    },{
      img:'icon6',
      titulo:'¿Qué pasa si no conozco a nadie ahí?',
      respuesta:'Conocerás a mucha gente cuando llegues al evento. Todos son muy amigables. Bastante gente asiste a los hackathon sin equi- pos. Así que es perfectamente normal ir con la gente, contarles que estás buscando un equipo y preguntarles si puedes ayudar. Lo hackathons suelen tener dinámicas para crear equi- pos al inicio del evento y así poder ayudarte a conocer gente. Usualmente puedes unirte a un grupo de Facebook para el evento de antemano y publicar que estás en busca de poten- ciales compañeros de equipo. Tip: !Invita a tus amigos a ir al hackathon también¡ De esa manera tendrás garantizado que al menos habrá una cara familiar.'
    },{
      img:'icon7',
      titulo:'¿Qué pasa si no tengo una idea?',
      respuesta:'Eso es normal. La mayoría de la gente no tiene una idea antes de ir al evento. Pero una vez que empiezas a hablar con otras personas, seguramente tendrán alguna. También puedes tra- bajar en la idea de otra persona si gustas. Habrán premios en el evento que tal vez te ayuden a tener algunas ideas. No te preocupes por eso, encontrarás algo en que trabajar'
    },{
      img:'icon8',
      titulo:'¿Dónde puedo dormir?',
      respuesta:'En algunas ocasiones los organizadores destinan un cuarto sin ruido y poca luz donde podrás descansar. Si es es el caso, usu- almente hay dos cuartos separados por género. Debido a las restricciones de la sede, en ocasiones podrías dormir en un sofá o en el piso bajo tu mesa. Cualquiera que sea el caso, de- berías llevar una bolsa de dormir (sleeping bag) y tal vez una al- mohada al evento. Dormir en hackathons no es usualmente el plan más cómodo, pero absolutamente vale la experiencia.'
    },{
      img:'icon9',
      titulo:'¿Habrá comida?',
      respuesta:'!Absolutamente¡. Tus comidas para el fin de semana serán completamente gratuitas, además muchos bocadillos y bebi- das durante el evento para mantenerte con energía. Si tienes requisitos dietéticos específicos, deberías hacérselo saber a los organizadores y ellos estarán más que felices por arreglarlo.'
    },{
      img:'icon10',
      titulo:'¿Qué pasa si no quiero presentar mi hack?',
      respuesta:'Tal vez pienses que tu proyecto no es impresionante o tal vez no esté completo y por eso no quieras presentarlo. !Deberías presentarlo de cualquier forma¡ Honestamente, los hackathons no son acerca de ser el mejor o ser competitivo. Todo se trata de divertirse, hacer amigos y aprender a ser mejor en las cosas que te importan. Presentar tu hack te da la oportunidad de estar orgulloso con lo que construiste, y deberías estarlo.'
    },{
      img:'icon11',
      titulo:'!Genial¡ ¿Cómo me involucro?',
      respuesta:'Visita el sitio web de Major League Hacking para revisar la lista de los próximos hackathons en las temporadas de Norte América y Europa. Si tu región o área no está representada, deberás ponerte en contacto con nosotros y ver cómo podemos cambiar eso.'
    }]
})();
