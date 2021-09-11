var express = require('express');
var router = express.Router();

var componentes = {
  consulta:{
    name: 'CONSULTA',
    image: 'images/examenes-oftalmologicos.png',
    text: 'Consiste en la evaluación integral de los ojos, por el Optometrista y/u Oftalmólogo que ' +
        'tienecomo finalidad la prevención, detección y posterior tratamiento de patologías que se podrían encontrar.'
  },
  medidaVista:{
    name: 'EXAMEN DE REFRACCIÓN O MEDIDA DE LA VISTA',
    image: 'images/medidaVista.png',
    text: 'Permite determinar cualquier error refractivo' +
        'para su posterior corrección mediante anteojos, lentes de contacto y/u operaciones con Exímer Laser'
  },
  personalTecnico:{
    name: 'PERSONAL TECNICO',
    image: 'images/LOGO.png',
    text: 'Atención personalizada y preferente por consultores ópticos que ofrecen atenciónesmerada,' +
        ' absolviendo cualquier consulta técnica sobre los productos, recomendando lo más apropiado a cada necesidad,' +
        ' gusto y fisonomía de cada persona.'
  },
  familiares:{
    name: 'FAMILIARES',
    image: 'images/familia.jpg',
    text: 'En este Programa también se ha previsto hacerextenso a los familiares de los trabajadores,' +
        ' quienes serán atendidos en las mismas condiciones que los titulares en campañas y/o consultorio.'
  },
  despistaje:{
    name: 'DESPISTAJE',
    image: 'images/consulta-oftalmologia-general-II-.jpg',
    text: 'Para los trabajadores de la empresa y sus familiares ensus propias sedes en campañas corporativas' +
        ' o en consultorio de nuestro Centro.'
  }
}

var productos = {
  lentesDeMontura: {
    name: 'Lentes de Montura',
    productos: {
      monofocales: {
        name: 'Monofocales',
        img: 'images/monofocales.jpg',
        text: 'Son aquellos que tienen la misma graduación en toda la superficie. Con ellas se puede corregir' +
            ' cualquier error refractivo o ametropía como la miopía, hipermetropía, astigmatismo o prescibicia.' +
            ' El diseñoo tallado de una lente monfocal depende del efecto refractivo que quiera corregir.'
      },
      bifocales: {
        name: 'Bifocales',
        img: 'images/bifocales.jpg',
        text: 'Son aquellas que tienen dos graduaciones diferentes para permitir a la persona corregir errores o' +
            ' defectos refractivos en la visión de lejos y de cerca. Las lentes bifocales se crearon para compensar' +
            ' errores refractivos diferentes como por ejemplo la presbicia, miopía e hipermetrofía más astigmatismo.'
      },
      progresivos: {
        name: 'Progresivos',
        img: 'images/progresivos.jpg',
        text: 'Tienen una graduación progresiva de cerca a lejos, sin embargo, no son todos iguales, ya que hay' +
            ' productos de corrección más avanzados y otros más básicos'
      }
    }
  },
  premium: {
    name: 'Premium',
    productos: {
      altaGama: {
        name: 'Alta Gama Personalizada',
        img: 'images/logo.png',
        text: 'Son aquellas que tienen dos graduaciones diferentes para permitir a la persona corregir errores o' +
            ' defectos refractivos en la visión de lejos y de cerca. Las lentes bifocales se crearon para compensar' +
            ' errores refractivos diferentes como por ejemplo la presbicia, miopía e hipermetrofía más astigmatismo.'
      },
      tension: {
        name: 'Tension',
        img: 'images/tension.jpg',
        text: 'Son aquellas que tienen dos graduaciones diferentes para permitir a la persona corregir errores o' +
            ' defectos refractivos en la visión de lejos y de cerca. Las lentes bifocales se crearon para compensar' +
            ' errores refractivos diferentes como por ejemplo la presbicia, miopía e hipermetrofía más astigmatismo.'
      },
      antireflejo: {
        name: 'Antireflejo',
        img: 'images/antireflejo.jpg',
        text: 'Son aquellas que tienen dos graduaciones diferentes para permitir a la persona corregir errores o' +
            ' defectos refractivos en la visión de lejos y de cerca. Las lentes bifocales se crearon para compensar' +
            ' errores refractivos diferentes como por ejemplo la presbicia, miopía e hipermetrofía más astigmatismo.'
      },
      luzAzul: {
        name: 'Luz Azul',
        img: 'images/luz azul.jpg',
        text: 'Son aquellas que tienen dos graduaciones diferentes para permitir a la persona corregir errores o' +
            ' defectos refractivos en la visión de lejos y de cerca. Las lentes bifocales se crearon para compensar' +
            ' errores refractivos diferentes como por ejemplo la presbicia, miopía e hipermetrofía más astigmatismo.'
      }
    }
  },
  lentesDeContacto: {
    name: 'Lentes de Contacto',
    productos: {
      diarios: {
        name: 'Diarios',
        img: 'images/lenteContacto.jpg',
        text: 'Son una opción saludable y conveniente, ya que se extraen y descartan al cabo de cada día y a la mañana' +
            ' siguiente se coloca un nuevo par en los ojos.'
      },
      colores: {
        name: 'Colores',
        img: 'images/contactoColores.jpg',
        text: 'Estos pueden tener o no medida y se usan solamente a fines estéticos para cambiar el color de los ojos.'
      },
      bifMulti: {
        name: 'Bifocales / Multifocales',
        img: 'images/contactoDiarios.jpg',
        text: 'Están diseñados con el fin de proporcionar una visión clara a todas las distancias para las personas que tienen presbicia.'
      }
    }
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Productos - MegaVision',
    componentes: componentes,
    productos: productos});
});

module.exports = router;
