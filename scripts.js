// Definimos las preguntas y respuestas
const questions = [
    {
        question: "Con respecto al neumático Runflat:",
        options: ["A. Equivale a circular con un neumático convencional inflado entre 1 y 1,5 barias.", 
        "B. Tiene una banda de rodamiento de caucho con fibras reforzadas.", 
        "C. Tiene capas de tejidos sintéticos o de aluminio."],
        correctAnswer: "B"
    },
    {
        question: "Las actuaciones a seguir en el caso de los vehículos intervenidos deberán ajustarse a lo establecido en la ISES 1/2011, en donde se contemplan, según el destino que proceda dar a los bienes intervenidos:",
        options: ["A. Dos tipos de actuaciones.", 
        "B. Tres tipos de actuaciones.", 
        "C. Cuatro tipo de actuaciones."],
        correctAnswer: "B"
    },
    {
        question: "El Comité de Seguridad y Salud se reúne trimestralmente, con lo que las empresas que cuenten con varios centros de trabajo dotados de Comité podrán acordar con su trabajadores, la creación de:",
        options: ["A. Un Comité de Centros.", 
        "B. Un Comité Intercentros.", 
        "C. Un Comité Interdisciplinar para Centros de Trabajo."],
        correctAnswer: "B"
    },
    {
        question: "Señale la proposición que considere correcta en relación al libro-registro de identificados de la Ley de Seguridad Ciudadana",
        options: ["A. Los asientos de los libro-registros se cancelarán a petición del identificado a los 3 años.", 
        "B. El órgano competente de la Administración remitirá mensualmente al Ministerio Fiscal extracto de las diligencias de identificación con expresión del tiempo utilizado en cada una.", 
        "C. Las diligencias de identificación practicadas, así como los motivos, circunstancias y duración de las mismas, sólo podrán ser comunicados sus datos a la Autoridad Judicial."],
        correctAnswer: "B"
    },
    {
        question: "La resolución de expulsión deberá ser notificada al interesado, con indicación de:",
        options: ["A. Los recursos que contra la misma puedan interponer y el órgano ante el que hubieran de presentarlo.", 
        "B. El órgano o autoridad que emite la resolución, la duración de la prohibición y la autoridad gubernativa que se encargará de tramitar el expediente.", 
        "C. Los recursos que contra la misma se puedan interponer, órgano ante el que hubieran de presentarse y plazo para presentarlos."],
        correctAnswer: "C"
    },
    {
        question: "Los anteproyectos de ley habrán de ser informados por:",
        options: ["A. La Secretaría General Técnica.", 
        "B. El Ministro correspondiente.", 
        "C. Congreso de los diputados."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué tipo  de escala de actitudes se caracteriza porque en ella tan solo hay dos respuestas posibles a las distintas preguntas: “de acuerdo” o “desacuerdo”?",
        options: ["A. Método de las actitudes summativas de Likert.", 
        "B. Método de las actitudes acumulativas de Guttman.", 
        "C. Método de las actitudes diferenciales de Thurstone."],
        correctAnswer: "A"
    },
    {
        question: "El plazo de presentación del recurso de amparo contra los actos de los órganos ejecutivos colegiados de las comunidades autónomas, de sus autoridades, funcionarios o agentes es de:",
        options: ["A. 20 días siguientes a la notificación de la resolución recaída en el proceso judicial previo.", 
        "B. 30 días a partir de la notificación de la resolución recaída en el proceso judicial previo.", 
        "C. 3 meses desde que, con arreglo a las normas internas de las Cámaras o Asambleas, dichos actos sean firmes."],
        correctAnswer: "A"
    },
    {
        question: "Las relaciones del Ministerio del Interior con las Delegaciones y Subdelegaciones del Gobierno en cuestiones relacionadas con la protección internacional, corresponde a:",
        options: ["A. Dirección General de Política Interior.", 
        "B. Secretaría General Técnica.", 
        "C. Subsecretario de Interior."],
        correctAnswer: "A"
    },
    {
        question: "Dentro de una empresa de seguridad, en cuya plantilla están integradas ¿quién realiza las funciones de organización, dirección e inspección del personal y servicios de seguridad privada?:",
        options: ["A. Directores de seguridad.", 
        "B. Jefes de seguridad.", 
        "C. Vigilantes de seguridad."],
        correctAnswer: "B"
    },
    {
        question: "Según el Real Decreto 67/2010 sobre adaptación de la Prevención de Riesgos Laborales en la Administración general del Estado, el órgano específico de participación y negociación de las organizaciones sindicales en materia de prevención de riesgos laborales será:",
        options: ["A. El Comité de Seguridad y Salud en el Trabajo.", 
        "B. La Inspección de Personal de Servicios y Servicios de Seguridad.", 
        "C. La Comisión Técnica de Prevención de Riesgos Laborales."],
        correctAnswer: "C"
    },
    {
        question: "La presidencia del Consejo Superior de Tráfico, Seguridad Vial y Movilidad Sostenible corresponde al:",
        options: ["A. Subsecretario de Estado de Seguridad.", 
        "B. Subsecretario del Interior.", 
        "C. Ministerio del Interior."],
        correctAnswer: "C"
    },
    {
        question: "El proceso que implica un “contacto estrecho de los inmigrantes con la población autóctona cuyo resultado es la adquisición por parte de los primeros de la cultura de la sociedad receptora, eliminando todo vestigio de su cultura de origen”, recibe el nombre de:",
        options: ["A. Asimilación.", 
        "B. Integración.", 
        "C. Segregación."],
        correctAnswer: "A"
    },
    {
        question: "Según el RD 1325/2003, de 24 de octubre, por el que se aprueba el reglamento del régimen de protección temporal en caso de afluencia masiva de personas desplazadas,para casos de afluencia de personas de forma espontánea a nuestras fronteras. En este procedimiento, el Ministro del Interior:",
        options: ["A. Elevará a la Comisión Interministerial de Extranjería una propuesta para acordar el régimen de protección temporal si procede.", 
        "B. Elevará al Consejo de Ministros la recomendación, en su caso, de solicitar a la Comisión Europea la presentación de una propuesta al Consejo de la Unión Europea para que tome la decisión sobre la existencia de una afluencia masiva de personas desplazadas.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "B"
    },
    {
        question: "¿A qué órgano transmitirá el Tribunal Europeo de Derechos Humanos la sentencia definitiva para que vele por su ejecución?",
        options: ["A. El Comité de Ministros.", 
        "B. Al Consejo Económico y Social.", 
        "C. Al Parlamento Europeo."],
        correctAnswer: "A"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. El objetivo de la socialización estriba en la conseguir una posición social.", 
        "B. El objetivo de la socialización estriba en la formación de la personalidad.", 
        "C. El objetivo de la socialización estriba en la enculturación, la aculturación y la transculturación."],
        correctAnswer: "A"
    },
    {
        question: "La LSP considera a la conexión a centrales receptoras de alarmas de sistemas de prevención o protección contra Incendios o de alarmas de tipo técnico o asistencial, o de sistemas o servicios de control o mantenimiento una actividad:",
        options: ["A. De seguridad privada.", 
        "B. Compatible.", 
        "C. Incompatible."],
        correctAnswer: "B"
    },
    {
        question: "Cuando una propuesta normativa afecte a la organización administrativa de la Administración General del Estado, a su régimen de personal, procedimientos y a la inspección de los servicios, será necesario:",
        options: ["A. Recabar la aprobación previa del Ministerio de Política Territorial antes de ser sometidas al órgano competente para promulgarlos.", 
        "B. Informe previo del Ministerio de Política Territorial.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },  
    {
        question: "A los efectos de la LSP, los despachos de detectives se consideran:",
        options: ["A. Empresa de seguridad privada.", 
        "B. Prestadores de servicios de seguridad privada.", 
        "C. Personal acreditado."],
        correctAnswer: "B"
    },   
    {
        question: "La verdadera tolerancia:",
        options: ["A. Discrepa pero respeta.", 
        "B. Aprueba pero no justifica.", 
        "C. Justifica pero no aprueba."],
        correctAnswer: "A"
    },
    {
        question: "El desarrollo del conocimiento aprovechando la capacidad del ser humano de adaptarse al medio ambiente, es el fundamento de:",
        options: ["A. Teoría de la imitación.", 
        "B. Teoría del conductismo.", 
        "C. Teoría del desarrollo cognitivo."],
        correctAnswer: "C"
    },
    {
        question: "La palabra 'Derecho' posee varias acepciones, cuando se refiere al hecho que consiste en dar a cada uno lo suyo, la palabra Derecho aparece como equivalente a:",
        options: ["A. Orden normativo por el que se rige una sociedad.", 
        "B. Orden Jurídico o Justicia.", 
        "C. Conjunto de normas atribuidas a una persona."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién relaciona las actitudes con el sistema nervioso?:",
        options: ["A. Rockeach.", 
        "B. Newcomb.", 
        "C. Allport."],
        correctAnswer: "C"
    },
    {
        question: "Los valores influyen en la toma de decisiones:",
        options: ["A. No. Lo que influyen son las actitudes.", 
        "B. Si, aunque son abstractos.", 
        "C. Sí, porque son concretos."],
        correctAnswer: "B"
    },
    {
        question: "Cuando el volumen de las consultas lo exija, ¿A propuesta de quién se puede ampliar el número de secciones del Consejo de Estado?",
        options: ["A. El Pleno del Consejo de Estado.", 
        "B. La Comision Permanente del Consejo de Estado.", 
        "C. Las Comisiones de Estudio del Consejo de Estado."],
        correctAnswer: "B"
    },
    {
        question: "¿Que son los oficiales de enlace?",
        options: ["A. Los encargados de comunicarse y cooperar directamente con los oficiales de enlaces de otros Estados miembros.", 
        "B. Los encargados de representar los intereses de los Estados miembros en la Unidad Central de La Haya.", 
        "C. Unidad de representación por cada Unidad Nacional, en tanto cada estado tiene una unidad nacional formada por al menos 3 oficiales de enlace."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué consejos de las 10 formaciones del Consejo de la UE se sustrae el régimen general de presidencia rotatoria?",
        options: ["A. No existe.", 
        "B. Consejo de asuntos generales.", 
        "C. Consejo de asuntos exteriores."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién define la socialización como la consecuencia de experiencias de aprendizaje, que tienen lugar como resultado de la integración del individuo en la sociedad?",
        options: ["A. Kant.", 
        "B. Freud.", 
        "C. McDavid."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién propone el anteproyecto del presupuesto de la Unión Europea?",
        options: ["A. El Consejo de la UE.", 
        "B. El Parlamento de la UE.", 
        "C. La Comision de la UE."],
        correctAnswer: "C"
    },
    {
        question: "En una cuestión prejudicial presentada ante el tribunal de Justicia de la UE, una vez notificada la misma, los Estados miembros y las instituciones disponen de:",
        options: ["A. 15 días para presentar al Tribunal de Justicia sus observaciones escritas.", 
        "B. Un mes para presentar al Tribunal de Justicia sus observaciones escritas.", 
        "C. Dos meses para presentar el Tribunal de Justicia sus observaciones escritas."],
        correctAnswer: "C"
    },
    {
        question: "Los llamados planes de apoyo operativo deben ser elaborados por:",
        options: ["A. Siempre por la fuerza y cuerpo segura del Estado.", 
        "B. En la Comunidad Autónoma con competencias la materia, su cuerpo policial, si lo posee.", 
        "C. La Secretaría de Estado de seguridad."],
        correctAnswer: "B"
    },
    {
        question: "Con respecto al altruismo cuál no es una forma estudiada según los sociólogos para que se realice la altruista:",
        options: ["A. Que el acto sea voluntario.", 
        "B. Que se favorezca a los ajeno.", 
        "C. Que el que la realiza pretenda obtener beneficios."],
        correctAnswer: "C"
    },
    {
        question: "El compromiso estratégico para igualdad entre mujeres y hombre es una activa básica de la UE en concreto:",
        options: ["A. La Comision Europea.", 
        "B. El Consejo de la Unión Europea.", 
        "C. El Consejo Europeo."],
        correctAnswer: "A"
    },
    {
        question: "Los tribunales para acceso a la administración general del Estado cómo funcionar de carrera estarán compuestos por un número de miembros:",
        options: ["A. Impar no superior a cinco.", 
        "B. Par no inferior a seis.", 
        "C. Impar no inferior a cinco."],
        correctAnswer: "C"
    },
    {
        question: "Las autoridades competentes adoptarán las medidas necesarias para la identificación de las víctimas de la trata de personas conforme a lo previsto por:",
        options: ["A. El Consejo de Europa.", 
        "B. El Consejo Europeo.", 
        "C. El Consejo de la UE."],
        correctAnswer: "A"
    },
    {
        question: "La teoría del riesgo constante fue enunciada por:",
        options: ["A. Joseph Joubert.", 
        "B. Barjonet Inrets.", 
        "C. Erich Fromm."],
        correctAnswer: "B"
    },
    {
        question: "Para el sociólogo Robert Merton, aquellos que no tienen prejuicios contra las minorías y rehúsan la discriminación aunque pueda ser costosa personalmente, son:",
        options: ["A. Liberales consecuentes.", 
        "B. Liberales tímidos.", 
        "C. Liberales tibios."],
        correctAnswer: "A"
    },
    {
        question: "Las decisiones del Subcomité para la prevención de la tortura, se tomarán:",
        options: ["A. Por mayoría absoluta.", 
        "B. Por mayoría cualificada.", 
        "C. Por mayoría simple."],
        correctAnswer: "C"
    },
    {
        question: "En la Declaración Universal de los Derechos Humanos, el derecho de asilo se encuadra dentro del grupo de:",
        options: ["A. Derechos del individuo en sus relaciones con los grupos.", 
        "B. Derechos y libertades políticas.", 
        "C. Derechos de orden internacional."],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguientes es un requisito suficiente para que una directiva entre en vigor en el ámbito del derecho de la Unión Europea.",
        options: ["A. La simple publicación en el  DOUE.", 
        "B. La simple notificación a sus destinatarios.", 
        "C. La simple publicación en el Boletín del país al que se dirige."],
        correctAnswer: "B"
    },
    // Tema 4
    {
        question: "¿Qué Tribunal Español será competente para el conocimiento y fallo de los procedimientos que investigue la Fiscalía europea?",
        options: ["A. Audiencia Nacional.", 
        "B. Tribunal Supremo.", 
        "C. Tribunal Superior de Justicia."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Frontex está dirigido por un Consejo de Adminisracion, que está compuesto por:",
        options: ["A. Un represente de cada Estado miembro responsable de las fronteras y un representante de la comisión.", 
        "B. Un representante de cada Estado miembro responsables de las fronteras y dos representantes de la comisión.", 
        "C. Un representante de cada Estado miembro responsables de las fronteras."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "El procedimiento de votación más común en el Consejo de la Unión Europea es la toma de ediciones por:",
        options: ["A. Consenso.", 
        "B. Unaminidad.", 
        "C. Mayoria cualificada."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "El principal órgano legislativo y de toma de decisiones en la Unión Europea es:",
        options: ["A. El Consejo.", 
        "B. En Consejo Europeo.", 
        "C. La Asamblea (El Parlamento Europeo)."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Permite conrolar la legalidad de la inactividad de las instituciones comunitarias:",
        options: ["A. Recurso por incumplimiento.", 
        "B. Recurso por omision.", 
        "C. Recurso por anulacion."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "¿En qué año se puso marcha el sistema de colaboracion entre tres presidencias consecutivas para hacer frente al corto plazo de sesis meses de la Presidencia en el Consejo de la UE?",
        options: ["A. 2003.", 
        "B. 2007.", 
        "C. 2009."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "En una cuestion prejudicial ane el Tribunal de Justicia de la UE, una vez notificada a las partes la peticion de la cuestion, estas disponen de _____ para presenar al Tribunal de Justicia sus observaciones escritas",
        options: ["A. Un mes.", 
        "B. Dos meses.", 
        "C. Tres meses."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "La armonizacion de los intereses nacionales con el intereses nacionales con el interes comunitario se lleva a cabo por:",
        options: ["A. La comision.", 
        "B. El Parlamento.", 
        "C. El Consejo de la Union Europea."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "¿Quien nombra al director de la oficina de la lucha contra el fraude en materia europea?",
        options: ["A. El Parlamento, la comision y el Consejo.", 
        "B. El Parlamento y el Consejo.", 
        "C. La comision."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Para el noombramiento del Presidente de la Comision Europea: Con base en la propuesta de su Presidente, el Consejo Europeo adopara, por ___ una decision por la que se proponga al Parlamento Europeo un candidato a la presidencia de la Comision.",
        options: ["A. Mayoria simple.", 
        "B. Mayoria absoluta.", 
        "C. Mayoria cualificada."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "No es una afirmacion ciera en relacion con la Decision comunitaria:",
        options: ["A. Que, si fija desinatarios, precise su notificacion a los ineresados para su entrada en vigor como obligatoria.", 
        "B. Que sea obligatoria respecto a los fines, pudiendo elegir los Estados los actos necesarios para su cumplimiento.", 
        "C. Que en general se dirija a destinatarios individualizados, ya sean Estados o personas fisicas o juridicas."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "¿En que fecha se inegro España de pleno derecho en la Union Europea?",
        options: ["A. 1 de enero 1986.", 
        "B. 1 de enero 1991.", 
        "C. 1 de enero de 1992."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Los fiscales Europeos tienen un mandato de:",
        options: ["A. 7 años no renovables.", 
        "B. 6 años no renovables.", 
        "C. 5 años no renovables."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "Propone legislacion al Parlamento y al Consejo de la Union Europea, ejerciendo con exclusividad la iniciativa normativa.",
        options: ["A. Consejo Europeo.", 
        "B. Consejo de Ministros.", 
        "C. Comision."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "¿Quien establecio los Criterios de Copenhague en 1993?",
        options: ["A. Consejo Europeo.", 
        "B. Parlamento.", 
        "C. Comision."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Organo consultivo de la Union Europea que representa a las organizaciones de los trabajadores y empresarios.",
        options: ["A. Comite de las Regiones.", 
        "B. Comite Economico y Regional.", 
        "C. Ninguna respuesta es correcta."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "¿Quien propone el anteproyecto del Presupuesto de la Union Europea?",
        options: ["A. El Consejo de la UE.", 
        "B. El Parlamento de la UE.", 
        "C. La Comision de la UE."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "Las Salas permanentes de la Fiscalia europea estaran conformadas por:",
        options: ["A. Tres miembros.", 
        "B. Cuatro miembros.", 
        "C. Cinco miembros."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "La oficina para la lucha contra el Fraude de la UE protege los intereses financieros de la Unikn Europea y es:",
        options: ["A. Autonoma en lo que respecta a sus funciones de investigacion, presupuestarias y administrativas, aunque forma parte de la Comision.", 
        "B. Autonoma en lo que respecta a sus funciones de investigacion y de administracion, aunque forma parte de Europol.", 
        "C. Autonoma en lo que respecta a sus funciones de investigacion, aunque forma parte del Tribunal de Cuentas de la UE."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Son reglamentos adoptados por el Consejo, y tienen un caracter plenamente legislativo:",
        options: ["A. Reglamentos legislativos.", 
        "B. Reglamentos ejecutivos.", 
        "C. Reglamentos de base."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "El interventor financiero de Europol sera nombrado por unanimidad por:",
        options: ["A. El Consejo.", 
        "B. El Parlamento y el Consejo.", 
        "C. El Consejo de Adminisracion de Europol."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "En 1993, a razi de las solicitudes de adhesion a la Union Europea de los antiguos paises comunistas, el Consejo Europeo estableción tres criterios que debian cumplir para convertirse en Estados miembros. Entre ellos no se encuentra:",
        options: ["A. Capacidad de hacer frente a la presion competitiva y las fuerzas de mercado.", 
        "B. Respeto y proteccion de las minorias.", 
        "C. Sistema de cooperacion intergubernamental entre los Estados miembros en materia de politica exterior y seguridad comun."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "La comision se designara tras las elecciones al Parlamento Europeo en un plazo de:",
        options: ["A. Tres meses.", 
        "B. Seis meses.", 
        "C. Nueves meses."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "Eurojust está formado por un colegio de:",
        options: ["A. 28 representantes.", 
        "B. 29 representantes.", 
        "C. 30 representantes."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Antecedente inmediato de la OCDE, establecido en Paris en 1948 por la Convencion de Cooperacion Economica para colaborar en la distribucion de los creditos del Plan Marshall.",
        options: ["A. OECE.", 
        "B. CECA.", 
        "C. CEE."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "¿Cual es el segundo pilar de la Union Europea?",
        options: ["A. JAI.", 
        "B. PESC.", 
        "C. UEM."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "Se puede asimilar a las leyes y reglamentos del derecho interno:",
        options: ["A. Los actos unilaterales del derecho derivado.", 
        "B. Los Acuerdos convencionales del derecho derivado.", 
        "C. Los tratados modificativos."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "¿Cual de las siguientes no es una funcion del Alto Representante de la Union para Asuntos Exteriores?",
        options: ["A. Preside el Consejo de Asuntos Exteriores.", 
        "B. Es miemrbo de la Comision.", 
        "C. Forma parte del Consejo Europeo."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "Inicialmente,cuando el orden público o la seguridad interior de un Estado miembro exijan una actuación inmediata, se podrá restablecer el control fronterizo por un periodo de tiempo no superior a :",
        options: ["A. 10 días.", 
        "B. 20 días.", 
        "C. 30 días."],
        correctAnswer: "A"
    },
    {
        question: "El último objetivo de la Agenda 2030 es:",
        options: ["A. Promover sociedades pacíficas e inclusivas para el desarrollo sostenible.", 
        "B. Fortalecer los medios de implementación y revitalizar la Alianza Mundial para el Desarrollo Sostenible.", 
        "C. Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos."],
        correctAnswer: "B"
    },
    {
        question: "El procedimiento abreviado en materia de protección de la seguridad ciudadana:",
        options: ["A. Será de aplicación por la comisión de infracciones leves.", 
        "B. Será de aplicación por la comisión de infracciones leves y graves, no procediendo en caso de infracciones muy graves.", 
        "C. Permite satisfacer el pago obligatorio de las sanciones con el efecto de la reducción del importe correspondiente."],
        correctAnswer: "B"
    },
    {
        question: "El Convenio Aarhus:",
        options: ["A. Regula el acceso a la información y participación pública.", 
        "B. Regula el acceso en la toma de decisiones y acceso a la justicia en materia de medio ambiente, así como la normativa comunitaria derivada del mismo.", 
        "C. Ambas respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "La huella ecológica se mide en :",
        options: ["A. Hectáreas ambientales.", 
        "B. Hectáreas biodesarrolladas.", 
        "C. Hectáreas globales."],
        correctAnswer: "C"
    },
    {
        question: "Señale la respuesta correcta:",
        options: ["A. La Comisión Interministerial para el Cambio Climático y la Transición Energética se crea con el fin de lograr el mejor tratamiento de las políticas públicas en esta materia, desde una perspectiva participativa y multidisciplinar.", 
        "B. Se crea la Comisión Interministerial para el Cambio Climático y la Transición Energética, adscrita al Ministerio para la Transición Ecológica, como órgano colegiado interministerial de los previstos en la Ley 20/2015, de 4 de octubre, de Régimen Jurídico del Sector Público.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "A"
    },
    {
        question: "¿En qué año se negocia el Protocolo de Montreal?",
        options: ["A. 1987.", 
        "B. 1988.", 
        "C. 1989."],
        correctAnswer: "A"
    },
    {
        question: "Fue la reunión que, en 1984, creó la agenda global para el cambio sostenible, fomentada también por la Asamblea General de las Naciones Unidas:",
        options: ["A. Primera reunión de la Estrategia Medioambiental para el Cambio.", 
        "B. Carta Mundial de la ONU para la Naturaleza.", 
        "C. Reunión de la Comisión Mundial sobre Medio Ambiente y Desarrollo."],
        correctAnswer: "C"
    },
    {
        question: "¿A qué órgano audita principalmente el Tribunal de Cuentas?",
        options: ["A. Comisión.", 
        "B. Parlamento.", 
        "C. Consejo de la UE."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "¿Qué tipo de migración es la de aquellos de se desplazan desde el lugar de residencia al lugar de trabajo, estudio o abastecimiento por periodos diarios, ida y vuelta, favorecidos por el transporte público?",
        options: ["A. Pendular.", 
        "B. Estacional.", 
        "C. Intraurbana."],
        correctAnswer: "A"
    },
    {
        question: "De las auditorias voluntarias, las empresas podrán someter con carácter voluntario sus sistemas de prevención al control de una auditoria o evaluación externa, para permitir la adopción de decisiones dirigidas a su perfeccionamiento y mejora. ¿Cuándo puede realizarse una auditoria voluntaria?",
        options: ["A. En casos en que la auditoria externa no sea legalmente exigible.", 
        "B. Solo en casos de que la auditoria externa sea legalmente exigible.", 
        "C. Se realicen con una menor frecuencia o un alcance menos amplio de lo establecido."],
        correctAnswer: "A"
    },
    {
        question: "Funcionario diplomatico que ocupa temporalmente la Jefatura de una Misión Diplomática por hallarse vacante dicho puesto, por ausencia del titular, etc.",
        options: ["A. Encargado de negocios.", 
        "B. Jefe de misión.", 
        "C. Canciller."],
        topic: 5,
        correctAnswer: "A"
    },
    {
        question: "Quien sustitue al titular de un Departamento en el despacho de los asuntos ordinarios de su competencia, en caso de ausencia en el extranjero o enfermedad?",
        options: ["A. El Secretario de Estado.", 
        "B. El Subsecretario.", 
        "C. El Ministro que designe el Presidente del Gobierno."],
        topic: 5,
        correctAnswer: "C"
    },
    {
        question: "La responsabilidad criminal del Presidente y los demas miembros del Gobierno será exigible:",
        options: ["A. La sala de lo Contencioso - Administrativo del Tribunal Supremo.", 
        "B. La Sala de lo Penal de la Audiencia Nacional.", 
        "C. La Sala de lo Penal del Tribunal Supremo."],
        topic: 5,
        correctAnswer: "C"
    },
    {
        question: "La suplencia de los Ministros, para el despacho ordinario de los asuntos de su competencia, sera determinada por:",
        options: ["A. Real Decreto del Presidente del Gobierno.", 
        "B. Real Decreto del Consejo en Madrid.", 
        "C. Ninguna de las respuestas es correcta."],
        topic: 5,
        correctAnswer: "A"
    },
    {
        question: "Con caracter general, no son delegables las competencias del Ministro en favor de:",
        options: ["A. Los Secretarios de Estado.", 
        "B. Los Delegados del Gobierno en las Comunidades Autonomas.", 
        "C. Del Vicepresidente."],
        topic: 5,
        correctAnswer: "C"
    },
    {
        question: "Los embajadores serán designados y cesados:",
        options: ["A. Por Real Decreto del Consejo de Ministros, a propuesta del titular del Ministerio o del Presidente del Gobierno.", 
        "B. Por Real Decreto acordado en Consejo de Ministros a propuesta del Ministro de Asuntos exteriores, UE y Cooperacion.", 
        "C. Por Real Decreto del Consejo de Ministros, a iniciativos del ministro ha interesado y a propuesta del ministro de Hacienda y Administraciones Públicas."],
        topic: 5,
        correctAnswer: "B"
    },
    {
        question: "¿Quien puede ordenar operaciones a la Fuerzas Armadas en el exterior que no esten directamente relacionadas con la defensa de España o el interes nacional?",
        options: ["A. El Gobierno.", 
        "B. El Presidente del Gobierno.", 
        "C. Las Cortes Generales."],
        topic: 5,
        correctAnswer: "B"
    },
    {
        question: "Solo uno de los siguientes principios está garantizado constitucionalmente:",
        options: ["A. La responsabilidad de la Administración Pública.", 
        "B. La interdicción de la arbitrariedad del poder judicial.", 
        "C. La responsabilidad e interdicción de la arbitrariedad de los poderes públicos."],
        correctAnswer: "C"
    },
    {
        question: "En el contexto del PEPIC se insta a los Estados miembros a elaborar un programa nacional de protección, que incluya",
        options: ["A. La identificación de las interdependencias geográficas.", 
        "B. La programación de planes de intervención.", 
        "C. La clasificación de las infraestructuras críticas nacionales en función de su operatividad activa."],
        correctAnswer: "A"
    },
    {
        question: "¿En qué instancia de la personalidad del ser humano, se inscribe la inconsciencia?",
        options: ["A. En el “yo”.", 
        "B. En el “ello”.", 
        "C. En el “superyó”."],
        correctAnswer: "B"
    },
    {
        question: "Órgano colegiado de apoyo al Consejo de Seguridad Nacional cuya composición reflejará el espectro de los ámbitos de los departamentos, organismos y agencias de las administraciones públicas con competencias en materia de ciberseguridad. Hablamos de:",
        options: ["A. El Instituto Nacional de Ciberseguridad.", 
        "B. La Subdirección General de Sistemas de Información y Comunicaciones para la Seguridad.", 
        "C. El Consejo Nacional de Ciberseguridad."],
        correctAnswer: "C"
    },
    {
        question: "La Ley de Medidas para la Protección de las Infraestructuras Críticas, respecto al Programa Nacional de Seguridad de la Aviación Civil:",
        options: ["A. Lo deroga expresamente, puesto que sus previsiones se aplican en lugar de este Programa.", 
        "B. Lo deroga tácitamente, puesto que sus previsiones se aplican con preferencia a las del programa.", 
        "C. Se aplica sin perjuicio de lo que el Programa dispone."],
        correctAnswer: "C"
    },
    {
        question: "Los representantes de Estado en el Consejo de Política de Seguridad serán designados por:",
        options: ["A. El Gobierno.", 
        "B. El Ministerio del Interior.", 
        "C. El Secretario de Estado de Seguridad."],
        correctAnswer: "A"
    },
    {
        question: "Los Delegados del Gobierno:",
        options: ["A. Ejercen las competencias del Estado bajo la dependencia funcional del Ministerio del Interior a los efectos de proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana.", 
        "B. Dirigen y coordinan la protección civil en todas las provincias.", 
        "C. Son nombrados por libre designación entre funcionarios de carrera del Estado, de las Comunidades Autónomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1."],
        correctAnswer: "A"
    },
    {
        question: "La conciencia colectiva es propia de las sociedades",
        options: ["A. Urbanas.", 
        "B. Rurales.", 
        "C. Urbanas y rurales."],
        correctAnswer: "B"
    },
    {
        question: "Para la contratación de servicios de seguridad privada en los sectores estratégicos definidos en la legislación de protección de infraestructuras críticas, las empresas de seguridad privada deberán contar, con carácter previo a su prestación, con:",
        options: ["A. Una certificación emitida por una entidad de certificación acreditada.", 
        "B. Una habilitación profesional expedida por el Ministerio del Interior.", 
        "C. Una autorización emitida por el Ministerio del Interior con los requisitos que reglamentariamente se determinen."],
        correctAnswer: "A"
    },
    {
        question: "Con carácter general,no son delegables las competencias del Ministro en favor de:",
        options: ["A. Los Secretarios de Estado.", 
        "B. Los Delegados del Gobierno en las Comunidades Autónomas.", 
        "C. Del Vicepresidente."],
        correctAnswer: "C"
    },
    {
        question: "Del estudio de las leyes necesarias para regular la convivencia social, se encarga",
        options: ["A. La Sociología.", 
        "B. La Estática social.", 
        "C. La Dinámica social."],
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de los siguientes no forma parte de la composición del Consejo Europeo",
        options: ["A. Jefe de Estado o de Gobierno de los Estados miembros.", 
        "B. Míster Pesc.", 
        "C. Míster Europe."],
        correctAnswer: "B"
    },
    {
        question: "¿Cómo se crean los orgaos de examees para la seleccion de funcionarios?",
        options: ["A. Los tribunales se nombra, salvo excepcion justificada, en la Orden de la convocatoria.", 
        "B. Las Comisiones Permanenes de Seleccion y los Tribunales se crean a traves de Orden del ministerio de Transformacion Digital y Funcion publica.", 
        "C. Las Comisiones Permanentes de Seleccion se crean pro Orden del Ministerio al que esten adscritos los Cuerpos objeto de seleccion."],
        topic: 6,
        correctAnswer: "A"
    },
    {
        question: "El nombramiento de funcionario de carrera debe publicarse necesariamente:",
        options: ["A. En el BOE.", 
        "B. En el Boletin Oficial de la Provincia o Comunidad Autonoma.", 
        "C. En el Diario Oficial Correspondientet."],
        topic: 6,
        correctAnswer: "C"
    },
    {
        question: "Segun el Estatuto Basico del Empleado Publico, ¿a quien corresponde el ejercicio de las funciones que impliquen la participacin directa o indirecta en el ejercicio de las potestades publicas o en la salvaguardia de los inereses generales del Esado y de las Administraciones Publicas?",
        options: ["A. A los funcionarios publicos, anto de carrera como interinos.", 
        "B. Exclusivamente a los funcionarios de carrera.", 
        "C. A los funcionarios publicos  al personal laboral que se encuentre realizando sus funciones al servicio de la Administracion."],
        topic: 6,
        correctAnswer: "B"
    },
    {
        question: "No se menciona como fundamento de actuacion en el Estatuto Basico del Empleado Publico",
        options: ["A. Igualdad de trato entre hombres y mujeres.", 
        "B. Objetividad, profesionalidad e imparcialidad en el servicio garantizadas con la inamovilidad en la condicion de funcionario de carrera.", 
        "C. Transparencia en planificacion y la gestion de recursos humanos."],
        topic: 6,
        correctAnswer: "C"
    },
    {
        question: "Las pruebas de los procesos selectivos reguladas en el articulo 61 del texto refundido del Estatuto Basico del Empleado Publico, podra completarse con la superacion de cursos, periodos de practicas...al objeto de asegurar:",
        options: ["A. La igualdad y objetividad de los procedimientos.", 
        "B. La objetividad y racionalidad de los procesos.", 
        "C. El merito y capacidad de los aspirantes."],
        topic: 6,
        correctAnswer: "B"
    },
    {
        question: "Por acumulacion o exceso de tareas un funcionario interino puede ser nombrado por un plazo maximo de:",
        options: ["A. Seis meses.", 
        "B. Un año.", 
        "C. Nueve meses, dentro de un periodo de dieciocho meses."],
        topic: 6,
        correctAnswer: "C"
    },
    {
        question: "¿De cuantos miembros estara compuesto un Tribunal de seleccion?",
        options: ["A. Inferior a cinco.", 
        "B. No inferior a cinco.", 
        "C. Igual a cinco."],
        topic: 6,
        correctAnswer: "B"
    },
    {
        question: "Para la activación de los Niveles de Alerta Antiterrorista, la autoridad competente para hacerlo, deberá basarse en informes y otras circunstancias que elaborará:",
        options: ["A. Los Directores Generales de la Policía y de la Guardia Civil.", 
        "B. El Gabinete del Ministro del lnterior.", 
        "C. Un comité de expertos."],
        correctAnswer: "C"
    },
    {
        question: "Las deliberaciones de la Comisión General de Secretarios de Estado y Subsecretarios serán :",
        options: ["A. Reservadas.", 
        "B. Secretas.", 
        "C. Privadas."],
        correctAnswer: "A"
    },
    {
        question: "Instrumentos dirigidos a hacer que las fuerzas del mercado sean las principales propiciadoras del cumplimiento de las metas ambientales de la sociedad:",
        options: ["A. Instrumentos de información ambiental.", 
        "B. Instrumentos de mercado.", 
        "C. Instrumentos administrativos."],
        correctAnswer: "B"
    },
    {
        question: "La identidad supuesta del agente encubierto será otorgada por periodos de:",
        options: ["A. Seis meses prorrogables por períodos de igual duración.", 
        "B. Tres meses prorrogables por períodos de igual duración.", 
        "C. Ninguna de las respuestas es correcta."],
        correctAnswer: "A"
    },
    {
        question: "El procedimiento y condiciones para la expedición de visados uniformes y de validez territorial limitada se regulan por lo establecido:",
        options: ["A. En el derecho nacional.", 
        "B. En el Derecho de la Unión Europea.", 
        "C. En el Derecho Internacional."],
        correctAnswer: "B"
    },
    {
        question: "La gestión, custodia y mantenimiento del Catálogo de lnfraestructuras Críticas corresponden a:",
        options: ["A. Centro Nacional para la Protección de las lnfraestructuras y Ciberseguridad.", 
        "B. La Comisión Nacional para la Protección de las lnfraestructuras Críticas.", 
        "C. Ministerio del lniterior a través de la Secretaría de Estado de Seguridad."],
        correctAnswer: "C"
    },
    {
        question: "El mantenimiento período de los vehículos, basado fundamentalmente en detectar una falla antes de que suceda, para dar tiempo a corregirla sin prejuicios al servicio, es lo que se conoce como:",
        options: ["A. Mantenimiento correctivo.", 
        "B. Mantenimiento preventivo.", 
        "C. Mantenimiento predictivo."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué agente del Sistema para la Protección de las lnfraestructuras Críticas será el encargado de elaborar los Planes Estratégicos Sectoriales?",
        options: ["A. El Grupo de Trabajo lnterdepartamental.", 
        "B. La Secretaría de Estado de Seguridad.", 
        "C. El Centro Nacional para la Protección de las lnfraestructuras y Ciberseguridad."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué principio no permite que las ideas y acciones de una persona o grupo cultural esté por encima de otro, favorecienco en todo momento el diálogo y la concertación?:",
        options: ["A. Pluralismo cultural.", 
        "B. Adaptación social.", 
        "C. Interculturalidad."],
        correctAnswer: "C"
    },
    {
        question: "¿En qué período de la historia se produjo la conocida como Revolución Agrícola?:",
        options: ["A. En el Neolítico.", 
        "B. En el siglo XVIII con la invención del motor en Inglaterra.", 
        "C. En el Renacimiento."],
        correctAnswer: "A"
    },
    {
        question: "El actual sistema de niveles de Alerta Antiterrorista data del año:",
        options: ["A. 2015.", 
        "B. 2013.", 
        "C. 2016."],
        correctAnswer: "A"
    },
    {
        question: "El control del Gobierno se va a llevar a cabo desde tres puntos de vista:",
        options: ["A. Jurisdiccional, administrativo y constitucional.", 
        "B. Jurisdiccional, político y constitucional.", 
        "C. Administrativo, político y constitucional."],
        correctAnswer: "B"
    },
    {
        question: "Según el art. 8.1 del Estatuto Básico del Empleado Público, quienes desempeñan funciones retribuidas en las Administraciones Públicas, son:",
        options: ["A. Empleados públicos.", 
        "B. Funcionarios públicos.", 
        "C. Los dos anteriores."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué órgano de  Naciones Unidas es el encargado de mejorar la situación de los derechos humanos en todos sus países miembros?:",
        options: ["A. El Consejo de Derechos Humanos.", 
        "B. La Comisión de Derechos Humanos.", 
        "C. El Comité de Derechos Humanos."],
        correctAnswer: "A"
    },
    {
        question: "El Estado Español cuenta desde el año 2013 con un documento donde se recoge las acciones a desarrollar por el Gobierno para proteger Ia libertad y el bienestar de los ciudadanos, garantizar la defensa nacional y sus principios y valores constitucionales denominado:",
        options: ["A. Estrategia de Seguridad Nacional.", 
        "B. Ley de Seguridad Nacional.", 
        "C. Plan Nacional de Protección de las lnfraestructuras Críticas."],
        correctAnswer: "A"
    },
    {
        question: "En el procedimiento prejudicial de urgencia (PPU) ante el Tribunal de Justicia de la UE , estos asuntos:",
        options: ["A. Se confían a una sala de tres jueces especialmente designada.", 
        "B. Se confían a una sala de cinco jueces especialmente designada.", 
        "C. Se confían a una sala de siete jueces especialmente designada."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién propone al Parlamento Europeo un candidato para el cargo de presidente de la Comisión Europea?",
        options: ["A. El Consejo Europeo.", 
        "B. El consejo de la UE.", 
        "C. El Parlamento."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué organismo desempeña la función de guardián del Tribunal Europeo de Derechos Humanos?",
        options: ["A. El Comisario del Consejo de Europa.", 
        "B. La Asamblea Parlamentaria del Consejo de Europa.", 
        "C. El Comité de Ministros del Consejo de Europa."],
        correctAnswer: "C"
    },
    {
        question: "El documento sobre Estrategia de Seguridad Nacional vigente en la actualidad en España considera necesario la actuación en varios ámbitos prioritarios, siendo estos un total de:",
        options: ["A. Cinco.", 
        "B. Quince.", 
        "C. Diez."],
        correctAnswer: "B"
    },
    {
        question: "¿Que medida establecida en la Ley de Enjuiciamiento Criminal tiene la duracion maxima de un mes, prorrogable por iguales periodos hasta un maximo de tres meses?",
        options: ["A. Registro de almacenamientos masivos de informacion.", 
        "B. Registros remotos sobre equipos informaticos.", 
        "C. Utilizacion de dispositivos tecnicos de captacion de la imagen, de seguimiento y de localizacion."],
        correctAnswer: "B"
    },
    {
        question: "¿De quien depende la OLAF u Oficina Europea de la Lucha contra el Fraude?",
        options: ["A. Del Consejo Europeo.", 
        "B. De la Comision Europea.", 
        "C. Del COnsejo de la UE."],
        correctAnswer: "B"
    },
    {
        question: "La UE le otroga la competencia para la defensa y la proeccion del 'principio de subsidiariedad'",
        options: ["A. Comite de las Regiones.", 
        "B. Comite Economico y Social.", 
        "C. Parlamento."],
        correctAnswer: "A"
    },
    {
        question: "No se inscribiran en el Registro Nacional de Seguridad Privada:",
        options: ["A. Sanciones impuesas a empresas de seguridad privada por infracciones en el ambito de la Seguridad Social.", 
        "B. Modificaciones de conratos en el ambito de seguridad privada.", 
        "C. Centros de formacion de seguridad privada."],
        correctAnswer: "A"
    },
    {
        question: "Aparte de la Agenda 21, en el seno de la UNCED o Cumbre de la Tierra se adopta­ron otras dos resoluciones de enorme interés:",
        options: ["A. La Declaración de Río sobre Desarrollo y Medioambiente y la Resolución The future we want.", 
        "B. La Declaración de Río sobre Desarrollo y Medioambiente y la Declaración de Principios para la Gestión Sostenible de bosques.", 
        "C. Ninguna de las anteriores es cierta, y además el enunciado no es correcto: la Agenda 21 no se adoptó en el seno de la UNCED."],
        correctAnswer: "B"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. La aculturación es un proceso que dura toda la vida.", 
        "B. La enculturación es un proceso que dura toda la vida.", 
        "C. La transculturación es un proceso que dura toda la vida."],
        correctAnswer: "A"
    },
    {
        question: "El director del gabinete de un Secretario de Esado sera nombrado por:",
        options: ["A. ORden Ministerial", 
        "B. Real Decreto Presidente del Gobierno", 
        "C. Real Decreto Consejo de Ministros"],
        correctAnswer: "A"
    },
    {
        question: "Es correcto afirmar, en cuanto a lo que establece la Constitucion sobre el Tribunal Constitucional:",
        options: ["A. Que su funcionamiento, el estatuto de sus miembros y el procedimiento ante este Tribunal se desarrolla posteriormente en una ley ordinaria.", 
        "B. Las sentencias del Tribunal Constitucional se plucaran en el BOE, teniendo estas el valor de cosa juzgada, sin que procesa el recurso contra dichas sentencias", 
        "C. Que los mimebros del Tribunal Constitucional estaran nombrados para un mandato de 5 años, renovados por terceras partes cada tres"],
        correctAnswer: "B"
    },
    {
        question: "El Pacto Internacional de Derechos Sociales, Economicos y Culturales de la ONU, equivale a :",
        options: ["A. Carta de Turin", 
        "B. Convenio de Roma", 
        "C. Ninguna de las respuestas anteriores es correcta"],
        correctAnswer: "A"
    },
    {
        question: "En el cumplimiento de sus funciones el Consejo Nacional de Ciberseguridad sera apoyado por:",
        options: ["A. Las Fuerzas y Cuerps de Seguridad del Estado", 
        "B. Un comite de expertos de las Administraciones Publicas", 
        "C. Departamento de Seguridad Nacional"],
        correctAnswer: "C"
    },
    {
        question: "El uso del agua de la huella hidrica se mide:",
        options: ["A. En volumen de agua contaminada por unidad de tiempo", 
        "B. En volumen de agua consumida o evaporada y/o contaminada pr unidad de tiempo.", 
        "C. Ninguna de las anteriores es correcta."],
        correctAnswer: "B"
    },
    {
        question: "Cuando la gravedad urgencia de los hechos lo aconsejen, el Defensor del Pueblo pos presentar un informe extraordinario ¿A quien lo dirigira?",
        options: ["A. Al Presidente del Gobierno, si las Camaras no estuvieran reunidas.", 
        "B. A las Diputaciones Permanente de las Camaras, si estas no se encontraran reunidas.", 
        "C. Al presidente del Congreso, si las camaras no estuvieran reunidas."],
        correctAnswer: "B"
    },
    {
        question: "¿Durante cuanto tiempo puede estar ejerciendo el Presidente del tribunal Europeo de los DDHH?",
        options: ["A. 6 años reelegibles.", 
        "B. 3 años reelegibles.", 
        "C. 9 años no reelegibles."],
        correctAnswer: "B"
    },
    {
        question: "La COP es la Conferencia de las Partes, ¿a qué partes hace referencia esta denominación?",
        options: ["A. A las partes de la CMNUC.", 
        "B. A las Partes de la Convención Marco de las Naciones Unidas sobre el Cambio Climático.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Tal como establece el artículo 18 del Real Decreto 240/2007, de 16 de febrero, sobre entrada, libre circulación y residencia en España de ciudadanos de los Estados miembros de la Unión Europea y de otros Estados parte en el Acuerdo sobre el Espacio Económico Europeo, las resoluciones de expulsión establecerán un plazo para abandonar el territorio español. Excepto en casos urgentes, debidamente justificados, dicho plazo no podrá ser inferior a :",
        options: ["A. 15 días.", 
        "B. Un mes.", 
        "C. Tres meses."],
        correctAnswer: "B"
    },
    {
        question: "Entre las teorías más conocidas realizadas sobre las actitudes de la persona autoritaria figura la de:",
        options: ["A. Adorno.", 
        "B. Cooley.", 
        "C. Merton."],
        correctAnswer: "A"
    },
    {
        question: "Los actos y disposiciones dictados por la Presidencia de la Agencia Española de Protección de Datos son recurribles, directamente ante:",
        options: ["A. El Tribunal Superior de Justicia.", 
        "B. La Audiencia Nacional.", 
        "C. El Tribunal Supremo."],
        correctAnswer: "B"
    },
    {
        question: "La derogación de alguno de los derechos establecidos en el Convenio de Roma en caso de estado de urgencia por parte de una nación:",
        options: ["A. Le obliga a comunicarlo al Secretario General de Naciones Unidas.", 
        "B. Le obliga a comunicarlo al Secretario General del Consejo de Europa.", 
        "C. Le obliga a comunicarlo al Presidente del Tribunal de Justicia Europeo."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué recurso cabe contra la denegación de entrada en territorio español?",
        options: ["A. Recurso de alzada.", 
        "B. Recurso potestativo de reposición.", 
        "C. Recurso contencioso - administrativo."],
        correctAnswer: "A"
    },
    {
        question: "¿De los modelos de convivencia existentes, cual representa realmente una socialización terciaria?",
        options: ["A. Asimilación.", 
        "B. Melting pot.", 
        "C. Integración."],
        correctAnswer: "A"
    },
    {
        question: "¿Los sentimientos y las emociones, de qué componente de las actitudes forman parte?",
        options: ["A. Evaluativo.", 
        "B. Cognitivo.", 
        "C. Conductual."],
        correctAnswer: "A"
    },
    {
        question: "¿De cuánto tiempo dispone la autoridad laboral para notificar una resolución de revocación de la autorización a una entidad acreditada?",
        options: ["A. Seis meses desde la fecha del acuerdo de iniciación del expediente de revocación.", 
        "B. Cinco meses desde la fecha del acuerdo de iniciación del expediente de revocación.", 
        "C. Tres meses desde la fecha del acuerdo de iniciación del expediente de revocación."],
        correctAnswer: "A"
    },
    {
        question: "La ley de Seguridad Privada establece el marco para la más eficiente coordinación de los servicios de seguridad privada con los de las Fuerzas y Cuerpos de Seguridad, de los que son complementarios:",
        options: ["A. En beneficio de la seguridad privada.", 
        "B. En beneficio de la seguridad pública.", 
        "C. Las dos son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Los Ministros son órganos:",
        options: ["A. Políticos y de gestión.", 
        "B. Políticos y administrativos.", 
        "C. Ejecutivos y políticos."],
        correctAnswer: "B"
    },
    {
        question: "Por qué principio se rigen las relaciones entre las normas de carácter estatal y las de los órganos de las CCAA.",
        options: ["A. Principio de legalidad.", 
        "B. Principio de competencia.", 
        "C. Jerarquía normativa."],
        correctAnswer: "B"
    },
    {
        question: "La capacidad de obrar tiene 3 manifestaciones:",
        options: ["A. Negocial, procesal y penal.", 
        "B. Jurídica, natural y personal.", 
        "C. Negocial, penal y obligatoria."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué es necesario para que prospere una moción de censura?: ",
        options: ["A. Aprobación por la décima parte de los Diputados.", 
        "B. Aprobación por mayoría simple del Congreso.", 
        "C. Aprobación por mayoría absoluta del Congreso."],
        correctAnswer: "C"
    },
    {
        question: "De acuerdo con el artículo 314 del Tratado de Funcionamiento de la Unión Europea, el presupuesto anual de la Unión:",
        options: ["A. Es aprobado por el Parlamento Europeo a propuesta del Consejo.", 
        "B. Es aprobado por la Comisión.", 
        "C. Es aprobado por el Parlamento Europeo y el Consejo, a propuesta de la Comisión."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién ejerce las competencias correspondientes a los servicios comunes del Departamento?:",
        options: ["A. Los Subsecretarios.", 
        "B. Los Secretarios de Estado.", 
        "C. Los Directores generales."],
        correctAnswer: "A"
    },
    {
        question: "Señale la respuesta correcta:",
        options: ["A. El visado se solicitará y expedirá en las Misiones Diplomáticas y Oficinas Consulares de España, salvo en los supuestos excepcionales que se contemplen reglamentariamente o en los supuestos en los que el Estado español, de acuerdo con la normativa internacional sobre la materia, haya acordado su representación con otro Estado en materia de visados de tránsito o estancia..", 
        "B. El visado se solicitará y expedirá en las Misiones Diplomáticas y Oficinas Consulares de España, salvo en los supuestos excepcionales que se contemplen reglamentariamente o en los supuestos en los que el Estado español, de acuerdo con la normativa comunitaria sobre la materia, haya  acordado su representación con otro Estado miembro de la Unión Europea en materia de visados de tránsito o estancia..", 
        "C. El visado se solicitará y expedirá en las Misiones Diplomáticas y Oficinas Consulares de España, en todo caso.."],
        correctAnswer: "A"
    },
    {
        question: "Fue el protocolo que eliminó las limitaciones geográficas y temporales contenidas en la Convención de Ginebra  del año 1951:",
        options: ["A. Protocolo de Ginebra, de 1968.", 
        "B. Protocolo de Estocolmo, de 1969.", 
        "C. Protocolo de Nueva York, de 1967."],
        correctAnswer: "C"
    },
    {
        question: "La autoridad competente para clasificar una infraestructura como estratégica, así como incluirla en el Catálogo corresponde a:",
        options: ["A. Secretario de Estado de Seguridad.", 
        "B. Comisión Nacional para la Protección de las lnfraestructuras Críticas.", 
        "C. Ministro del lnterior."],
        correctAnswer: "C"
    },
    {
        question: "Según el Art. 27 del Código Penal son responsables criminalmente de los delitos",
        options: ["A. Los autores, inductores y cooperadores.", 
        "B. Los autores, cómplices y encubridores.", 
        "C. Los autores y cómplices."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién asegurará la coordinación de las actividades de las Unidades de Igualdad, favoreciendo el desarrollo homogéneo de sus funciones y el intercambio de información y experiencias?",
        options: ["A. La Comisión laboral de Igualdad entre mujeres y hombres.", 
        "B. La Secretaría de Estado de Igualdad, a través del Observatorio estatal de violencia sobre la mujer.", 
        "C. La Dirección General de la Función Pública, a través de la Subdirección General de Relaciones Laborales."],
        correctAnswer: "C"
    },
    {
        question: "La patogenia de la enfermedad profesional es:",
        options: ["A. Predecible.", 
        "B. Brusca.", 
        "C. Difícil de establecer."],
        correctAnswer: "C"
    },
    {
        question: "Señala en cuál de las siguientes ideas no se basa la PRL",
        options: ["A. Un accidente laboral es un suceso inevitable.", 
        "B. Si la tarea está bien estudiada de antemano, se podrán prever los riesgos que puedan aparecer.", 
        "C. Un accidente laboral no es algo que ocurra irremediablemente, por casualidad."],
        correctAnswer: "A"
    },
    {
        question: "La aparición del accidente de trabajo no es:",
        options: ["A. Brusco.", 
        "B. Predecible", 
        "C. Difícil de establecer."],
        correctAnswer: "B"
    },
    {
        question: "Son funciones de la Inspección de Trabajo y Seguridad Social:",
        options: ["A. La elaboración de los informes solicitados por los Juzgados de lo Social en las demandas de accidentes de trabajo y enfermedades profesionales.", 
        "B. El asesoramiento técnico en la elaboración de la normativa legal, tanto a nivel nacional como internacional.", 
        "C. La colaboración con organismos internacionales y el desarrollo de programas de cooperación internacional."],
        correctAnswer: "A"
    },
    {
        question: "El término “declaración” implica:",
        options: ["A. Es un documento de obligatorio cumplimiento.", 
        "B. Su vulneración no es sancionable por el Derecho Internacional.", 
        "C. Su violación es sancionable por el Derecho Internacional."],
        correctAnswer: "B"
    },
    {
        question: "La clasificación de los grupos en endogrupo y exogrupo se debe a:",
        options: ["A. Emile Durkheim.", 
        "B. William Summer.", 
        "C. Robert Merton."],
        correctAnswer: "B"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. El “superyo” siempre trata de equilibrar los deseos del “ello” con las reglas del “yó”.", 
        "B. El “yo” siempre trata de equilibrar los deseos del “ello” con las reglas del “superyó”..", 
        "C. El “ello” siempre trata de equilibrar los deseos del “yo” con las reglas del “superyó”.."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién sostuvo que la sociedad varía a través del tiempo?",
        options: ["A. Emile Durkheim.", 
        "B. Max Weber.", 
        "C. Peter Berger."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué tipo de solidaridad existe en una sociedad con poca o ninguna división en el trabajo, en las cuales las funciones suelen ser las mismas para todas la personas?",
        options: ["A. Solidaridad orgánica.", 
        "B. Solidaridad mecánica.", 
        "C. Solidaridad funcional."],
        correctAnswer: "B"
    },
    {
        question: "En el año 1981, el Consejo de Calidad Medioambiental de los Estados Unidos elaboró un informe que consideraba que la biodiversidad era un factor crítico para el adecuado funcionamiento del planeta. ¿Cómo se llamó tal informe?",
        options: ["A. Informe sobre Medio Ambiente y Desarrollo.", 
        "B. Informe Global 2000.", 
        "C. Informe sobre Medio Humano de las Naciones Unidas."],
        correctAnswer: "B"
    },
    {
        question: "Europa 2020 es la estrategia de crecimiento de la unión Europea para la década.",
        options: ["A. 2010-2020.", 
        "B. Ninguna es correcta.", 
        "C. 2020-2030."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién mantiene operativo y actualizado el Catálogo Nacional de infraestructuras estratégicas, estableciendo los procedimientos de alta, baja y modificación de las infraestructuras, tanto nacionales como europeas?",
        options: ["A. El Ministerio del interior, a través de la Secretaria de Estado de Seguridad.", 
        "B. El Centro Nacional de Protección de Infraestructuras y Ciberseguridad.", 
        "C. La Comisión Nacional para la Protección de las Infraestructuras Críticas."],
        correctAnswer: "B"
    },
    {
        question: "Para que una infraestructura sea calificada como estratégica, y en su caso, como infraestructura critica o Infraestructura critica europea, debe cumplir:",
        options: ["A. Dos o más de los criterios horizontales de criticidad previstos en la Ley de Medidas para la Protección de las Infraestructuras Criticas..", 
        "B. Al menos uno de los criterios horizontales de criticidad previstos en la Ley de Medidas para la Protección de las Infraestructuras Criticas..", 
        "C. Más de tres de los criterios horizontales de criticidad previstos en la Ley de Medidas para la Protección de las Infraestructuras Criticas.."],
        correctAnswer: "B"
    },
    {
        question: "Respecto a los nacionales de terceros países hallados ilegamente en un Estado Miembro, ¿Cuándo va a proceder la comparación de sus datos con los del Sistema Central del Eurodac?",
        options: ["A. Cuando El nacional del país tercero o apátrida no solicite la protección internacional, pero solicita que le devuelvan a su país de origen, alegando que estaría en peligro.", 
        "B. Cuando el nacional del país tercero o apátrida declare que ha presentado una solicitud de protección internacional, pero que no indique el Estado miembro en que lo ha hecho.", 
        "C. Siempre va a proceder la comparación."],
        correctAnswer: "B"
    },
    {
        question: "Son competencias de los delegados de prevencion:",
        options: ["A. Acompañar a los tecnicos en las evaluaciones preventivas.", 
        "B. Acompañar a los inspectores de Trabajo y Seguridad Social en sus visitas.", 
        "C. Controlar el cumplimiento de la normativa."],
        correctAnswer: "C"
    },
    {
        question: "El organo competente para imponer la sancion puede practicar 'actuaciones complementarias', que en tal caso, debe dar traslado de nuevo al interesado para que formule alegaciones, a los que se les concedera un plazo para formular las alegaciones que estimen pertinentes:",
        options: ["A. De 15 dias.", 
        "B. De 10 dias.", 
        "C. De 7 dias."],
        correctAnswer: "C"
    },
    {
        question: "Despues de la Segundad Guerra Mundial los españoles emigran al continente europeo por:",
        options: ["A. Motivo laborales.", 
        "B. Motivos politicos.", 
        "C. Motivos sociales."],
        correctAnswer: "A"
    },
    {
        question: "Señale la respuesta correcta, los analistas de inteligencia:",
        options: ["A. Seleccionan a sus fuentes y obtienen informacion de las mismas, ya sean fuenten humanas, fuentes abiertas, imagenes, señales, o cualquier otro.", 
        "B. Contrastan la informacion obtenida y producen inteligencia mediante la aplicacion de tecnicas estructuradas y no estructuradas de inteligencia.", 
        "C. Dirigen la Unidad de Inteligencia, gestionan los recursos y planifican/priorizan las actividades en base a la Directiva de Inteligencia."],
        correctAnswer: "B"
    },
    {
        question: "La reforma de la Constitucion española operada el 27 de agosto de 992, ha sido realizada para facilitar a los extranjeros comunitarios el acceso:",
        options: ["A. Al regimen legal de extranjeria y al asilo politico, en su caso.", 
        "B. A participar en las elecciones para sufragio activo.", 
        "C. A participar en las elecciones municipales para sufragio pasivo."],
        correctAnswer: "C"
    },
    {
        question: "La obtencion de informacion en el ambito de OSINT de cuantos tipos puede ser:",
        options: ["A. Tres.", 
        "B. Cuatro.", 
        "C. Cinco."],
        correctAnswer: "A"
    },
    {
        question: "El Comite de seguridad y salud se reune trimestralmente, con lo que las empresas que cuenten con varios centros de trabajo dotados de Comite podran acordar con su trabajadores, la creacion de:",
        options: ["A. Un Comite de Centros.", 
        "B. Un Comite Intercentros.", 
        "C. Un Comite Interdisciplinar para Centros de trabajo."],
        correctAnswer: "B"
    },
    {
        question: "¿Quien ejerce la representacion global del Consejo como institucion comunitaria?",
        options: ["A. ministro-presidente del Consejo de Asuntos de Exterior.", 
        "B. ministro-presidente del Consejo de Asuntos Generales.", 
        "C. ministro-presidente del Consejo de Asuntos de la Presidencia."],
        correctAnswer: "B"
    },
    {
        question: "Su fuerza vinculante arranca desde la publicación en DOUE y no precisa de ningún acto de incorporación en el derecho interno de los estados miembros, dirigiéndose directamente al Estado o ciudadano, quien puede invocarlo ante los tribunales nacionales como fuente directa de derechos y obligaciones",
        options: ["A. Decisión.", 
        "B. Directiva.", 
        "C. Reglamento."],
        correctAnswer: "C"
    },
    {
        question: "Cuando una propuesta normativa afecte a la organización administrativa de la Administración General del Estado, a su régimen de personal, procedimientos y a la inspección de los servicios, será necesario:",
        options: ["A. Recabar la aprobación previa del Ministerio de Política Territorial antes de ser sometidas al órgano competente para promulgarlos..", 
        "B. Informe previo del Ministerio de Política Territorial.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Los órganos competentes podrán eximir de la implantación de medidas de seguridad obligatorias cuando las circunstancias que concurran en el caso concreto las hicieren Innecesarias o Improcedentes. ¿Es ésta  una norma extraída de la Ley de Seguridad Privada?",
        options: ["A. No, es contraria a las disposiciones de esta ley..", 
        "B. No, si bien se contempla en su Reglamento de desarrollo.", 
        "C. Si, la Ley así lo permite."],
        correctAnswer: "C"
    },
    {
        question: "A las empresas que se dediquen a las actividades de seguridad informática, entendida como el conjunto de medidas encaminadas a proteger los sistemas de información a fin de garantizar la confidencialidad, disponibilidad e integridad de la misma se les podrán imponer reglamentariamente requisitos específicos para garantizar la calidad de los servicios que presten:",
        options: ["A. Siempre que sean de seguridad privada.", 
        "B. Siempre que no sean de seguridad privada.", 
        "C. Sean o no de seguridad privada."],
        correctAnswer: "C"
    },
    {
        question: "A las reuniones de las Comisiones de Garantías de Videovigilancia podrán asistir, como asesores, expertos en materia de seguridad ciudadana, designados por:",
        options: ["A. El Delegado del Gobierno en la Comunidad Autónoma.", 
        "B. El Delegado o el Subdelegado de Gobierno.", 
        "C. El Fiscal Jefe del Tribunal Superior de Justicia en la Comunidad Autónoma correspondiente."],
        correctAnswer: "B"
    },
    {
        question: "En el caso de los menores, el consentimiento en relación al derecho a la intimidad cuando no pueda darse por ellos mismos, habrá de otorgarse mediante escrito por su representante legal, quien estará obligado a poner en conocimiento previo del Ministerio Fiscal el consentimiento proyectado. Si en el plazo de _______ el Ministerio Fiscal se opusiere, resolverá el juez.",
        options: ["A. 8 días.", 
        "B. 10 días", 
        "C. 15 días."],
        correctAnswer: "A"
    },
    {
        question: "De los principios rectores de la Ley de Enjuiciaminento Criminal relativos a la a la interceptación de las comunicaciones telefónicas y telemáticas, la captación y grabación de comunicaciones orales... El principio de especialidad:",
        options: ["A. Exige que una medida esté relacionada con la investigación de un delito concreto. No podrán autorizarse medidas de investigación tecnológica que tengan por objeto prevenir o descubrir delitos o despejar sospechas sin base objetiva..", 
        "B. Servirá para definir el ámbito objetivo y subjetivo y la duración de las medidas en virtud de su utilidad.", 
        "C. Establece que solo se aplicarán las medidas cuando no estén a disposición de la investigación otras medidas menos gravosas."],
        correctAnswer: "A"
    },
    {
        question: "La ley de accidentes del trabajo nace como respuesta a:",
        options: ["A. A la asusencia de cultura preventiva.", 
        "B. A consecuencia de la aparición de la Medicina del trabajo.", 
        "C. A las incesantes reivindicaciones ejercidas por los movimientos obreros en esta materia."],
        correctAnswer: "C"
    },
    {
        question: "El documento base que sirvió para la creación del Pacto Internacional de Derechos Económicos, Sociales y Culturales y el Pacto Internacional de Derechos Civiles y Políticos, fue:",
        options: ["A. La Carta de Naciones Unidas.", 
        "B. La Declaración Universal de los DDHH.", 
        "C. La Declaración de los Derechos del Hombre y del Ciudadano."],
        correctAnswer: "B"
    },
    {
        question: "Una opinión emitida sin comprobación previa, constituye:",
        options: ["A. Un juicio de valor.", 
        "B. Un prejuicio.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Cuando un grupo de personas que descienden de un tronco común, viven juntas y bajo la autoridad del mismo jefe, hablamos de:",
        options: ["A. Clan.", 
        "B. Aldea patriarcal.", 
        "C. Patriarcado."],
        correctAnswer: "A"
    },
    {
        question: "Para Sigmund Freud, el principio de la razón, se inscribe en:",
        options: ["A. En la conciencia.", 
        "B. En la consciencia.", 
        "C. En la inconsciencia."],
        correctAnswer: "B"
    },
    {
        question: "Son instrumentos consistentes en el otorgamiento de licencias y permisos que garantizan el disfrute de los recursos naturales previstos:",
        options: ["A. Instrumentos de mercado.", 
        "B. Instrumentos de regulación directa.", 
        "C. Instrumentos administrativos."],
        correctAnswer: "C"
    },
    {
        question: "Sobre esta parte del neumático se desarrolla el complicado proceso de adherencia:",
        options: ["A. Banda de rodamiento.", 
        "B. Carcasa.", 
        "C. Flanco."],
        correctAnswer: "B"
    },
    /* {
        question: "",
        options: ["A. .", 
        "B. ", 
        "C. ."],
        correctAnswer: "B"
    }, */

];


const lastExamQuestions = [
    {
        question: "¿Oué procedimiento regula la legislación española para los casos de llegada de desplazados que se producen en el marco de programas de evacuación humanitarios?",
        options: [
            "A. Procedimiento de emergencia.", 
            "B. procedimiento de readmisión.", 
            "C. Procedimiento de evacuación."
        ],
        correctAnswer: "C"
    },
    {
        question: "Los miembros de Subcomité de Prevención Contra la Tortura, deberán:",
        options: [
            "A. Ser expertos en materia de Derecho Penal Administración Penitenciaria o Policial.", 
            "B. Pertenecer a la Admintstracitm de Justicia.", 
            "C. De gran integridad moral y de reconocida competencia en la Administracion Publica."
        ],
        correctAnswer: "A"
    },
    {
        question: "La prórroga de un visado expedido en Esparta se llevará a cabo según lo establecido:",
        options: [
            "A. En el Derecho Español.", 
            "B. En el Derecho de la UE.", 
            "C. En el Derecho Inernacional."
        ],
        correctAnswer: "B"
    },
    {
        question: "Los Palacios Reales, ¿se reputan domicilio?",
        options: [
            "A. No, son un lugar público.", 
            "B. Si. cuando estén habitados por el Monarca a tiempo de la entrada.", 
            "C. Si. estén o no habitados por el Monarca a tiempo de la entrada."
        ],
        correctAnswer: "C"
    },
    {
        question: "La vivencia interna e individual del sexo tal y como cada persona la siente y autodefine, pudiendo o no corresponder con el sexo asignado al nacer, es lo que fa Ley 412023. de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI, define como.",
        options: [
            "A. Expresión de género.", 
            "B. Orientadón sexual.", 
            "C. Identidad sexual."
        ],
        correctAnswer: "C"
    },
    {
        question: "En un texto, cuando se quiere eludir una parte de una cita, los puntos suspensivos...",
        options: [
            "A. Se encierran entre paréntesis (...).", 
            "B. Se encierra entre corchetes: [...].", 
            "C. Se ponen simplemente tres puntos suspensivos."
        ],
        correctAnswer: "B"
    },
    {
        question: "La habilitación de los guardas rurales y sus especialidades crrespondera:",
        options: ["A. A la Consejería competente en materia de Medio Arrbierite de b Cornurtidad Autónoma en la que haya de ejercerse la actividad.", 
        "B. A la Dirección General de la Guardia Civil", 
        "C. A la Dirección General de la Policía."],
        correctAnswer: "B"
    },
    {
        question: "El Subcomité para la Prevención de Tortura, depende:",
        options: ["A. Del Comité contra la Tortura de la ONU.", 
        "B. Del Consejo de Europa.", 
        "C. De Naciones Unidas."],
        correctAnswer: "C"
    },
    {
        question: "Los Planes de Seguridad Ciudadana, son:",
        options: ["A. Proactivos.", 
        "B. Reactivos.", 
        "C. Globales."],
        correctAnswer: "C"
    },
    {
        question: "Los extranjeros residentes tienen derecho a los servicios y a las prestaciones sociales, tanto a las generales y básicas como a las específicas, en las mismas condiciones que los españoles y, en cualquier caso:",
        options: ["A. Los extranjeros con discapacidad.", 
        "B. Menores de dieciocho años.", 
        "C. A) y b) son correctas, cuando tengan su domicilio habitual en España."],
        correctAnswer: "C"
    },
    {
        question: "La jurisprudencia del TJUE pertenece al :",
        options: ["A. Derecho primario de la UE.", 
        "B. Derecho secundario de la UE.", 
        "C. Derecho subsidiario de la UE."],
        correctAnswer: "C"
    },
    {
        question: "¿A cuál de los siguientes criterios no atenderá el responsable del tratamiento para valorar si limita o suprime los datos de carácter personal obtenidos conforme a los fines de la LO 712021 transcurridos 3 años desde su obtención?",
        options: ["A. al tiempo transcurrido.", 
        "B. al carácter de los datos.", 
        "C. a la conclusión de una investigación o procedimiento penal."],
        correctAnswer: "A"
    },
    {
        question: "La entrada en territorio español del ciudadano de la Unión Europea se efectuará con:",
        options: ["A. El pasaporte válido y en vigor.", 
        "B. Con el documento de identidad válido y en vigor, en el que conste la nacionalidad del titular.", 
        "C. Ambas respuestas son ciertas."],
        correctAnswer: "C"
    },
    {
        question: "De qué delito es constitutivo el acceso carnal mediando violencia con una persona de quince años?",
        options: [
            "A. De un delito de abuso sexual en todo caso.", 
            "B. De un delito de agresiones sexuales a menores de dieciséis cualificado.", 
            "C. De un delito de violación."
        ],
        correctAnswer: "B"
    },
    {
        question: "Los puntos suspensivos, son: ",
        options: [
            "A. Signos simples.", 
            "B. Signos dobles.", 
            "C. Signos compuestos."
        ],
        correctAnswer: "A"
    },
    {
        question: "El delito es un término eminentemente:",
        options: [
            "A. Social.", 
            "B. Legal.", 
            "C. Policial."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Quién sufraga los gastos o paga al Subcomité para la Tortura?",
        options: [
            "A. ONG.", 
            "B. Naciones Unidas.", 
            "C. Los propios Estados."
        ],
        correctAnswer: "B"
    },
    {
        question: "Los tipos agravados de lesiones lo son por la/s siguiente/s circunstancia/s: ",
        options: [
            "A. En función del riesgo producido.", 
            "B. En función del daño causado.", 
            "C. Ambas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "Señale la respuesta incorrecta con respecto a actividades del Centro Nacional de Inteligencia:",
        options: [
            "A. Las actividades del Centro Nacional de Inteligencia, así como su organización interna, medios y procedimientos, personal, instalaciones, bases y centros de datos, fuentes de información y las informaciones o datos que puedan conducir al conocimiento de las anteriores materias, constituyen información clasificada. con el grado de secreto.", 
            "B. Los miembros del Centro Nacional de Inteligencia tendrán la consideración de agentes de la autoridad en todo momento.", 
            "C. Sus miembros dispondrán de documentación que les acredite, en caso de necesidad, como miembros del Centro."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Cuándo cesa el Gobierno en sus funciones?:",
        options: [
            "A. Tras la celebración de elecciones generales.", 
            "B. En los casos de pérdida de la confianza parlamentaria o en caso de dimisión o fallecimiento del Presidente.", 
            "C. Todas las respuestas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "El 11 de marzo de 2011, se produjo un accidente nuclear en la Central nuclear de Fukushuma. Dada la magnitud del incidente se decretó el estado de emergencia nuclear procediéndose a evacuar a la  población residente en otras zonas del país, dando lugar a una migración masiva. ¿A qué tipo de causa se podría achacar esta migración?",
        options: [
            "A. Natural.", 
            "B. Social.", 
            "C. Económico."
        ],
        correctAnswer: "A"
    },
    {
        question: "Cuando un individuo no acepta parte o todos los valores sociales, hablamos de: Seleccione una:",
        options: [
            "A. Inadaptado.", 
            "B. Delincuente.", 
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cuántos vicepresidentes asisten al Presidente de la Eurocámara?",
        options: [
            "A. 5.", 
            "B. 14.", 
            "C. 20."
        ],
        correctAnswer: "B"
    },
    {
        question: "Señale la respuesta correcta",
        options: [
            "A. El visado se solicitará y expedirá en las Misiones Diplomáticas y Oficinas Consulares de España, salvo en los supuestos excepcionales que se contemplen reglamentariamente o en los supuestos en los que el Estado español, de acuerdo con la normativa internacional sobre la materia, haya acordado su representación con otro Estado en materia de visados de tránsito o estancia..", 
            "B. El visado se solicitará y expedirá en las Misiones Diplomáticas y Oficinas Consulares de España, en todo caso.", 
            "C. El visado se solicitará y expedirá en las Misiones Diplomáticas y Oficinas Consulares de España, salvo en los supuestos excepcionales que se contemplen reglamentariamente o en los supuestos en los que el Estado español, de acuerdo con la normativa comunitaria sobre la materia, haya a cordado su representación con otro Estado miembro de la Unión Europea en materia de visados de tránsito o estancia."
        ],
        correctAnswer: "C"
    },
    {
        question: "Las deliberaciones de la Comisión General de Secretarios de Estado y Subsecretarios serán:",
        options: [
            "A. Reservadas.", 
            "B. Secretas.", 
            "C. Privadas."
        ],
        correctAnswer: "A"
    },
    {
        question: "La persona que se hubiera beneficiado de subvenciones o ayudas percibidas por su condición de víctima estará obligada a reembolsar las cantidades recibidas en dicho concepto y al abono de los gastos causados a la Administración por sus actuaciones de reconocimiento, información, protección apoyo si fuera condenada por:",
        options: [
            "A. Denuncia falsa.", 
            "B. Simulación de delito.", 
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "B"
    },
    {
        question: "El Tratado del Acta Única Europea (AUE), se firmó",
        options: [
            "A. El día 17 de Febrero de 1986 en Luxemburgo.", 
            "B. El 28 del mismo mes en La Haya.", 
            "C. Ambas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿A que sistema politico nos referimos cuando hablamos de la concentracion de todos los poderes estatales en manos de un grupo o partido impidiendo la presencia de otros partidos?",
        options: [
            "A. Autoritarismo.", 
            "B. Tirania.", 
            "C. Totalitarismo."
        ],
        correctAnswer: "C"
    },
    {
        question: "Es el conocimiento valorado sobre un hecho, situación, actividad o entorno con Incidencia en la seguridad pública:",
        options: [
            "A. Noticia.", 
            "B. Dato.", 
            "C. información."
        ],
        correctAnswer: "C"
    },
    {
        question: "Considerar que nuestra cultura es superior a las demás, es:",
        options: [
            "A. Grupocentnsmo étnico.", 
            "B. Etnocentrismo.", 
            "C. Las dos son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "Indica el número de faltas de ortografía en la frase: 'El huérfano fumaba marihuana delante de los pingüinos'",
        options: [
            "A. Dos.", 
            "B. Una.", 
            "C. Ninguna."
        ],
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de los siguientes no es una circunstancia que agrava la pena de los delitos de tenencia ilícita de armas de fuego reglamentadas",
        options: [
            "A. Carecen de marcas de fábrica o de número, o los tengan alterados o borrados..", 
            "B. Han sido introducidas ilegalmente en territorio español.", 
            "C. Han sido transformadas, aunque no modifiquen sus caracteristicas originales."
        ],
        correctAnswer: "C"
    },
    {
        question: "a orden europea de detención y entrega se tramitará y ejecutará con carácter de urgencia. Si la persona reclamada consiente la entrega, la resolución judicial deberá adoptarse en:",
        options: [
            "A. los diez días siguientes a la celebración de la audiencia.", 
            "B. los quince días siguientes a la celebración de la audiencia.", 
            "C. los sesenta días siguientes a la celebración de la audiencia."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según el artículo 564 del Código Penal, la tenencia de armas de fuego reglamentadas careciendo de licencias o permisos necesarios, será castigada con la pena de prisión de uno a dos años:",
        options: [
            "A. Solo si las armas carecen de marcas de fábrica o de número, o los tengan alterados o borrados..", 
            "B. Si se trata de armas cortas.", 
            "C. Si se trata de armas largas o cortas."
        ],
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de los siguiente no es uno de los ámbitos establecidos para las cláusulas freno: ",
        options: [
            "A. las medidas de coordinación de los regimenes de seguridad social de los trabajadores migrantes.", 
            "B. el establecimiento de normas comunes para determinadas infracciones penales.", 
            "C. la cooperación policial."
        ],
        correctAnswer: "C"
    },
    {
        question: "Se impondrá la pena de prisión de uno a seis años y multa de seis a doce meses si el delito de atentado contra la autoridad va dirigido contra determinadas autoridades. Señale cuál NO está incluida en este supuesto:",
        options: [
            "A. Miembros de las Corporaciones Locales.", 
            "B. Miembros del Gobierno.", 
            "C. Miembros del Tribunal de Cuentas."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de los siguientes órganos no podrá acudir a las reuniones de la Comisión General de Secretarios de Estado y Subsecretarios?",
        options: [
            "A. Secretario General.", 
            "B. Secretario General Técnico.", 
            "C. Subsecretario."
        ],
        correctAnswer: "B"
    },
    {
        question: "Según la Ley 50/1997, de 27 de noviembre, del Gobierno, ¿cuál de las siguientes facultades no podrá ejercer el Presidente del Gobierno en funciones?",
        options: [
            "A. Plantear la cuestión de confianza.", 
            "B. Interponer el recurso de inconstitucionalidad.", 
            "C. Impartir instrucciones a los demás miembros del Gobierno."
        ],
        correctAnswer: "A"
    },
    {
        question: "Las enfermedades contraídas como consecuencia del trabajo y que no estén consideradas legalmente como enfermedades profesionales serán consideradas, a efectos legales: ",
        options: [
            "A. Accidente de trabajo.", 
            "B. Enfermedad del trabajo.", 
            "C. Enfermedad no laboral."
        ],
        correctAnswer: "A"
    },
    {
        question: "Señala la palabra antónima de 'templanza'",
        options: [
            "A. Lujuria.", 
            "B. Prudencia.", 
            "C. Sobriedad."
        ],
        correctAnswer: "A"
    },
    {
        question: "Para Katz, la función instrumental de las actitudes sirve para:",
        options: [
            "A. Conocer el mundo donde vivimos.", 
            "B. Defendemos de frustraciones.", 
            "C. Satisfacer parte de nuestras necesidades."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Qué clase de valor es el amor?",
        options: [
            "A. Material.", 
            "B. Objetivo.", 
            "C. Subjetivo."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Qué sociólogo distinguia entre 'endogrupo' y 'exogrupo'?:",
        options: [
            "A. Gordon ALLPORT.", 
            "B. Robert MERTON.", 
            "C. Wlliam SUMMER."
        ],
        correctAnswer: "A"
    },
    {
        question: "Seguridad de facto, es:",
        options: [
            "A. La segundad objetiva que puede ser medida estadísticamente.", 
            "B. La segundad subjetiva.", 
            "C. La percibida por la sociedad."
        ],
        correctAnswer: "A"
    },
    {
        question: "En todo caso, los anteproyectos de ley habrán de ser informados por:",
        options: [
            "A. La Secretaria General Técnica.", 
            "B. La Secretaria Ministerial.", 
            "C. La Secretaría de Estado."
        ],
        correctAnswer: "A"
    },
    {
        question: "La responsabilidad sobre la custodia y el traslado de armas de titularidad de la empresa a la que pertenezca, es función del:",
        options: [
            "A. Jefe de seguridad.", 
            "B. Director de seguridad.", 
            "C. Vigilante de seguridad."
        ],
        correctAnswer: "A"
    },
    {
        question: "En el caso de pareja de hecho de un miembro comunitario, se considerará que se trata de una pareja estable aquella que acredite la existencia:",
        options: [
            "A. De un vinculo duradero.", 
            "B. En todo caso. se entenderá la existencia del vinculo si se acredita un tiempo de convivencia marital de, al menos, un año continuado.", 
            "C. Lo manifestado en las respuestas anteriores es correcto, salvo que tuvieran descendencia en común, en cuyo caso bastará la acreditación de convivencia estable debidamente probada."
        ],
        correctAnswer: "C"
    },
    {
        question: "Según establece la LOPSC en el caso de que un solo hecho constituya dos o más infracciones, o cuando una de ellas sea medio necesario para cometer la otra, la conducta será sancionada por aquella infracción que aplique una:",
        options: [
            "A. mayor graduación.", 
            "B. mayor sanción.", 
            "C. No podrá ser sancionada como infracción independiente."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Cuántos vocales componen el pleno del Observatorio Estatal de Violencia sobre la mujer en representación de los agentes sociales, organizaciones y asociaciones cívicas?",
        options: [
            "A. Diecisiete.", 
            "B. Diecinueve.", 
            "C. Catorce."
        ],
        correctAnswer: "B"
    },
    {
        question: "El grupo de personas que comparten comportamientos y creencias diferentes a los de la cultura dominante, constituye:",
        options: [
            "A. Una subcultura.", 
            "B. Una contracultura.", 
            "C. Una cultura dominante."
        ],
        correctAnswer: "A"
    },
    {
        question: "En internet, ¿qué se considera red de superficie?:",
        options: [
            "A. Surface Web.", 
            "B. Deep Web.", 
            "C. Dark Web."
        ],
        correctAnswer: "A"
    },
    {
        question: "La constatación, con posterioridad a la admisión a trámite de la solicitud de protección internacional, de alguna de las circunstancias que hubiesen justificado su no admisión : ",
        options: [
            "A. Será causa de denegación de aquella.", 
            "B. Será objeto de trámite por el procedimiento ordinario.", 
            "C. Las dos respuestas anteriores son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de los siguientes no es un método válido para acreditar las situaciones de violenciareguladas en la Ley 1/2004?",
        options: [
            "A. La orden de protección de la víctima.", 
            "B. Denuncia.", 
            "C. Sentencia judicial."
        ],
        correctAnswer: "B"
    },
    {
        question: "Es el órgano ejecutivo del Observatorio Estatal de Violencia sobre la Mujer?",
        options: [
            "A. La Comisión Permanente.", 
            "B. El Pleno.", 
            "C. Ninguna es correcta."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿De quién es la competencia de velar por el cumplimiento de la Ley y por la aplicación efectiva del principio de igualdad?",
        options: [
            "A. La Comisión Interministerial de Igualdad..", 
            "B. El Consejo de Participación de la Mujer.", 
            "C. Las Unidades de Igualdad."
        ],
        correctAnswer: "C"
    },
    {
        question: "Las Leyes sólo se derogan por:",
        options: [
            "A. Depende del caso concreto y de que trate la Ley.", 
            "B. Otras anteriores.", 
            "C. Otras posteriores."
        ],
        correctAnswer: "C"
    },
    {
        question: "El compromiso estratégico para la igualdad entre mujeres y hombres es una actividad basica de la UE, en concreto de:",
        options: [
            "A. La Comision Europea.", 
            "B. El Consejo de la UE.", 
            "C. El COnsejo Europeo."
        ],
        correctAnswer: "A"
    },
    {
        question: "Las formas de pensar, son:",
        options: [
            "A. Pautas de comportamiento internas.", 
            "B. Pautas de comportamiento externas.", 
            "C. No son pautas de comporamiento."
        ],
        correctAnswer: "A"
    },
    {
        question: "La personalidad modal, son:",
        options: [
            "A. Tipo de personalidad que se encuentra con mas frecuencia entre la gente de un pais.", 
            "B. la responsable en gran medida del caracter nacional.", 
            "C. Las dos son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "Las estadísticas policiales sobre delincuencia, constituyen:",
        options: [
            "A. Un dato objetivo.", 
            "B. Un dato subjetivo porque habria que añadir los delitos que no se denuncian.", 
            "C. Las dos son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "Una imagen sobre algo que se forma en nuestra mente, constituye:",
        options: [
            "A. Una idea.", 
            "B. Un valor.", 
            "C. Una actitud."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según la Ley Orgánica 7/2021, de 26 de mayo, de protección de datos personales tratados para fines de prevención, detección, investigación y enjuiciamiento de infracciones penates, en casos de urgencia o necesidad inaplazable será el responsable operativo de las Fuerzas y Cuerpos de Seguridad competentes el que podrá determinar su uso, siendo comunicada tal actuación al Delegado o Subdelegado del Gobierno o autoridad competente de las comunidades autónomas. con la mayor brevedad posible, y siempre en el plazo de:",
        options: [
            "A. 24 horas.", 
            "B. 48 horas", 
            "C. 72 horas."
        ],
        correctAnswer: "A"
    },
    {
        question: "El Capítulo VI de la Ley 39/1997, de 17 de enero, por el que se aprueba el Reglamento de los Servicios de Prevención, está dedicado a las: Funciones y Niveles de Cualificación. Respecto a las funciones se establecen tres grupos, ¿cuál de las siguientes respuestas se corresponde con las funciones de nivel superior?",
        options: [
            "A. Las correspondientes a especialidades y disciplinas preventivas de medicina en el trabajo..", 
            "B. Además de la a), las de seguridad en el trabajo, higiene industrial, y ergonomia y psicosociología aplicada.", 
            "C. La respuesta correcta es la a), la b) queda invalidada por el término ergonomía, ya que esta disciplina tecnológica no se encuadra dentro de la prevención de riesgos laborales."
        ],
        correctAnswer: "B"
    },
    {
        question: "Cuando la víctima de un delito es un juez o un policía, se denomina:",
        options: [
            "A. Victimización policial o victimización judicial según el caso.", 
            "B. Victimización legal.", 
            "C. Las dos respuestas son falsas."
        ],
        correctAnswer: "C"
    },
    {
        question: "'Es correcto afirmar con respecto a lo establecido en la Ley Orgánica 3/1981 del Defensor del Pueblo:",
        options: [
            "A. Que la actividad de este cesará en los supuestos en los que se declaren los estados de excepción o sitio.", 
            "B. Que pueden dirigirse al Defensor del Pueblo personas naturales españolas, que invoquen un interés legitimo..", 
            "C. Que podrá iniciar o proseguir de oficio o petición de parte, ya que el Defensor del Pueblo actúa con autonomía y según su criterio."
        ],
        correctAnswer: "C"
    },
    {
        question: "Estudia las condiciones del medio ambiente de trabajo, identificando, evaluando y controlando la contaminación de origen laboral",
        options: [
            "A. Medicina del Trabajo.", 
            "B. Higiene Industrial.", 
            "C. Seguridad en el Trabajo."
        ],
        correctAnswer: "B"
    },
    {
        question: "En caso de muerte de dos o más personas llamadas a sucederse, para determinar quien de ellas ha muerto primero, el Código Civil sienta la presunción de: ",
        options: [
            "A. Conmoriencia.", 
            "B. Premoriencia.", 
            "C. Las dos respuestas pueden ser correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: " ¿Qué teoría mantiene la tesis de que un Individuo se vuelve delincuente al estar más frecuentemente en relación con modelos criminales que con modelos no criminales?",
        options: [
            "A. Teoria del aprendizaje social.", 
            "B. Teoria de la subcultura desviada.", 
            "C. Teoría de la estructura social defectuosa."
        ],
        correctAnswer: "B"
    },
    {
        question: "El visado de estancia:",
        options: [
            "A. Habilita para una estancia ininterrumpida o estancias sucesivas por un periodo o suma de periodos cuya duración total no exceda de seis meses por semestre a partir de la fecha de la primera entrada.", 
            "B. Habillta para una estancia Ininterrumpida o estancias sucesivas por un periodo o suma de periodos cuya duración total no exceda de tres meses por semestre a partir de la fecha de la primera entrada..", 
            "C. Habilita e transitar por la zona de tránsito internacional de un aeropuerto español o a atravesar el territorio español."
        ],
        correctAnswer: "B"
    },
    {
        question: "Con carácter previo al acuerdo de inicio de un procedimiento para determinar la posible existencia de una infracción de protección de datos podrá existir una fase de actuaciones previas de investigación:",
        options: [
            "A. En los casos en que se dé por admitida la tramitación de la reclamación de un particular.", 
            "B. En los supuestos en que la Agencia Española de Protección de Datos actúe por propia iniciativa.", 
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "NO pueden presentar la solicitud de asilo en España:",
        options: [
            "A. Los ciudadanos de un Estado de la Unión Europea que se sientan perseguidos en su país por razones ideológicas.", 
            "B. Los apátridas.", 
            "C. Los menores de edad."
        ],
        correctAnswer: "A"
    },
    {
        question: "El segundo nivel de comunicación en materia de Violencia de Género lo compone:",
        options: [
            "A. La sala del 091.", 
            "B. La Sala de Coordinación Operativa de la Comisaria General.", 
            "C. El funcionario policial que tiene asignado el caso."
        ],
        correctAnswer: "A"
    },
    {
        question: "Son fundamentos del Convenio de Estambul:",
        options: [
            "A. Destacar la importancia de una actuación coordinada de todos los organismos y servicios oficiales pertinentes.", 
            "B. Hacer un llamamiento exclusivo a los poderes públicos.", 
            "C. Prevenir acciones judiciales contra los agresores."
        ],
        correctAnswer: "A"
    },
    {
        question: "El deber de sigilo profesional de un delegado de prevención se establece:",
        options: [
            "A. Sobre los datos que conozcan en el ejercicio de sus funciones preventivas, organizativas y de protección de sus compañeros.", 
            "B. Sobre todos los datos que conozca.", 
            "C. Sobre los datos que conozcan en el ejercicio de sus funciones preventivas."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿El derecho a contraer matrimonio y al divorcio, en qué grupo de los derechos de la Declaración Universal lo podemos encontrar?:",
        options: [
            "A. Derechos de orden personal.", 
            "B. Derechos del individuo en sus relaciones con los grupos.", 
            "C. Libertades políticas."
        ],
        correctAnswer: "B"
    },
    {
        question: "Segun establece el articulo 34 de la Ley del Estatuto de las Víctimas del Delito:",
        options: [
            "A. Los oderes públicos fomentarán campañas de sensibilización social en favor de las víctimas, así como la autorregulación de los medios de comunicación social de titularidad privada.", 
            "B. Los poderes públicos fomentarán campañas de sensibilización social en favor de las víctimas, así como la autorregulación de los medios de comunicación social de titularidad pública..", 
            "C. Los poderes públicos fomentarán campañas de sensibilización social en favor de las víctimas, así coma la autorregulación de los medios de comunicación social de titularidad pública y privada."
        ],
        correctAnswer: "C"
    },
    {
        question: "Señala la respuesta correcta",
        options: [
            "A. Las Fuerzas y Cuerpos de Seguridad tienen como misión proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana.", 
            "B. Las Fuerzas y Cuerpos de Seguridad tienen como misión garantizar el libre ejercicio de los derechos y libertades y proteger la seguridad ciudadana.", 
            "C. Las Fuerzas y Cuerpos de seguridad tiene como mision proteger el libre ejercicio de la seguridad y la libertad y garantizar los derechos."
        ],
        correctAnswer: "A"
    },
    {
        question: "Es incorrecto afirmar, según lo establecido en el Titulo II de la Constitución española del 1978:",
        options: [
            "A. Que el Rey acredita a los embajadores y otros representantes diplomáticos.", 
            "B. Que de los actos del Rey serán responsables las personas que los refrenden.", 
            "C. Al Rey corresponde, previa autorización del Congreso de los Diputados, declarar la guerra y hacer la paz."
        ],
        correctAnswer: "C"
    },
    {
        question: "El artículo 14 de la Ley de Seguridad Privada establece la especial obligación de colaboración de las empresas de seguridad, los despachos de detectives y el personal de seguridad privada con las Fuerzas y Cuerpos de Seguridad se desarrollará con sujeción al principio de: ",
        options: [
            "A. Legalidad.", 
            "B. Subordinación.", 
            "C. Coordinación."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Qué debe de ocurrir para que un funcionario de carrera, que ha renunciado a su condición de funcionario, pierda esta?",
        options: [
            "A. Con su renuncia basta para perder la condición de funcionario de carrera.", 
            "B. La pérdida de la condición de funcionario de carrera previa renuncia del interesado, se produce con la aceptación de la renuncia por parte de la Administración, extinguiéndose en ese momento la relación funcionarial.", 
            "C. Para perder la condición de funcionario de carrera previa renuncia del interesado, se produce con la aceptación de su Jefe inmediato de dicha renuncia, asi como por parte de la Administración, extinguiéndose en ese momento la relación funcionarial."
        ],
        correctAnswer: "B"
    },
    {
        question: "Señale la respuesta correcta en relación a los Delegados de Prevención:",
        options: [
            "A. En las empresas de hasta treinta trabajadores el Delegado de Prevención será el Delegado de Personal.", 
            "B. En las empresas de hasta 49 trabajadores el Delegado de Prevención será el Delegado de Personal.", 
            "C. En las empresas de 1 hasta 49 trabajadores habrá un Delegado de Prevención será elegido por y entre los delegados de Personal."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según la Ley 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, los Tribunales y órganos de selección del personal de la Administración General del Estado responderán al principio o principios de:",
        options: [
            "A. Presencia equilibrada de mujeres y hombre.", 
            "B. Paridad entre hombres y mujeres.", 
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "La movilización de los servicios de policía, asistencia o salvamento por un aviso falso de bomba constituirá:",
        options: [
            "A. Un delito de denuncia falsa.", 
            "B. Una simulación de delito.", 
            "C. Un delito de perturbación del orden público."
        ],
        correctAnswer: "C"
    },
    {
        question: "Señale cuál de las siguientes no es una de las dependencias que el artículo 2 del Real Decreto 865/2001, de 20 de julio, por el que se aprueba el Reglamento de reconocimiento del estatuto de apátrida reconoce como habilitada para solicitar el estatuto de apátrida.",
        options: [
            "A. Oficina de Asilo y refugio.", 
            "B. Centro Internamiento Extranjeros.", 
            "C. Comisarias de Policía."
        ],
        correctAnswer: "B"
    },
    {
        question: "Señale la respuesta correcta:",
        options: [
            "A. EI agente encubierto informático podrá intercambiar o enviar por sí mismo archivos ilícitos por razón de su contenido y analizar los resultados de los algoritmos aplicados para la identificación de dichos archivos ilícitos.", 
            "B. El agente encubierto informático, con autorización específica para ello, podrá intercambiar o enviar por si mismo archivos ilícitos por razón de su contenido y analizar los resultados de los algoritmos aplicados para la identificación de dichos archivos ilícitos.", 
            "C. El agente encubierto informático no podrá intercambiar o enviar archivos ilícitos por razón de su contenido y analizar los resultados de los algoritmos aplicados para la identificación de dichos archivos ilícitos."
        ],
        correctAnswer: "B"
    },
    {
        question: "Las migraciones entre zonas de una misma ciudad, se denominan:",
        options: [
            "A. Intraurbanas.", 
            "B. Interurbanas.", 
            "C. Extralocales."
        ],
        correctAnswer: "A"
    },
    {
        question: "Las actividades que constituyen el objeto de una peculiar carrera o profesion se ejercen por funcionarios integrados en:",
        options: [
            "A. El Cuerpo Superior de las Administraciones Civiles del Estado.", 
            "B. Cuerpos Especiales.", 
            "C. Cuerpos de Gestión."
        ],
        correctAnswer: "B"
    },
    {
        question: "En el caso de un procedimiento por falta de atención de una solicitud de ejercicio de los derechos establecidos en los artículos 15 a 22 del Reglamento (UE) 2016/1679, este se iniciará por",
        options: [
            "A. Acuerdo de admisión a trámite.", 
            "B. Por iniciativa propia.", 
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "Para la adquisición de la nacionalidad española por opción, carta de naturaleza o necesario: (pregunta examen 2021)",
        options: [
            "A. Que el mayor de edad y capaz para prestar una declaración por sí, jure o prometa fidelidad obediencia a la Constitución y a las leyes.", 
            "B. Que el mayor de catorce años y capaz para prestar una declaración por sí, jureo o prometa fidelidad al rey y obediencia a la Constitución y a las leyes.", 
            "C. Que el mayor de dieciséis años y capaz para prestar una declaración por si, jure o prometa fidelidad al rey y obediencia a la Constitución y a las leyes.."
        ],
        correctAnswer: "B"
    },
    {
        question: "Las migraciones, en función de las causas que las producen, pueden clasificaras como:",
        options: [
            "A. Internas, voluntarias y forzosas.", 
            "B. Voluntarias y forzosas.", 
            "C. Laborales, por estudios o por motivos políticos."
        ],
        correctAnswer: "B"
    },
    {
        question: "Una de las categorías de empleados público que recoge el Estatuto Básico del Empleado Público es el personal laboral, el cual:",
        options: [
            "A. Presta servicios retribuidos por las Administraciones Públicas en virtud de nombramiento legal.", 
            "B. Su procedimiento de selección es público, rigiéndose en todo caso por los principios de igualdad, mérito e idoneidad.", 
            "C. En el caso del personal laboral temporal se regirá su selección por el principio de celeridad, teniendo por finalidad atender razones expresamente justificadas de necesidad y urgencia."
        ],
        correctAnswer: "C"
    },
    {
        question: "Para proceder por los delitos de descubrimiento y revelación de secretos será siempre necesaria denuncia:",
        options: [
            "A. De la persona agraviada o de su representante legal.", 
            "B. De la persona agraviada.", 
            "C. Ninguna de las respuestas es correcta."
        ],
        correctAnswer: "C"
    },
    {
        question: "Las ideas y las creencias son pautas de comportamiento de carácter:",
        options: [
            "A. Interno.", 
            "B. Externo.", 
            "C. No son pautas de comportamiento."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿En qué consiste el conocido como fenómeno Brain-Drain?",
        options: [
            "A. la emigración del campo a la ciudad.", 
            "B. Traslado de mentes privilegiadas de unas naciones a otras.", 
            "C. Repoblación de un territorio de manera impulsada."
        ],
        correctAnswer: "B"
    },
    {
        question: "Señala la respuesta correcta:",
        options: [
            "A. Los títulos no deben llevar al final coma, punto y coma o dos puntos, pero si punto final.", 
            "B. Los títulos rió deben llevar al final punto, coma, punto y coma o dos puntos.", 
            "C. Los títulos deben llevar al final el signo simple o sencillo que requiera la frase."
        ],
        correctAnswer: "B"
    },
    {
        question: "Se especifican en el artículo 62 de la Constitución española las funciones de la figura del Rey. Entre ellas no figura:",
        options: [
            "A. La sanción y promulgación de las leyes.", 
            "B. El ejercicio del derecho de gracia y la autorización de indultos generales.", 
            "C. Proponer al candidato a Presidente del Gobierno y en su caso, nombrarlo."
        ],
        correctAnswer: "B"
    },
    {
        question: "Según la Declaración Universal de los DDHH, toda persona tiene derecho a:",
        options: [
            "A. lgual salario para todos.", 
            "B. A la protección contra el trabajo.", 
            "C. Al descanso."
        ],
        correctAnswer: "C"
    },
    {
        question: "Aquella persona que tiene un vínculo nacional con un Estado, pero no es tratado como un habitante ni Puede disfrutar de los derechos fundamentales en el país es:",
        options: [
            "A. Apátrida de derecho.", 
            "B. Apátrida de hecho.", 
            "C. Apátrida de justicia."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Qué documento sirvió de base para lo que más tarde pasaría a ser la Declaración Universal de los DDHH?:",
        options: [
            "A. la Carta de las Naciones Unidas.", 
            "B. La Carta de la Sociedad de Naciones.", 
            "C. Las dos respuestas son falsas."
        ],
        correctAnswer: "A"
    },
    {
        question: "Las migraciones entre zonas de una misma ciudad son:",
        options: [
            "A.Migraciones interurbanas .", 
            "B. Migraciones intraurbanas.", 
            "C. Ninguna es correcta."
        ],
        correctAnswer: "B"
    },
];


let currentQuestions = [];
let correctAnswers = 0;
let wrongAnswers = 0;

document.getElementById('testButton').addEventListener('click', () => {
    const questionCount = parseInt(document.getElementById('questionCount').value);
    const selectedTopic = document.getElementById('topicSelect').value;

    if (selectedTopic === 'all') {
        currentQuestions = shuffle(questions).slice(0, questionCount);
    } else {
        const filteredQuestions = questions.filter(q => q.topic === parseInt(selectedTopic));
        currentQuestions = shuffle(filteredQuestions).slice(0, questionCount);
    }

    correctAnswers = 0;
    wrongAnswers = 0;
    displayTest();
    hideAllSections();
    document.getElementById('testSection').classList.remove('hidden');
});

document.getElementById('viewAllButton').addEventListener('click', () => {
    hideAllSections();
    displayAllQuestions();
    document.getElementById('allQuestionsSection').classList.remove('hidden');
});

document.getElementById('lastExamButton').addEventListener('click', () => {
    hideAllSections();
    currentQuestions = [...lastExamQuestions];
    correctAnswers = 0;
    wrongAnswers = 0;
    displayTest();
    document.getElementById('testSection').classList.remove('hidden');
});

function displayTest() {
    const testSection = document.getElementById('testSection');
    testSection.innerHTML = '';
    currentQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul>
                ${question.options.map((option, i) => `<li data-question-index="${index}" data-option-index="${i}" class="option">${option}</li>`).join('')}
            </ul>
        `;
        testSection.appendChild(questionDiv);
    });

    testSection.classList.remove('hidden');
    document.querySelectorAll('#testSection ul li').forEach(li => {
        li.addEventListener('click', handleAnswerClick);
    });
}

function handleAnswerClick(event) {
    const questionIndex = event.target.getAttribute('data-question-index');
    const optionIndex = event.target.getAttribute('data-option-index');
    const question = currentQuestions[questionIndex];
    const selectedOption = question.options[optionIndex];

    const listItems = event.target.parentNode.querySelectorAll('li');
    listItems.forEach(li => li.classList.remove('correct', 'incorrect', 'default'));

    if (!event.target.classList.contains('selected')) {
        if (selectedOption.startsWith(question.correctAnswer)) {
            correctAnswers++;
            event.target.classList.add('correct');
        } else {
            wrongAnswers++;
            event.target.classList.add('incorrect');
            listItems.forEach(li => {
                if (li.textContent.startsWith(question.correctAnswer)) {
                    li.classList.add('correct');
                }
            });
        }

        listItems.forEach(li => {
            if (!li.classList.contains('correct') && !li.classList.contains('incorrect')) {
                li.classList.add('default');
            }
        });

        event.target.classList.add('selected'); // Marca la opción seleccionada como 'selected'
        listItems.forEach(li => li.removeEventListener('click', handleAnswerClick)); // Desactiva el resto de opciones
        calculateFinalScore();
    }
}

function calculateFinalScore() {
    const totalQuestions = currentQuestions.length;
    const score = ((correctAnswers - (wrongAnswers / 2)) / totalQuestions) * 10;
    const scoreSection = document.createElement('div');
    scoreSection.classList.add('note-section');
    scoreSection.textContent = `Nota final: ${score.toFixed(2)}`;
    const existingScoreSection = document.querySelector('.note-section');
    if (existingScoreSection) {
        existingScoreSection.remove();
    }
    document.querySelector('main').appendChild(scoreSection);
}

function displayAllQuestions() {
    const allQuestionsSection = document.getElementById('allQuestionsSection');
    allQuestionsSection.innerHTML = '';
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul>
                ${question.options.map(option => {
                    const isCorrect = option.startsWith(question.correctAnswer);
                    return `<li class="${isCorrect ? 'correct' : ''}">${option}</li>`;
                }).join('')}
            </ul>
        `;
        allQuestionsSection.appendChild(questionDiv);
    });

    allQuestionsSection.classList.remove('hidden');
}

function hideAllSections() {
    document.getElementById('testSection').classList.add('hidden');
    document.getElementById('allQuestionsSection').classList.add('hidden');
    document.getElementById('lastExamSection').classList.add('hidden');
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
