// Las claves coinciden con los slug de projects.js. Showcase alimenta el explorador; features es la alternativa de texto cuando no hay funcionalidades en showcase.

export const projectDetails = {
  trailscope: {
    intro:
      "TrailScope es una aplicación web desarrollada con React para descubrir rutas de senderismo y lugares naturales a través de mapas interactivos. Reúne en un mismo espacio diferentes herramientas para organizar actividades al aire libre. Además, permite registrar recorridos completados y consultar estadísticas de actividad, ofreciendo una experiencia visual, práctica y organizada para los amantes de la naturaleza.",

    problem: "La información para descubrir rutas, consultar el tiempo y planificar escapadas suele encontrarse en diferentes herramientas.",

    solution: "TrailScope reúne exploración, mapas, favoritos, planificación y seguimiento de rutas en una misma aplicación web.",

    features: ["Exploración de rutas y lugares naturales mediante mapas.", "Guardado y consulta de favoritos.", "Planificación de escapadas.", "Consulta de información meteorológica.", "Registro y seguimiento de rutas completadas."],

    decisions: [
      {
        title: "Mapas interactivos",
        description: "Integración de MapLibre GL JS y OpenStreetMap para visualizar información geográfica.",
      },
      {
        title: "Integraciones externas",
        description: "Consumo de Overpass API y Open-Meteo, contemplando la gestión de errores.",
      },
      {
        title: "Persistencia",
        description: "Uso de localStorage para conservar información en el navegador.",
      },
    ],

    showcase: [
      {
        id: "explorar",
        title: "Explorar rutas y lugares",
        description: "Descubre rutas de senderismo y lugares naturales mediante un mapa interactivo, consulta sus detalles y explora diferentes zonas.",
        image: `${import.meta.env.BASE_URL}images/trailscope/explorar.PNG`,
      },
      {
        id: "favoritos",
        title: "Guardar favoritos",
        description: "Guarda las rutas y lugares que te interesan para tenerlos organizados y consultarlos cuando los necesites.",
        image: `${import.meta.env.BASE_URL}images/trailscope/favoritos.PNG`,
      },
      {
        id: "escapadas",
        title: "Planificar escapadas",
        description: "Organiza salidas seleccionando fechas, rutas y lugares, y reúne la información necesaria para preparar tu próxima escapada.",
        image: `${import.meta.env.BASE_URL}images/trailscope/escapadas.PNG`,
      },
      {
        id: "meteorologia",
        title: "Consultar meteorología",
        description: "Accede a información meteorológica para conocer las condiciones previstas antes de realizar una ruta.",
        image: `${import.meta.env.BASE_URL}images/trailscope/meteorologia.PNG`,
      },
      {
        id: "completadas",
        title: "Registrar rutas completadas",
        description: "Consulta tus rutas realizadas y revisa el historial de tu actividad, incluyendo las estadísticas disponibles.",
        image: `${import.meta.env.BASE_URL}images/trailscope/completadas.PNG`,
      },
    ],
  },

  jobtrack: {
    intro:
      "JobTrack es una aplicación web desarrollada con HTML, CSS y JavaScript para organizar y gestionar oportunidades profesionales durante la búsqueda de empleo. Permite registrar candidaturas, consultar su estado, actualizar información y controlar los próximos seguimientos desde una misma interfaz. Incluye herramientas de búsqueda, filtrado y ordenación, así como almacenamiento local para conservar los registros entre sesiones.",

    problem: "Durante una búsqueda de empleo es habitual gestionar varias candidaturas al mismo tiempo. Recordar las empresas, las fechas, el estado de cada oportunidad y los próximos seguimientos puede resultar complicado cuando toda esa información está dispersa.",

    solution: "Desarrollé una aplicación que centraliza las oportunidades profesionales en un mismo espacio. JobTrack permite registrar, consultar, editar y organizar las candidaturas, facilitando el seguimiento de cada proceso mediante una interfaz visual y funcional.",

    features: [
      "Registro de oportunidades profesionales.",
      "Visualización y seguimiento de candidaturas.",
      "Búsqueda, filtrado y ordenación de oportunidades.",
      "Edición y eliminación de registros.",
      "Gestión de estados y próximos seguimientos.",
      "Persistencia mediante localStorage.",
    ],

    showcase: [
      {
        id: "nueva-oportunidad",
        title: "Registrar oportunidades",
        description: "Añade nuevas oportunidades indicando el puesto, la empresa, la fecha, el estado, el enlace de la oferta y el próximo seguimiento.",
        image: `${import.meta.env.BASE_URL}images/jobtrack/nueva-oportunidad.PNG`,
      },
      {
        id: "candidaturas",
        title: "Consultar candidaturas",
        description: "Visualiza las oportunidades registradas mediante tarjetas que muestran su información principal, estado y próximos pasos.",
        image: `${import.meta.env.BASE_URL}images/jobtrack/candidaturas.PNG`,
      },
      {
        id: "filtros",
        title: "Buscar y filtrar",
        description: "Localiza candidaturas mediante búsquedas por puesto o empresa, filtra por estado y organiza las oportunidades según su seguimiento.",
        image: `${import.meta.env.BASE_URL}images/jobtrack/filtros.PNG`,
      },
      {
        id: "edicion",
        title: "Editar oportunidades",
        description: "Modifica los datos de una candidatura existente para mantener actualizada la información a medida que avanza el proceso de selección.",
        image: `${import.meta.env.BASE_URL}images/jobtrack/edicion.PNG`,
      },
      {
        id: "seguimiento",
        title: "Estados y seguimiento",
        description: "Consulta el estado de las candidaturas y las fechas de próximos seguimientos para organizar mejor las acciones pendientes.",
        image: `${import.meta.env.BASE_URL}images/jobtrack/seguimiento.PNG`,
      },
    ],

    decisions: [
      {
        title: "JavaScript y DOM",
        description: "Desarrollo de las interacciones mediante JavaScript y manipulación del DOM para actualizar dinámicamente la interfaz.",
      },
      {
        title: "Operaciones CRUD",
        description: "Implementación de las operaciones de creación, lectura, actualización y eliminación de oportunidades profesionales.",
      },
      {
        title: "Persistencia local",
        description: "Uso de localStorage para conservar los registros en el navegador sin necesidad de implementar un backend.",
      },
      {
        title: "Búsqueda y organización",
        description: "Implementación de filtros, búsquedas y ordenación para facilitar la consulta de las oportunidades almacenadas.",
      },
    ],
  },

  devshelf: {
    intro:
      "DevShelf es mi primer proyecto web desarrollado desde cero, creado para consolidar mis conocimientos de HTML, CSS y JavaScript. Consiste en una web que presenta una colección de proyectos mediante tarjetas visuales, navegación entre secciones y filtros interactivos. Durante su construcción trabajé especialmente la estructura de páginas, el diseño responsive, la manipulación del DOM y el flujo de trabajo con Git y GitHub. Fue el punto de partida para comenzar a desarrollar proyectos frontend con mayor autonomía.",

    problem:
      "Aunque ya conocía los fundamentos de HTML, CSS y JavaScript, necesitaba aplicarlos conjuntamente en un proyecto propio. El principal reto era pasar de practicar conceptos por separado a organizar y construir una página web completa, cuidando tanto su estructura como su presentación visual.",

    solution:
      "Construí DevShelf como una primera web de presentación de proyectos, con una estructura organizada, tarjetas visuales y filtros desarrollados con JavaScript. El proyecto me permitió practicar la maquetación responsive, la interacción con el DOM y el proceso de desarrollo, versionado y publicación de una aplicación web.",

    features: ["Página inicial de presentación.", "Galería de proyectos mediante tarjetas.", "Filtrado de proyectos por categorías.", "Sección informativa sobre el proyecto.", "Diseño adaptable a diferentes dispositivos."],

    showcase: [
      {
        id: "inicio",
        title: "Presentación inicial",
        description: "La página principal presenta la identidad de DevShelf y permite acceder a sus diferentes secciones mediante una navegación sencilla.",
        image: `${import.meta.env.BASE_URL}images/devshelf/inicio.PNG`,
      },
      {
        id: "proyectos",
        title: "Galería de proyectos",
        description: "Las tarjetas organizan los ejemplos de proyectos mediante títulos, categorías, descripciones y tecnologías, facilitando la exploración visual del contenido.",
        image: `${import.meta.env.BASE_URL}images/devshelf/proyectos.PNG`,
      },
      {
        id: "filtros",
        title: "Filtros interactivos",
        description: "Los filtros permiten mostrar únicamente los proyectos de una categoría seleccionada. La interfaz se actualiza mediante JavaScript sin necesidad de recargar la página.",
        image: `${import.meta.env.BASE_URL}images/devshelf/filtros.PNG`,
      },
      {
        id: "about",
        title: "Información del proyecto",
        description: "Una sección informativa presenta el propósito de DevShelf y su relación con el aprendizaje y la práctica del desarrollo frontend.",
        image: `${import.meta.env.BASE_URL}images/devshelf/about.PNG`,
      },
    ],

    decisions: [
      {
        title: "HTML semántico",
        description: "Organización del contenido mediante elementos HTML semánticos para construir una estructura clara, comprensible y mantenible.",
      },
      {
        title: "CSS y responsive design",
        description: "Construcción de layouts y componentes visuales utilizando CSS, trabajando la distribución de elementos, los espaciados y la adaptación a diferentes tamaños de pantalla.",
      },
      {
        title: "JavaScript y DOM",
        description: "Implementación de filtros interactivos mediante eventos, atributos de datos y manipulación del DOM para mostrar u ocultar proyectos según su categoría.",
      },
      {
        title: "Git y GitHub Pages",
        description: "Utilización de Git para registrar los cambios del proyecto y GitHub para almacenar el repositorio y publicar una versión accesible desde el navegador.",
      },
    ],
  },
};
