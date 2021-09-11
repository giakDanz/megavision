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




/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('servicios', {
        title: 'Servicios - MegaVision',
        componentes: componentes });
});

module.exports = router;
