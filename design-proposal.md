# Propuesta de Diseño: Kiara M. Ascencion Arevalo

## P1: Identidad

Kiara es una Ontology Engineer que construye puentes — entre datos y significado, entre academia e industria, entre culturas. Peruana que estudió negocios en Taiwán, hizo su maestría en Alemania, y ahora es Technical Consultant en metaphacts (Digital Science). Habla 4 idiomas. Lideró 3 proyectos de investigación en hidrógeno y conocimiento semántico. Es la persona que estructura el caos de datos del mundo real en grafos de conocimiento comprensibles.

Su "superpower": convierte información no estructurada en conocimiento interconectado. Es literalmente una arquitecta de la información.

## Audiencia
- Recruiters tech/research en Alemania y Europa
- Colegas de la comunidad Semantic Web (ISWC, KGSWC)
- Potenciales colaboradores en proyectos KG/NLP
- Empresas que buscan consultores de Knowledge Graph

## Metáfora Visual
Un knowledge graph vivo: nodos conectados por edges con significado. La información no existe aislada — todo está enlazado. Fondo claro, limpio, con líneas y nodos que sugieren estructura sin ser rígidos. Los colores plum y sage evocan la dualidad tech-naturaleza de sus intereses.

## Secciones Propuestas (en orden)

1. **Hero** — Foto sin fondo que se funde con el bg claro. Nombre grande (Space Grotesk bold). Tagline "Ontology Engineer | Knowledge Graph Specialist". Stats: 3 research projects, 2 publications, 4 languages. Subtle SVG knowledge graph nodes animados en el fondo.

2. **About** — Bio personal (no solo CV). Su journey Perú→Taiwán→Alemania. Qué la apasiona. 2 columnas: texto + credenciales cards (metaphacts, Fraunhofer, Scrum Master).

3. **Expertise Graph** — SECCIÓN ÚNICA. Skills visualizados como knowledge graph interactivo (SVG). Nodos principales: Knowledge Graphs, Ontology Engineering, Semantic Web, NLP/LLM, Python. Nodos secundarios conectados: RDF, OWL, SPARQL, SHACL, GraphDB, Protégé, RDFlib. Hover → highlight connections. Inspirado en el Dribbble shot de AI Engineer. Los nodos usan los colores plum (skill alto) y sage (skill medio).

4. **Research** — Cards de proyectos de investigación. DuraFuelCell (DFG), Atlant-H (hydrogen), Data4Leads (NLP). Cada card: nombre, rol (Project Lead), periodo, descripción corta, tags de tech.

5. **Publications** — Minimal academic cards. Paper title + venue badge (ISWC, KGSWC) + year + DOI link. Sutil, no prominente (como pidió la cliente).

6. **Experience** — Timeline vertical con line-draw animation. Cada entry: empresa, cargo, periodo, bullets clave. metaphacts (current, highlighted) → Fraunhofer (external consultant) → TH Nuremberg (researcher) → Fraunhofer (student assistant).

7. **Education** — 2 cards side-by-side: FAU Nuremberg (M.Sc.) + Feng Chia Taiwan (BBA). Certification badge: Scrum Master I.

8. **Beyond the Graph** — Sección personal (inspirada en robbowen.digital/about). Grid de intereses con iconos/ilustraciones sutiles: Photography, Roller-skating, Indoor gardening, Home automation, 3D printing, Languages & cultures, Traveling. Tono cálido, muestra que es persona completa.

9. **Contact** — Plum dark footer. Email, LinkedIn, GitHub, ORCID links. Frase de cierre personal.

## Secciones que NO incluir
- Services — es empleada/researcher, no vende servicios
- CTA shimmer — no es freelancer, no necesita call-to-action agresivo
- Testimonials — no aplica
- Blog — no tiene contenido de blog

## Visual Language

### Paleta de 6 colores
```
primaryDark: "#42274E"    — Deep plum. Headings, footer bg. Basado en #62355C oscurecido.
primary: "#62355C"        — Plum del cliente. Borders, badges, nav active.
primaryLight: "#D1C2CF"   — Dusty lavender del cliente. Shimmer, hover states.
accent: "#4A6B4A"         — Sage-olive derivado del #2B412D. CTAs, dots, links.
surface: "#F5F4F2"        — Light grey del cliente. Background principal.
surfaceLight: "#FAFAF8"   — Más claro aún. Hero, cards bg.
```

Temperatura: fría-neutra. Esquema análogo: plum (purple-red) + sage (green) son complementarios pero usados con plum dominante (80%) y sage como acento (20%). Surface neutro derivado del hue general.

### Tipografía
- **Headings:** Space Grotesk (moderno, tech, geométrico — como tamalsen.dev)
- **Body:** DM Sans (limpio, legible, profesional)
- **Code/mono (si se necesita):** JetBrains Mono

### Efecto visual único: Knowledge Graph SVG
- SVG animado con nodos y edges que representan skills
- Nodos = círculos con label del skill
- Edges = líneas curvas conectando skills relacionados
- On hover: nodo se agranda + edges connected se iluminan
- Colores de nodos según proficiency (plum = expert, sage = intermediate)
- Animation on scroll: nodos aparecen uno a uno con stagger

### Motion design
- Hero: fade-up staggered (nombre → tagline → stats → photo)
- Scroll reveals: subtle fade-up per section
- Knowledge graph: draw-in animation on scroll
- Timeline: line-draw + dot-pop (como premium-starter)
- Hover: cards lift, graph nodes glow
- prefers-reduced-motion: solo opacity

## Decisiones Mobile-First
- Knowledge graph → lista vertical de skills con barras de nivel (no graph en mobile)
- Hero → foto arriba, texto abajo, stats en 2x2 grid
- Research cards → stack vertical
- Beyond the Graph → 2-col grid → 1-col en mobile
- Touch targets: todos ≥ 44px

## Multilingual
- Language switcher en navbar (EN | ES | DE)
- Content in English por defecto
- Nota: cliente preguntó si necesita proveer traducciones — por ahora hacemos EN, estructura lista para i18n futuro
