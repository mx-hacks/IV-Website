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
      respuesta:'La mejor descripción de un hackathon es “un maratón de invenciones”. Cualquier persona con interés en la tecnología asiste a un hackathon a aprender, construir y compartir sus creaciones en el transcurso de un fin de semana en un ambiente relajado y amigable. No necesitas ser un programador y ciertamente tampoco estar estudiando algo relacionado Ciencias de la Computación.',
      img2:'icon5',
      titulo2:'¿Qué pasa si no se programar?',
      respuesta2:'¡No hay problema! Es completamente irrelevante la experiencia que tengas dentro del hackathon, se trata más acerca de tu interés en la tecnología.',
    },{
      img:'icon2',
      titulo:'Si no vivo en la CDMX ¿Me pueden apoyar con mi viaje?',
      respuesta:'Sí, lo único que tienes que hacer es aplicar por una beca para poder venir a la CDMX saliendo de Guadalajara o Monterrey.',
      img2:'icon10',
      titulo2:'Me acabo de graduar, ¿Aún puedo asistir a un evento?',
      respuesta2:'Sí. Cualquier persona que se haya graduado dentro de los últimos 12 meses aún puede asistir a un evento miembro de MLH. Después de eso, existen muchos hackathons no estudiantiles a los que puedes considerar asistir.',
    },{
      img:'icon4',
      titulo:'¿Será molesto para la gente si les hago preguntas?',
      respuesta:'¡Para Nada! Este es un malentendido muy común acerca de los hackathons y de hecho, es completamente lo opuesto. El ambiente en estos eventos está diseñado especialmente para alentar a todos a divertirse y ayudarse mutuamente. Si alguna vez te encuentras en problemas con algo, anda y busca a un voluntario que pueda ayudar y si no puede, seguramente conocerá a alguien que sí pueda.',
      img2:'icon9',
      titulo2:'¿Habrá comida?',
      respuesta2:'¡Por supuesto!. Tus comidas para el fin de semana serán completamente gratuitas, además muchos bocadillos y bebidas durante el evento para mantenerte con energía. Si tienes requisitos dietéticos específicos, deberás de especificarlo en tu aplicación, así podremos tomar las medidas necesarias.',
    },{
      img:'icon7',
      titulo:'¿Quién puede participar?',
      respuesta:'La convocatoria está abierta para todos los estudiantes desde preparatoria hasta cualquier persona que se haya graduado dentro de los últimos 12 meses, sin importar su carrera.',
      img2:'icon6',
      titulo2:'¿Cuánto cuesta?',
      respuesta2:'MX Hacks es un evento GRATUITO. Nosotros nos encargamos de que tengas una gran experiencia durante este fin de semana. Lo único que corre por tu cuenta son tus viáticos para llegar a nuestra sede.',
    },{
      img:'icon3',
      titulo:'¿Qué debo llevar?',
      respuesta:'Deberás contar con tu credencial de estudiante, tu laptop con su cargador, cargador de celular, gadgets y todo lo que necesites para estimular tu creatividad. Recuerda que está prohibido entrar con armas, drogas y/o alcohol.',
      img2:'icon11',
      titulo2:'¿Habrá premios?',
      respuesta2:'Sí, pero recuerda que no sólo se trata de lo que puedes ganar sino también de lo que aprendas y construyas en 36 horas para demostrar en en México también estamos generando un gran avance en creación de tecnología.',
    }]
})();
