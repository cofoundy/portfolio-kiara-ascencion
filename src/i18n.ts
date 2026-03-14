// i18n translations — EN is the default rendered language.
// ES and DE override via client-side JS.

export const translations: Record<string, Record<string, string>> = {
  es: {
    // Nav
    "nav.about": "Acerca de",
    "nav.expertise": "Experiencia Técnica",
    "nav.research": "Investigación",
    "nav.experience": "Trayectoria",
    "nav.beyond": "Más allá",
    "nav.contact": "Contacto",
    "nav.close": "Cerrar",

    // Hero
    "hero.title": "Ingeniera de Ontologías | Especialista en Grafos de Conocimiento",
    "hero.tagline": "Construyendo puentes entre datos y significado a través de grafos de conocimiento y tecnologías semánticas.",
    "hero.stat.0": "Proyectos de Investigación",
    "hero.stat.1": "Publicaciones",
    "hero.stat.2": "Idiomas",

    // About
    "about.heading": "Acerca de",
    "about.languages": "Idiomas",
    "about.current": "Actual",
    "about.previous": "Anterior",
    "about.certifications": "Certificaciones",
    "about.bio": "Soy una Ingeniera de Ontologías que transforma información no estructurada en conocimiento interconectado. Mi camino me llevó de Perú a Taiwán para estudiar negocios, y luego a Alemania donde descubrí mi pasión por las tecnologías de la web semántica. Después de más de 4 años liderando proyectos de investigación en Fraunhofer IIS y TH Nuremberg — construyendo ontologías para la economía del hidrógeno, desarrollando pipelines de NLP y publicando en conferencias de primer nivel como ISWC — he hecho la transición a la industria como Consultora Técnica en metaphacts, ayudando a organizaciones a aprovechar el poder de los grafos de conocimiento.",
    "about.jobtitle.0": "Consultora Técnica",
    "about.jobtitle.1": "Consultora Externa",

    // Expertise
    "expertise.heading": "Experiencia Técnica",
    "expertise.subtitle": "Arquitectura del Conocimiento",
    "expertise.legend.core": "Núcleo",
    "expertise.legend.semantic": "Web Semántica",
    "expertise.legend.ai": "IA / NLP",
    "expertise.legend.tools": "Herramientas",

    // Research
    "research.heading": "Investigación",
    "research.subtitle": "Proyectos",
    "research.publications": "Publicaciones",
    "research.opensource": "Código Abierto",
    "research.0.role": "Líder de Proyecto, Ingeniera de Ontologías",
    "research.0.desc": "Aprovechando tecnologías de la Web Semántica para construir una base de conocimiento basada en IA para investigación de celdas de combustible de hidrógeno, estructurando la investigación internacional y facilitando el intercambio de conocimiento.",
    "research.1.role": "Líder de Proyecto, Ingeniera de Ontologías y Grafos de Conocimiento",
    "research.1.desc": "Creando una herramienta analítica basada en grafos para investigación de celdas de combustible utilizando NLP y tecnologías de la web semántica para procesar grandes cantidades de datos textuales y generar predicciones para la economía del hidrógeno.",
    "research.2.role": "Líder de Proyecto, Ingeniera de Grafos de Conocimiento",
    "research.2.desc": "Identificación automática de contactos de clientes relevantes a partir de datos textuales no estructurados mediante un enfoque de NLP personalizado, transformando la identificación heurística de leads en un proceso automatizable.",

    // Experience
    "experience.heading": "Trayectoria",
    "experience.subtitle": "Carrera Profesional",
    "experience.education": "Educación",
    "experience.current": "Actual",
    "exp.0.title": "Consultora Técnica — Soluciones de Web Semántica y Grafos de Conocimiento",
    "exp.1.title": "Investigadora Asociada",
    "exp.1.bullet.0": "Colaboró en artículos científicos y contribuyó a publicaciones académicas en tecnologías semánticas",
    "exp.1.bullet.1": "Desarrolló procesos de adquisición y análisis de datos con Python",
    "exp.1.bullet.2": "Diseñó ontologías para la estructuración integral del conocimiento usando herramientas basadas en OWL",
    "exp.1.bullet.3": "Optimizó el desarrollo de ontologías mediante métodos de NLP",
    "exp.2.title": "Consultora Externa",
    "exp.2.bullet.0": "Lideró iniciativas de investigación basadas en la web semántica con la industria y la academia",
    "exp.2.bullet.1": "Analizó requisitos de stakeholders para procesos de intercambio de datos de ingeniería",
    "exp.2.bullet.2": "Gestionó proyectos aplicando metodologías tradicionales y ágiles",
    "exp.2.bullet.3": "Desarrolló ontologías y modelos semánticos enfocados en interoperabilidad",
    "exp.3.title": "Asistente de Investigación Estudiantil",
    "exp.3.bullet.0": "Utilizó RDF, SPARQL, OWL para modelado de conocimiento",
    "exp.3.bullet.1": "Realizó migración de datos de bases de datos relacionales a triple stores con Python",
    "exp.3.bullet.2": "Desarrolló ontologías con Protégé y métodos de NLP",

    // Education
    "edu.0.degree": "M.Sc. Sistemas de Información Internacional",
    "edu.1.degree": "Lic. Administración de Negocios Internacionales",

    // Beyond
    "beyond.heading": "Más Allá del Grafo",
    "beyond.subtitle": "Cuando no estoy construyendo ontologías",
    "beyond.description": "Fuera del trabajo, me mueve la curiosidad — desde capturar momentos a través de la fotografía hasta experimentar con domótica y la impresión 3D. Me encanta la intersección entre creatividad y tecnología.",
    "beyond.Photography": "Fotografía",
    "beyond.Traveling": "Viajes",
    "beyond.Artistic Roller-Skating": "Patinaje Artístico",
    "beyond.Indoor Gardening": "Jardinería Interior",
    "beyond.Languages & Cultures": "Idiomas y Culturas",
    "beyond.Home Automation": "Domótica",
    "beyond.3D Printing & CAD": "Impresión 3D y CAD",

    // Footer
    "footer.heading": "Conectemos",
    "footer.description": "Ya sea que busques experiencia en grafos de conocimiento, consultoría en web semántica, o simplemente quieras intercambiar ideas sobre ingeniería de ontologías — me encantaría saber de ti.",
    "footer.crafted": "Creado por Cofoundy",
  },

  de: {
    // Nav
    "nav.about": "Über mich",
    "nav.expertise": "Fachkenntnisse",
    "nav.research": "Forschung",
    "nav.experience": "Werdegang",
    "nav.beyond": "Darüber hinaus",
    "nav.contact": "Kontakt",
    "nav.close": "Schließen",

    // Hero
    "hero.title": "Ontologie-Ingenieurin | Knowledge-Graph-Spezialistin",
    "hero.tagline": "Brücken zwischen Daten und Bedeutung bauen — durch Knowledge Graphs und semantische Technologien.",
    "hero.stat.0": "Forschungsprojekte",
    "hero.stat.1": "Publikationen",
    "hero.stat.2": "Sprachen",

    // About
    "about.heading": "Über mich",
    "about.languages": "Sprachen",
    "about.current": "Aktuell",
    "about.previous": "Zuvor",
    "about.certifications": "Zertifizierungen",
    "about.bio": "Ich bin eine Ontologie-Ingenieurin, die unstrukturierte Informationen in vernetztes Wissen transformiert. Mein Weg führte mich von Peru nach Taiwan für ein Betriebswirtschaftsstudium und dann nach Deutschland, wo ich meine Leidenschaft für Semantic-Web-Technologien entdeckte. Nach über 4 Jahren als Projektleiterin bei Fraunhofer IIS und der TH Nürnberg — Aufbau von Ontologien für die Wasserstoffwirtschaft, Entwicklung von NLP-Pipelines und Veröffentlichungen auf Top-Konferenzen wie ISWC — bin ich in die Industrie gewechselt als Technical Consultant bei metaphacts, wo ich Organisationen dabei unterstütze, die Kraft von Knowledge Graphs zu nutzen.",
    "about.jobtitle.0": "Technical Consultant",
    "about.jobtitle.1": "Externe Beraterin",

    // Expertise
    "expertise.heading": "Fachkenntnisse",
    "expertise.subtitle": "Wissensarchitektur",
    "expertise.legend.core": "Kern",
    "expertise.legend.semantic": "Semantic Web",
    "expertise.legend.ai": "KI / NLP",
    "expertise.legend.tools": "Tools",

    // Research
    "research.heading": "Forschung",
    "research.subtitle": "Projekte",
    "research.publications": "Publikationen",
    "research.opensource": "Open Source",
    "research.0.role": "Projektleiterin, Ontologie-Ingenieurin",
    "research.0.desc": "Einsatz von Semantic-Web-Technologien zum Aufbau einer KI-basierten Wissensdatenbank für die Wasserstoff-Brennstoffzellenforschung, Strukturierung internationaler Forschung und Erleichterung des Wissensaustauschs.",
    "research.1.role": "Projektleiterin, Ontologie- und KG-Ingenieurin",
    "research.1.desc": "Entwicklung eines graphbasierten Analysetools für die Brennstoffzellenforschung mit NLP und Semantic-Web-Technologien zur Verarbeitung großer Textdatenmengen und Generierung von Vorhersagen für die Wasserstoffwirtschaft.",
    "research.2.role": "Projektleiterin, KG-Ingenieurin",
    "research.2.desc": "Automatische Identifizierung relevanter Kundenkontakte aus unstrukturierten Textdaten mittels eines maßgeschneiderten NLP-Ansatzes, Transformation der heuristischen Lead-Identifizierung in einen automatisierbaren Prozess.",

    // Experience
    "experience.heading": "Werdegang",
    "experience.subtitle": "Karriere",
    "experience.education": "Ausbildung",
    "experience.current": "Aktuell",
    "exp.0.title": "Technical Consultant — Semantic Web & Knowledge Graph Solutions",
    "exp.1.title": "Wissenschaftliche Mitarbeiterin",
    "exp.1.bullet.0": "Mitwirkung an wissenschaftlichen Publikationen im Bereich semantische Technologien",
    "exp.1.bullet.1": "Entwicklung von Datenerfassungs- und Analyseprozessen mit Python",
    "exp.1.bullet.2": "Erstellung von Ontologien zur umfassenden Wissensstrukturierung mit OWL-basierten Tools",
    "exp.1.bullet.3": "Optimierung der Ontologieentwicklung durch NLP-Methoden",
    "exp.2.title": "Externe Beraterin",
    "exp.2.bullet.0": "Leitung von Semantic-Web-basierten Forschungsinitiativen mit Industrie und Akademie",
    "exp.2.bullet.1": "Analyse von Stakeholder-Anforderungen für Engineering-Datenaustauschprozesse",
    "exp.2.bullet.2": "Projektmanagement mit traditionellen und agilen Methoden",
    "exp.2.bullet.3": "Entwicklung von Ontologien und semantischen Modellen mit Fokus auf Interoperabilität",
    "exp.3.title": "Studentische Hilfskraft in der Forschung",
    "exp.3.bullet.0": "Einsatz von RDF, SPARQL, OWL für Wissensmodellierung",
    "exp.3.bullet.1": "Datenmigration von relationalen Datenbanken zu Triple Stores mit Python",
    "exp.3.bullet.2": "Ontologieentwicklung mit Protégé und NLP-Methoden",

    // Education
    "edu.0.degree": "M.Sc. International Information Systems",
    "edu.1.degree": "B.B.A. International Business Administration",

    // Beyond
    "beyond.heading": "Über den Graphen hinaus",
    "beyond.subtitle": "Wenn ich keine Ontologien baue",
    "beyond.description": "Außerhalb der Arbeit treibt mich die Neugier an — vom Festhalten von Momenten durch Fotografie bis zum Experimentieren mit Heimautomatisierung und 3D-Druck. Ich liebe die Schnittstelle zwischen Kreativität und Technologie.",
    "beyond.Photography": "Fotografie",
    "beyond.Traveling": "Reisen",
    "beyond.Artistic Roller-Skating": "Kunstrollschuhlaufen",
    "beyond.Indoor Gardening": "Indoor-Gärtnern",
    "beyond.Languages & Cultures": "Sprachen & Kulturen",
    "beyond.Home Automation": "Heimautomatisierung",
    "beyond.3D Printing & CAD": "3D-Druck & CAD",

    // Footer
    "footer.heading": "Lass uns vernetzen",
    "footer.description": "Ob du nach Knowledge-Graph-Expertise suchst, Beratung im Bereich Semantic Web benötigst, oder einfach Ideen über Ontologie-Engineering austauschen möchtest — ich freue mich, von dir zu hören.",
    "footer.crafted": "Erstellt von Cofoundy",
  },
};
