export const siteConfig = {
  name: "Kiara M. Ascencion Arevalo",
  title: "Ontology Engineer | Knowledge Graph Specialist",
  description: "Portfolio of Kiara M. Ascencion Arevalo — Ontology Engineer and Knowledge Graph Specialist bridging academia and industry in semantic technologies.",
  lang: "en",

  colors: {
    primaryDark: "#42274E",
    primary: "#62355C",
    primaryLight: "#D1C2CF",
    accent: "#4A6B4A",
    surface: "#F5F4F2",
    surfaceLight: "#FAFAF8",
  },

  tagline: "Building bridges between data and meaning through knowledge graphs and semantic technologies.",

  stats: [
    { value: "3", label: "Research Projects Led" },
    { value: "3", label: "Publications" },
    { value: "4", label: "Languages Spoken" },
  ],

  social: {
    email: "kiara.ascencion@gmail.com",
    linkedin: "https://www.linkedin.com/in/kiara-ascencion/",
    github: "https://github.com/Kiaramarnitt",
    orcid: "https://orcid.org/0000-0002-4158-9478",
  },

  aboutMe: "I'm an Ontology Engineer who transforms unstructured information into interconnected knowledge. My journey took me from Peru to Taiwan for business studies, then to Germany where I discovered my passion for semantic web technologies. After 4+ years leading research projects at Fraunhofer IIS and TH Nuremberg — building ontologies for the hydrogen economy, developing NLP pipelines, and publishing at top venues like ISWC — I've transitioned to industry as a Technical Consultant at metaphacts, helping organizations harness the power of knowledge graphs.",

  expertise: [
    { name: "Knowledge Graphs", level: 5, category: "core", connections: ["RDF", "SPARQL", "Ontology Engineering", "GraphDB"] },
    { name: "Ontology Engineering", level: 5, category: "core", connections: ["Protégé", "OWL", "SHACL", "Knowledge Graphs"] },
    { name: "RDF", level: 5, category: "semantic", connections: ["RDFS", "OWL", "Knowledge Graphs", "RDFlib"] },
    { name: "SPARQL", level: 5, category: "semantic", connections: ["RDF", "GraphDB", "Knowledge Graphs"] },
    { name: "OWL", level: 5, category: "semantic", connections: ["RDF", "RDFS", "Ontology Engineering", "Protégé"] },
    { name: "RDFS", level: 5, category: "semantic", connections: ["RDF", "OWL"] },
    { name: "NLP / LLM", level: 4, category: "ai", connections: ["Python", "Knowledge Graphs", "Ontology Engineering"] },
    { name: "Python", level: 4, category: "tools", connections: ["RDFlib", "NLP / LLM"] },
    { name: "Protégé", level: 4, category: "tools", connections: ["Ontology Engineering", "OWL"] },
    { name: "GraphDB", level: 4, category: "tools", connections: ["SPARQL", "Knowledge Graphs", "RDF"] },
    { name: "RDFlib", level: 4, category: "tools", connections: ["Python", "RDF"] },
    { name: "RML / R2RML", level: 3, category: "semantic", connections: ["RDF", "Knowledge Graphs"] },
    { name: "SHACL", level: 3, category: "semantic", connections: ["RDF", "Ontology Engineering"] },
  ],

  research: [
    {
      title: "DuraFuelCell",
      fullTitle: "Multi-scale investigation for the development of durable and efficient hydrogen fuel cell systems",
      role: "Project Lead, Ontology Engineer",
      period: "Mar 2024 – Dec 2025",
      funder: "German Research Foundation (DFG)",
      description: "Harnessing Semantic Web technologies to construct an AI-based knowledge database for hydrogen fuel cell research, structuring international research and facilitating knowledge exchange.",
      tags: ["Semantic Web", "Ontology", "Hydrogen", "AI", "DFG"],
    },
    {
      title: "Atlant-H",
      fullTitle: "Artificial Market Intelligence in the context of hydrogen",
      role: "Project Lead, Ontology & KG Engineer",
      period: "Jul 2021 – Dec 2025",
      funder: "",
      description: "Creating a graph-based analytical tool for fuel cell research using NLP and semantic web technologies to process vast amounts of textual data and generate predictions for the hydrogen economy.",
      tags: ["Knowledge Graph", "NLP", "Analytics", "Hydrogen"],
    },
    {
      title: "Data4Leads",
      fullTitle: "Automated text analyses for lead generation to support new business development",
      role: "Project Lead, KG Engineer",
      period: "Jan 2022 – Dec 2022",
      funder: "",
      description: "Automatically identifying relevant customer contacts from unstructured text data using a tailored NLP approach, transforming heuristic lead identification into an automatable process.",
      tags: ["NLP", "Text Mining", "Lead Generation", "Automation"],
    },
  ],

  publications: [
    {
      title: "HOLY: An Ontology Covering the Hydrogen Market",
      authors: "Ascencion Arevalo, K.M., Neunsinger, C., Zimmermann, R., Blum, R., Weakly, K.",
      venue: "ISWC 2023",
      venueFullName: "International Semantic Web Conference",
      year: 2023,
      doi: "10.1007/978-3-031-47243-5_1",
      location: "Greece",
    },
    {
      title: "RetroWoT: A Method to Integrate Brownfield Devices in the Web of Things",
      authors: "Dorsch, R., Freund, M., Ascencion Arevalo, K.M., Harth, A.",
      venue: "IoT 2024",
      venueFullName: "14th International Conference on the Internet of Things",
      year: 2024,
      doi: "10.1145/3703790.3703799",
      location: "",
    },
    {
      title: "AutOnto: Towards A Semi-Automated Ontology Engineering Methodology",
      authors: "Ascencion Arevalo, K.M., Ambre, S., Dorsch, R.",
      venue: "KGSWC 2024",
      venueFullName: "Knowledge Graph and Semantic Web Conference",
      year: 2025,
      doi: "10.1007/978-3-031-81221-7_16",
      location: "",
    },
  ],

  experience: [
    {
      company: "metaphacts GmbH",
      companyNote: "part of Digital Science GmbH",
      title: "Technical Consultant — Semantic Web & Knowledge Graph Solutions",
      period: "Jan 2026 – Present",
      location: "Germany",
      current: true,
      bullets: [],
    },
    {
      company: "Technische Hochschule Nürnberg Georg Simon Ohm",
      companyNote: "",
      title: "Associate Researcher",
      period: "Jul 2021 – Dec 2025",
      location: "Germany",
      current: false,
      bullets: [
        "Collaborated on scientific papers and contributed to academic publishing in semantic technologies",
        "Developed data acquisition and analysis processes with Python",
        "Engineered ontologies for comprehensive knowledge structuring using OWL-based tools",
        "Streamlined ontology development through NLP methods",
      ],
    },
    {
      company: "Fraunhofer IIS",
      companyNote: "Institut für Integrierte Schaltungen",
      title: "External Consultant",
      period: "Jul 2021 – Dec 2025",
      location: "Germany",
      current: false,
      bullets: [
        "Led semantic web-based research initiatives with industry and academia",
        "Analyzed stakeholder requirements for engineering data exchange processes",
        "Managed projects applying both traditional and agile methodologies",
        "Developed ontologies and semantic models focused on interoperability",
      ],
    },
    {
      company: "Fraunhofer IIS",
      companyNote: "",
      title: "Student Research Assistant",
      period: "Jun 2019 – Jun 2021",
      location: "Germany",
      current: false,
      bullets: [
        "Utilized RDF, SPARQL, OWL for knowledge modeling",
        "Conducted data migration from RDB to triple stores with Python",
        "Developed ontologies with Protégé and NLP methods",
      ],
    },
  ],

  education: [
    {
      school: "Friedrich-Alexander-University Erlangen-Nuremberg",
      degree: "M.Sc. International Information Systems",
      faculty: "School of Business and Economics",
      period: "2018 – 2021",
      location: "Germany",
    },
    {
      school: "Feng Chia University (FCU)",
      degree: "B.B.A. International Business Administration",
      faculty: "College of Business",
      period: "2013 – 2017",
      location: "Taiwan",
    },
  ],

  certifications: [
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: 2024,
    },
  ],

  languages: [
    { name: "English", level: 5 },
    { name: "Spanish", level: 5 },
    { name: "German", level: 5 },
    { name: "Chinese", level: 4 },
  ],

  beyondWork: [
    { icon: "camera", label: "Photography" },
    { icon: "globe", label: "Traveling" },
    { icon: "sparkles", label: "Artistic Roller-Skating" },
    { icon: "leaf", label: "Indoor Gardening" },
    { icon: "languages", label: "Languages & Cultures" },
    { icon: "home", label: "Home Automation" },
    { icon: "cube", label: "3D Printing & CAD" },
  ],

  github: {
    repos: [
      { name: "AutOnto", description: "Semi-automated ontology engineering methodology", language: "Jupyter Notebook", stars: 1 },
      { name: "holy", description: "Hydrogen Ontology (ISWC 2023)", language: "HTML", stars: 1 },
      { name: "OntoChatElicit", description: "LLM-based system for collaborative ontology engineering", language: "", stars: 0 },
    ],
  },
};
