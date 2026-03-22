/* =========================================================
   Luciano Rodrigues — Portfolio JS (CORRIGIDO)
   ========================================================= */

/* -------------------------
   I18N - Traduções completas
   -------------------------*/
window.I18N = {
  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', tradeshows: 'Trade Shows', certs: 'Certifications', contact: 'Contact' },
    hero: {
      title: 'Luciano Rodrigues de Souza',
      subtitle: 'AI-Driven Procurement & Operations Leader · Strategic Transformation',
      desc: 'I connect governance, technical rigor, and AI to deliver measurable outcomes: transparent tenders, reliable partners, and resilient operations across Europe, LATAM, and Asia.',
      badges: { top: 'Top Performer 2025', middle: 'AI Specialist', bottom: 'Trusted Leader' },
      stats: {
        savings: 'Cumulative Savings',
        savings_note: 'Across multi-category negotiations',
        rfps: 'RFP/RFQ Led',
        rfps_note: 'With technical annexes & weighted scoring',
        projects: 'Project Portfolio',
        projects_note: 'From concept to audited mass production',
        regions: 'Countries',
        regions_note: 'Europe · LATAM · Asia'
      }
    },
    cta: { connect: "Let's Connect", journey: 'View Journey' },
    about: {
      title: 'Leadership Philosophy',
      subtitle: 'From LATAM operations to global procurement strategy',
      heading: 'Transformation Through Collaboration',
      body: {
        1: 'I design procurement systems that scale: from RFI/RFP playbooks and BidMaps to governance, audits, and supplier development. The result is speed with control — faster decisions, lower risk, and clearer accountability.',
        2: 'My leadership style blends cross-functional facilitation (Engineering, ESG, Legal, Finance, Operations) with data and AI. I focus on three pillars: clarity of requirements, market transparency, and measurable outcomes.'
      },
      philosophy: '"I don\'t just optimize supply chains — I build cross-functional coalitions that transform how organizations think about procurement."',
      points: {
        1: 'Process Architecture: tender kits, weighted scoring, compliance-by-design',
        2: 'AI & Analytics: smart RFPs, proposal parsing, forecasting, inventory optimization',
        3: 'Supplier Strategy: audits, capability mapping, dual-sourcing & continuity',
        4: 'Stakeholder Trust: transparent dashboards, SLAs, and post-award governance'
      },
      lang: { pt: 'Portuguese (Native)', en: 'English (Native)', es: 'Spanish (Professional)', fr: 'French (Professional)' }
    },
    timeline: {
      title: 'Professional Journey',
      subtitle: '15+ years of progressive leadership',
      level: { senior: 'Senior Level', director: 'Director Level', manager: 'Manager Level', growth: 'Growth Phase' }
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Product development excellence and AI innovation portfolio',
      view_gallery: 'View Gallery'
    },
    proj: {
      critical: {
        title: "Critical Infrastructure Procurement",
        desc: "Strategic procurement and governance of all critical building systems across 50+ hospitality assets. End-to-end management of SCIE/Fire Safety, Legionella Prevention, HVAC, Elevators, Caldeiras, and Hottis — ensuring full regulatory compliance, operational continuity, and measurable cost optimization. Structured RFP/RFQ frameworks with technical annexes (A1/A2), weighted scoring matrices, and audit-ready documentation. *Visual representations and volumes are approximate to protect company confidentiality."
      },
      hospitality: {
        title: "Hospitality Operations Excellence",
        desc: "End-to-end procurement for luxury hospitality operations across 50+ premium assets. Comprehensive management of F&B, laundry, energy, golf courses, padel courts, clubhouses, and spas. Strategic sourcing that balances quality excellence with cost optimization, ensuring seamless guest experiences while delivering measurable financial impact. Includes Monte Rei, Els Club, San Lourenzo integration with full compliance onboarding. *Data representations are illustrative to maintain corporate confidentiality."
      },
      digital: {
        title: "Digital Procurement Transformation",
        desc: "Primavera P6 and e-Procurement (Mercado Eletrônico) integration with automated BidMaps, real-time Power BI dashboards, and predictive analytics. Full traceability from requisition to payment, with automated workflows, supplier scorecards, and compliance monitoring. Connected procurement and accounting systems enabling data harmonization and real-time performance tracking. €1M+ savings delivered in 2025, targeting €3M next year through data-driven decision making. *Dashboard visuals represent approximate metrics for confidentiality."
      },
      blaupunkt: {
        tools: { desc: "Creation and launch of a complete tools line for the European market — from concept, BOM & compliance to production." },
        power: { desc: "Professional-grade drills, saws, sanders with technical specs, audits and safety certifications." },
        garden: { desc: "Outdoor equipment (chainsaws, trimmers) with complete documentation and safety compliance." }
      },
      sj: { desc: "Premium enameled cast iron cookware for a British heritage brand (est. 1760)." },
      pininfarina: { desc: "Premium outdoor cooking appliances with Italian design and global coordination (EU/Asia)." },
      nks: {
        estrelas: { desc: "Consumer electronics & home appliances for the Brazilian market with full lifecycle management." },
        audio: { desc: "Professional & consumer audio: speakers, sound systems and headphones (ANATEL compliance)." },
        maisvc: { desc: "Beauty & personal care line with INMETRO certification tailored to Brazilian retail." }
      },
      ml: {
        title: "AI & ML Projects (Selected)",
        desc: "Consolidated portfolio: sales forecasting, inventory optimization, promotion uplift, price elasticity, anomaly/quality detection, churn & CLV.",
        caption1: "Machine Learning Portfolio",
        caption2: "Forecasting · Optimization · Uplift"
      }
    },
    tradeshows: {
      title: 'Trade Shows & Global Exhibitions',
      subtitle: 'Exhibitor and strategic buyer across worldwide markets',
      blaupunkt: {
        1: { title: "Blaupunkt Illumination Booth", desc: "Hong Kong International Lighting Fair — premium brand experience co-designed with Marketing." },
        2: { title: "Stand Design & Storytelling", desc: "Layout, flow, lighting demos, and merchandising aligned to category strategy." },
        3: { title: "Product Display Excellence", desc: "Complete portfolio with compliance highlights and technical feature cards." },
        4: { title: "Lead Generation", desc: "On-stand meetings, scanning, qualification, and live slotting into pipeline." },
        5: { title: "Global Coordination", desc: "Consistent brand messaging across regions with localized assortments." }
      },
      ford: {
        1: { title: "Hong Kong International Lighting Fair", desc: "Strategic booth planning with Marketing & Merchandising; category narratives and demos." },
        2: { title: "Meetings & Lead Capture", desc: "Meetings agenda, lead qualification and structured post-fair follow-up." },
        3: { title: "Supplier Engagement", desc: "Negotiations, technical samples, costs, MOQs, and certification roadmaps." }
      },
      strategy: {
        title: 'Trade Show Strategy & Execution',
        desc: 'Beyond the booth: I co-create with Marketing the end-to-end journey — stand design, narrative & assets; orchestrate meetings, capture qualified leads, and run the post-fair pipeline to real outcomes. In parallel, I negotiate with current and new partners, benchmark technologies, and audit factories for capability & compliance.',
        pillars: {
          1: 'Stand Design & Merchandising',
          2: 'Meetings Orchestration & Lead Capture',
          3: 'Negotiations & Partnering',
          4: 'Tech Discovery & Benchmark',
          5: 'Factory Audits & Capability Mapping',
          6: 'Post-Fair Pipeline, ROI & Governance'
        }
      }
    },
    certs: {
      title: 'Certifications & Education',
      subtitle: 'Continuous learning in AI, Data Science, and Strategic Procurement'
    },
    framework: {
      title: 'AI-Driven Strategic Procurement Framework',
      desc: 'One-page executive framework on how AI, data, and operational alignment elevate procurement performance.',
      badge: 'Proprietary Methodology'
    },
    ibm: {
      apply: { title: 'How I Apply This in Procurement:' },
      genai: {
        subtitle: 'Foundations in Generative AI',
        desc: 'LLM fundamentals, prompt engineering and ethical deployment; practical use in procurement workflows.',
        point1: 'Contract Parsing: clause extraction & risk flags',
        point2: 'Smart RFPs: auto-draft specs/SoW; save hours weekly',
        point3: 'Supplier Comms: consistent, data-aware templates',
        point4: 'Market Intel: proposal comparison & insights'
      },
      llms: {
        subtitle: 'Introduction to Large Language Models',
        desc: 'Transformer architecture, tokenization and prompting; patterns for data extraction and decision support.',
        point1: 'Doc Intelligence: quotes/specs parsing',
        point2: 'Forecasting Assist: LLM-augmented demand signals',
        point3: 'Compliance: policy checks vs. contracts',
        point4: 'Knowledge Ops: internal procurement assistant'
      }
    },
    umd: { subtitle: 'AI and Career Empowerment', desc: 'AI applications in business strategy and automation of procurement workflows.' },
    mit: { subtitle: 'Supply Chain Analytics', desc: 'Advanced analytics methodologies for supply chain optimization and forecasting.' },
    harvard: { subtitle: 'Decision-Making in Leadership', desc: 'Evidence-based decision frameworks and strategic thinking for leaders.' },
    esl: {
      school: 'Gadsden State Community College',
      subtitle: 'Diploma — ESL (English as a Second Language)',
      desc: 'Academic English program with communication, writing and presentation skills.'
    },
    vol: {
      title: 'Volunteering & Community Impact',
      subtitle: 'Giving back through education and mentorship',
      position: 'Mathematics & English Instructor',
      school: 'Gadsden State Community College',
      desc: 'Mathematics and English tutoring for students in need of academic support. Developed personalized learning plans, mentored diverse student populations, and contributed to community education initiatives. This experience strengthened my communication skills, patience, and ability to explain complex concepts — skills I now apply in procurement training and cross-functional team leadership.'
    },
    github: {
      title: 'GitHub & Data Science Projects',
      subtitle: 'Transforming procurement through code, algorithms, and data-driven insights',
      tagline: 'Python enthusiast leveraging data science to revolutionize procurement decision-making.',
      metrics: { accuracy: 'Prediction Accuracy', cost: 'Cost Reduction', stockout: 'Stockout Reduction' },
      cta: 'View All Repositories'
    },
    contact: {
      title: "Let's Connect",
      subtitle: 'Ready to transform your procurement strategy?',
      email: 'Email',
      location: 'Location'
    }
  },
  es: {
    nav: { about: 'Sobre', experience: 'Experiencia', projects: 'Proyectos', tradeshows: 'Ferias', certs: 'Certificaciones', contact: 'Contacto' },
    hero: {
      title: 'Luciano Rodrigues de Souza',
      subtitle: 'Líder en Procurement y Operaciones con IA · Transformación Estratégica',
      desc: 'Conecto gobernanza, rigor técnico e IA para generar resultados medibles: licitaciones transparentes, socios confiables y operaciones resilientes en Europa, LATAM y Asia.',
      badges: { top: 'Top Performer 2025', middle: 'Especialista en IA', bottom: 'Líder de Confianza' },
      stats: {
        savings: 'Ahorro Acumulado',
        savings_note: 'En negociaciones multi-categoría',
        rfps: 'RFP/RFQ Dirigidos',
        rfps_note: 'Con anexos técnicos y scoring ponderado',
        projects: 'Portafolio de Proyectos',
        projects_note: 'Del concepto a la producción auditada',
        regions: 'Países',
        regions_note: 'Europa · LATAM · Asia'
      }
    },
    cta: { connect: 'Conectemos', journey: 'Ver Trayectoria' },
    about: {
      title: 'Filosofía de Liderazgo',
      subtitle: 'De operaciones LATAM a estrategia global de procurement',
      heading: 'Transformación mediante Colaboración',
      body: {
        1: 'Diseño sistemas de procurement escalables: desde playbooks de RFI/RFP y BidMaps hasta gobernanza, auditorías y desarrollo de proveedores. Resultado: velocidad con control — decisiones más rápidas, menos riesgo y responsabilidades claras.',
        2: 'Mi estilo de liderazgo combina facilitación transversal (Ingeniería, ESG, Legal, Finanzas, Operaciones) con datos e IA. Enfoque en tres pilares: claridad de requisitos, transparencia de mercado y resultados medibles.'
      },
      philosophy: '"No solo optimizo cadenas de suministro — construyo coaliciones multifuncionales que transforman cómo las organizaciones piensan el procurement."',
      points: {
        1: 'Arquitectura de Procesos: tender kits, scoring ponderado, compliance-by-design',
        2: 'IA & Analytics: RFPs inteligentes, parsing de propuestas, forecasting, inventario',
        3: 'Estrategia de Proveedores: auditorías, mapeo de capacidades, dual-sourcing',
        4: 'Confianza en Stakeholders: dashboards transparentes, SLAs y gobernanza post-contrato'
      },
      lang: { pt: 'Portugués (Nativo)', en: 'Inglés (Nativo)', es: 'Español (Profesional)', fr: 'Francés (Profesional)' }
    },
    timeline: {
      title: 'Trayectoria Profesional',
      subtitle: '15+ años de liderazgo progresivo',
      level: { senior: 'Nivel Senior', director: 'Dirección', manager: 'Gestión', growth: 'Expansión' }
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Excelencia en desarrollo de producto e innovación con IA',
      view_gallery: 'Ver Galería'
    },
    proj: {
      critical: {
        title: "Adquisición de Infraestructura Crítica",
        desc: "Adquisición estratégica y gobernanza de todos los sistemas críticos de edificios en más de 50 activos de hospitalidad. Gestión integral de SCIE/Seguridad Contra Incendios, Prevención de Legionella, HVAC, Elevadores, Calderas y Hottis — garantizando cumplimiento regulatorio total, continuidad operacional y optimización medible de costos. Frameworks estructurados de RFP/RFQ con anexos técnicos (A1/A2), matrices de puntuación ponderada y documentación lista para auditoría. *Las representaciones visuales y volúmenes son aproximados para proteger la confidencialidad de la empresa."
      },
      hospitality: {
        title: "Excelencia en Operaciones de Hospitalidad",
        desc: "Adquisición integral para operaciones de hospitalidad de lujo en más de 50 activos premium. Gestión integral de F&B, lavandería, energía, campos de golf, canchas de padel, clubhouses y spas. Sourcing estratégico que equilibra excelencia de calidad con optimización de costos, garantizando experiencias impecables para huéspedes mientras se genera impacto financiero medible. Incluye integración de Monte Rei, Els Club, San Lourenzo con onboarding completo en cumplimiento. *Las representaciones de datos son ilustrativas para mantener la confidencialidad corporativa."
      },
      digital: {
        title: "Transformación Digital de Procurement",
        desc: "Integración Primavera P6 y e-Procurement (Mercado Eletrônico) con BidMaps automatizados, dashboards Power BI en tiempo real y análisis predictivo. Trazabilidad completa desde la requisición hasta el pago, con flujos de trabajo automatizados, scorecards de proveedores y monitoreo de cumplimiento. Sistemas de procurement y contabilidad conectados permitiendo armonización de datos y seguimiento de rendimiento en tiempo real. €1M+ en ahorros entregados en 2025, con meta de €3M el próximo año mediante toma de decisiones basada en datos. *Los visuales de dashboards representan métricas aproximadas por confidencialidad."
      },
      blaupunkt: {
        tools: { desc: "Creación y lanzamiento de línea completa de herramientas para el mercado europeo — del concepto, BOM y compliance a la producción." },
        power: { desc: "Taladros, sierras y lijadoras profesionales con especificaciones técnicas, auditorías y certificaciones de seguridad." },
        garden: { desc: "Equipos outdoor (motosierras, desbrozadoras) con documentación completa y cumplimiento de seguridad." }
      },
      sj: { desc: "Ollas de hierro fundido esmaltado premium para marca británica de tradición (desde 1760)." },
      pininfarina: { desc: "Electrodomésticos premium para cocina externa con diseño italiano y coordinación global (UE/Asia)." },
      nks: {
        estrelas: { desc: "Electrónica y electrodomésticos para el mercado brasileño con gestión completa del ciclo de vida." },
        audio: { desc: "Audio profesional y consumer: bocinas, sistemas de sonido y auriculares (cumplimiento ANATEL)." },
        maisvc: { desc: "Línea de belleza y cuidado personal con certificación INMETRO para retail brasileño." }
      },
      ml: {
        title: "Proyectos de IA & ML (Seleccionados)",
        desc: "Portafolio consolidado: previsión de ventas, optimización de inventario, uplift de promociones, elasticidad de precio, detección de anomalías/calidad, churn y CLV.",
        caption1: "Portafolio de Machine Learning",
        caption2: "Previsión · Optimización · Uplift"
      }
    },
    tradeshows: {
      title: 'Ferias y Exposiciones Internacionales',
      subtitle: 'Expositor y comprador estratégico en mercados globales',
      blaupunkt: {
        1: { title: "Stand Blaupunkt Ilumination", desc: "Hong Kong International Lighting Fair — experiencia premium co-creada con Marketing." },
        2: { title: "Diseño de Stand & Storytelling", desc: "Layout, flujo, demostraciones de iluminación y merchandising alineados a la estrategia." },
        3: { title: "Excelencia en Exhibición de Productos", desc: "Portafolio completo con destacados de compliance y cards de features técnicas." },
        4: { title: "Generación de Leads", desc: "Reuniones en stand, scanning, calificación e inserción en tiempo real en el pipeline." },
        5: { title: "Coordinación Global", desc: "Mensaje de marca consistente entre regiones con surtidos localizados." }
      },
      ford: {
        1: { title: "Hong Kong International Lighting Fair", desc: "Planificación estratégica del stand con Marketing & Merchandising; narrativas y demos." },
        2: { title: "Reuniones & Captación de Leads", desc: "Agenda de reuniones, calificación de leads y follow-up estructurado post-feria." },
        3: { title: "Engagement con Proveedores", desc: "Negociaciones, muestras técnicas, costos, MOQs y roadmaps de certificación." }
      },
      strategy: {
        title: 'Estrategia y Ejecución de Ferias',
        desc: 'Más allá del stand: co-creo con Marketing la jornada de punta a punta — diseño, narrativa y assets; orquesto reuniones, califico leads y conduzco el pipeline post-feria. En paralelo, negocio con socios, hago benchmark de tecnologías y audito fábricas.',
        pillars: {
          1: 'Diseño de Stand & Merchandising',
          2: 'Reuniones & Captación de Leads',
          3: 'Negociaciones & Alianzas',
          4: 'Descubrimiento Tecnológico',
          5: 'Auditorías de Fábrica',
          6: 'Pipeline, ROI y Gobernanza'
        }
      }
    },
    certs: {
      title: 'Certificaciones y Educación',
      subtitle: 'Aprendizaje continuo en IA, Data Science y Procurement Estratégico'
    },
    framework: {
      title: 'Framework Estratégico de Procurement con IA',
      desc: 'Framework ejecutivo one-page que muestra cómo IA, datos y alineación operacional elevan el rendimiento de procurement.',
      badge: 'Metodología Propietaria'
    },
    ibm: {
      apply: { title: 'Aplicaciones en Procurement:' },
      genai: {
        subtitle: 'Fundamentos en IA Generativa',
        desc: 'Fundamentos de LLMs, prompt engineering y ética; aplicación práctica en flujos de procurement.',
        point1: 'Lectura de Contratos: extracción de cláusulas y riesgos',
        point2: 'RFPs Inteligentes: specs/SoW automáticos, horas ahorradas',
        point3: 'Comunicación con Proveedores: templates consistentes',
        point4: 'Inteligencia de Mercado: comparación de propuestas'
      },
      llms: {
        subtitle: 'Introducción a LLMs',
        desc: 'Transformers, tokenización y prompting; patrones de extracción y soporte a la decisión.',
        point1: 'Inteligencia de Documentos',
        point2: 'Forecasting asistido por LLM',
        point3: 'Compliance vs. políticas',
        point4: 'Asistente interno de procurement'
      }
    },
    umd: { subtitle: 'IA y Empoderamiento Profesional', desc: 'Aplicaciones de IA en estrategia de negocios y automatización de flujos de procurement.' },
    mit: { subtitle: 'Supply Chain Analytics', desc: 'Metodologías avanzadas de analytics para optimización y forecasting de la cadena de suministro.' },
    harvard: { subtitle: 'Toma de Decisiones en Liderazgo', desc: 'Frameworks de decisión basados en evidencias y pensamiento estratégico para líderes.' },
    esl: {
      school: 'Gadsden State Community College',
      subtitle: 'Diploma — ESL (Inglés como 2ª Lengua)',
      desc: 'Inglés académico: comunicación, escritura y presentaciones.'
    },
    vol: {
      title: 'Voluntariado e Impacto Comunitario',
      subtitle: 'Retribuyendo mediante educación y mentoría',
      position: 'Instructor de Matemáticas e Inglés',
      school: 'Gadsden State Community College',
      desc: 'Clases de matemáticas e inglés para alumnos con necesidad de apoyo académico. Desarrollé planes de aprendizaje personalizados, mentoreé poblaciones diversas de estudiantes y contribuí a iniciativas de educación comunitaria. Esta experiencia fortaleció mis habilidades de comunicación, paciencia y capacidad de explicar conceptos complejos — habilidades que aplico actualmente en entrenamiento de procurement y liderazgo de equipos multifuncionales.'
    },
    github: {
      title: 'Proyectos de GitHub y Data Science',
      subtitle: 'Transformando procurement con código e insights',
      tagline: 'Entusiasta de Python usando data science para decisiones en procurement.',
      metrics: { accuracy: 'Precisión de Predicción', cost: 'Reducción de Costos', stockout: 'Reducción de Ruptura' },
      cta: 'Ver Todos los Repositorios'
    },
    contact: {
      title: 'Conectemos',
      subtitle: '¿Listo para transformar tu estrategia de procurement?',
      email: 'Email',
      location: 'Ubicación'
    }
  },

  fr: {
    nav: { about: 'À propos', experience: 'Expérience', projects: 'Projets', tradeshows: 'Salons', certs: 'Certifications', contact: 'Contact' },
    hero: {
      title: 'Luciano Rodrigues de Souza',
      subtitle: 'Leader en Procurement et Opérations IA · Transformation Stratégique',
      desc: 'Je connecte la gouvernance, la rigueur technique et l'IA pour générer des résultats mesurables: appels d'offres transparents, partenaires fiables et opérations résilientes en Europe, LATAM et Asie.',
      badges: { top: 'Top Performer 2025', middle: 'Spécialiste IA', bottom: 'Leader de Confiance' },
      stats: {
        savings: 'Économies Accumulées',
        savings_note: 'Dans les négociations multi-catégories',
        rfps: 'RFP/RFQ Dirigés',
        rfps_note: 'Avec annexes techniques et scoring pondéré',
        projects: 'Portefeuille de Projets',
        projects_note: 'Du concept à la production auditée',
        regions: 'Pays',
        regions_note: 'Europe · LATAM · Asie'
      }
    },
    cta: { connect: 'Connectons-nous', journey: 'Voir le Parcours' },
    about: {
      title: 'Philosophie de Leadership',
      subtitle: 'Des opérations LATAM à la stratégie globale de procurement',
      heading: 'Transformation par la Collaboration',
      body: {
        1: 'Je conçois des systèmes de procurement évolutifs: des playbooks RFI/RFP et BidMaps à la gouvernance, aux audits et au développement fournisseurs. Résultat: vitesse avec contrôle — décisions plus rapides, moins de risques et responsabilités claires.',
        2: 'Mon style de leadership combine la facilitation transversale (Ingénierie, ESG, Juridique, Finance, Opérations) avec les données et l'IA. Focus sur trois piliers: clarté des exigences, transparence du marché et résultats mesurables.'
      },
      philosophy: '"Je n'optimise pas seulement les chaînes d'approvisionnement — je construis des coalitions multifonctionnelles qui transforment la façon dont les organisations pensent le procurement."',
      points: {
        1: 'Architecture de Processus: tender kits, scoring pondéré, compliance-by-design',
        2: 'IA & Analytics: RFPs intelligents, parsing de propositions, forecasting, inventaire',
        3: 'Stratégie Fournisseurs: audits, cartographie des capacités, dual-sourcing',
        4: 'Confiance des Parties Prenantes: dashboards transparents, SLAs et gouvernance post-contrat'
      },
      lang: { pt: 'Portugais (Natif)', en: 'Anglais (Natif)', es: 'Espagnol (Professionnel)', fr: 'Français (Professionnel)' }
    },
    timeline: {
      title: 'Parcours Professionnel',
      subtitle: '15+ ans de leadership progressif',
      level: { senior: 'Niveau Senior', director: 'Direction', manager: 'Management', growth: 'Expansion' }
    },
    projects: {
      title: 'Projets en Vedette',
      subtitle: 'Excellence en développement produit et innovation IA',
      view_gallery: 'Voir la Galerie'
    },
    proj: {
      critical: {
        title: "Approvisionnement en Infrastructure Critique",
        desc: "Approvisionnement stratégique et gouvernance de tous les systèmes critiques de bâtiments dans plus de 50 actifs d'hôtellerie. Gestion complète des SCIE/Sécurité Incendie, Prévention Légionnelle, CVC, Ascenseurs, Chaudières et Hottis — garantissant la conformité réglementaire totale, la continuité opérationnelle et l'optimisation mesurable des coûts. Cadres structurés RFP/RFQ avec annexes techniques (A1/A2), matrices de scoring pondéré et documentation prête pour audit. *Les représentations visuelles et volumes sont approximatifs pour protéger la confidentialité de l'entreprise."
      },
      hospitality: {
        title: "Excellence en Opérations Hôtelières",
        desc: "Approvisionnement complet pour opérations hôtelières de luxe dans plus de 50 actifs premium. Gestion complète de F&B, blanchisserie, énergie, terrains de golf, courts de padel, clubhouses et spas. Sourcing stratégique équilibrant excellence qualité et optimisation des coûts, garantissant des expériences client impeccables tout en générant un impact financier mesurable. Inclut l'intégration de Monte Rei, Els Club, San Lourenzo avec onboarding complet en conformité. *Les représentations de données sont illustratives pour maintenir la confidentialité corporative."
      },
      digital: {
        title: "Transformation Digitale du Procurement",
        desc: "Intégration Primavera P6 et e-Procurement (Mercado Eletrônico) avec BidMaps automatisés, dashboards Power BI en temps réel et analyses prédictives. Traçabilité complète de la réquisition au paiement, avec workflows automatisés, scorecards fournisseurs et monitoring de conformité. Systèmes de procurement et comptabilité connectés permettant l'harmonisation des données et le suivi de performance en temps réel. €1M+ d'économies réalisées en 2025, cible de €3M l'année prochaine via la prise de décision basée sur les données. *Les visuels de dashboards représentent des métriques approximatives pour confidentialité."
      },
      blaupunkt: {
        tools: { desc: "Création et lancement d'une gamme complète d'outils pour le marché européen — du concept, BOM et conformité à la production." },
        power: { desc: "Perceuses, scies et ponceuses professionnelles avec spécifications techniques, audits et certifications de sécurité." },
        garden: { desc: "Équipements outdoor (tronçonneuses, débroussailleuses) avec documentation complète et conformité sécurité." }
      },
      sj: { desc: "Casseroles en fonte émaillée premium pour une marque britannique d'héritage (depuis 1760)." },
      pininfarina: { desc: "Appareils premium pour cuisine extérieure avec design italien et coordination globale (UE/Asie)." },
      nks: {
        estrelas: { desc: "Électronique et électroménager pour le marché brésilien avec gestion complète du cycle de vie." },
        audio: { desc: "Audio professionnel et grand public: enceintes, systèmes audio et casques (conformité ANATEL)." },
        maisvc: { desc: "Ligne beauté et soins personnels avec certification INMETRO pour le retail brésilien." }
      },
      ml: {
        title: "Projets IA & ML (Sélection)",
        desc: "Portefeuille consolidé: prévision des ventes, optimisation des stocks, uplift des promotions, élasticité des prix, détection d'anomalies/qualité, churn et CLV.",
        caption1: "Portefeuille Machine Learning",
        caption2: "Prévision · Optimisation · Uplift"
      }
    },
    tradeshows: {
      title: 'Salons et Expositions Internationales',
      subtitle: 'Exposant et acheteur stratégique sur les marchés mondiaux',
      blaupunkt: {
        1: { title: "Stand Blaupunkt Ilumination", desc: "Hong Kong International Lighting Fair — expérience premium co-créée avec le Marketing." },
        2: { title: "Design de Stand & Storytelling", desc: "Layout, flux, démonstrations d'éclairage et merchandising alignés sur la stratégie." },
        3: { title: "Excellence en Exposition de Produits", desc: "Portefeuille complet avec points forts de conformité et fiches techniques." },
        4: { title: "Génération de Leads", desc: "Réunions sur stand, scanning, qualification et insertion en temps réel dans le pipeline." },
        5: { title: "Coordination Globale", desc: "Message de marque cohérent entre régions avec assortiments localisés." }
      },
      ford: {
        1: { title: "Hong Kong International Lighting Fair", desc: "Planification stratégique du stand avec Marketing & Merchandising; narratifs et démos." },
        2: { title: "Réunions & Capture de Leads", desc: "Agenda de réunions, qualification de leads et suivi structuré post-salon." },
        3: { title: "Engagement Fournisseurs", desc: "Négociations, échantillons techniques, coûts, MOQs et feuilles de route de certification." }
      },
      strategy: {
        title: 'Stratégie et Exécution de Salons',
        desc: 'Au-delà du stand: je co-crée avec le Marketing le parcours de bout en bout — design, narration et assets; j'orquestre les réunions, je qualifie les leads et je conduis le pipeline post-salon vers des résultats concrets. En parallèle, je négocie avec les partenaires, je fais du benchmark technologique et j'audit les usines.',
        pillars: {
          1: 'Design de Stand & Merchandising',
          2: 'Réunions & Capture de Leads',
          3: 'Négociations & Partenariats',
          4: 'Découverte Technologique',
          5: 'Audits d'Usine',
          6: 'Pipeline, ROI et Gouvernance'
        }
      }
    },
    certs: {
      title: 'Certifications et Éducation',
      subtitle: 'Apprentissage continu en IA, Data Science et Procurement Stratégique'
    },
    framework: {
      title: 'Framework Stratégique de Procurement IA',
      desc: 'Framework exécutif one-page montrant comment l'IA, les données et l'alignement opérationnel élèvent la performance du procurement.',
      badge: 'Méthodologie Propriétaire'
    },
    ibm: {
      apply: { title: 'Applications en Procurement:' },
      genai: {
        subtitle: 'Fondamentaux en IA Générative',
        desc: 'Fondamentaux des LLMs, prompt engineering et éthique; application pratique dans les flux de procurement.',
        point1: 'Lecture de Contrats: extraction de clauses et risques',
        point2: 'RFPs Intelligentes: specs/SoW automatiques, heures économisées',
        point3: 'Communication Fournisseurs: templates cohérents',
        point4: 'Intelligence de Marché: comparaison de propositions'
      },
      llms: {
        subtitle: 'Introduction aux LLMs',
        desc: 'Transformers, tokenisation et prompting; patterns d'extraction et support à la décision.',
        point1: 'Intelligence Documentaire',
        point2: 'Forecasting assisté par LLM',
        point3: 'Compliance vs. politiques',
        point4: 'Assistant interne de procurement'
      }
    },
    umd: { subtitle: 'IA et Empowerment Professionnel', desc: 'Applications de l'IA en stratégie d'entreprise et automatisation des flux de procurement.' },
    mit: { subtitle: 'Supply Chain Analytics', desc: 'Méthodologies avancées d'analytics pour l'optimisation et le forecasting de la chaîne d'approvisionnement.' },
    harvard: { subtitle: 'Prise de Décision en Leadership', desc: 'Frameworks de décision basés sur les preuves et pensée stratégique pour les leaders.' },
    esl: {
      school: 'Gadsden State Community College',
      subtitle: 'Diplôme — ESL (Anglais comme 2ème Langue)',
      desc: 'Anglais académique: communication, écriture et présentations.'
    },
    vol: {
      title: 'Bénévolat et Impact Communautaire',
      subtitle: 'Retour via l'éducation et le mentorat',
      position: 'Instructeur de Mathématiques et Anglais',
      school: 'Gadsden State Community College',
      desc: 'Cours de mathématiques et d'anglais pour étudiants ayant besoin de soutien académique. J'ai développé des plans d'apprentissage personnalisés, mentoré des populations étudiantes diverses et contribué à des initiatives d'éducation communautaire. Cette expérience a renforcé mes compétences en communication, patience et capacité à expliquer des concepts complexes — compétences que j'applique actuellement en formation procurement et leadership d'équipes multifonctionnelles.'
    },
    github: {
      title: 'Projets GitHub et Data Science',
      subtitle: 'Transformer le procurement par le code et les insights',
      tagline: 'Passionné de Python utilisant la data science pour les décisions en procurement.',
      metrics: { accuracy: 'Précision de Prédiction', cost: 'Réduction des Coûts', stockout: 'Réduction de Rupture' },
      cta: 'Voir Tous les Repositories'
    },
    contact: {
      title: 'Connectons-nous',
      subtitle: 'Prêt à transformer votre stratégie de procurement?',
      email: 'Email',
      location: 'Localisation'
    }
  }
,

  pt: {
    nav: { about: 'Sobre', experience: 'Experiência', projects: 'Projetos', tradeshows: 'Feiras', certs: 'Certificações', contact: 'Contato' },
    hero: {
      title: 'Luciano Rodrigues de Souza',
      subtitle: 'Procurement & Operações orientados por IA · Transformação Estratégica',
      desc: 'Conecto governança, rigor técnico e IA para gerar resultados mensuráveis: tenders transparentes, parceiros confiáveis e operações resilientes na Europa, LATAM e Ásia.',
      badges: { top: 'Top Performer 2025', middle: 'Especialista em IA', bottom: 'Líder de Confiança' },
      stats: {
        savings: 'Poupança Acumulada',
        savings_note: 'Em negociações multi-categoria',
        rfps: 'RFP/RFQ Conduzidos',
        rfps_note: 'Com anexos técnicos e scoring ponderado',
        projects: 'Portfólio de Projetos',
        projects_note: 'Do conceito à produção auditada',
        regions: 'Países',
        regions_note: 'Europa · LATAM · Ásia'
      }
    },
    cta: { connect: 'Vamos Conversar', journey: 'Ver Trajetória' },
    about: {
      title: 'Filosofia de Liderança',
      subtitle: 'Das operações na LATAM à estratégia global de procurement',
      heading: 'Transformação pela Colaboração',
      body: {
        1: 'Desenho sistemas de procurement escaláveis: playbooks de RFI/RFP e BidMaps até governança, auditorias e desenvolvimento de fornecedores. Resultado: velocidade com controle — decisões mais rápidas, menos risco e responsabilidades claras.',
        2: 'Liderança transversal (Engenharia, ESG, Jurídico, Finanças, Operações) aliada a dados e IA. Foco em: requisitos claros, transparência de mercado e resultados mensuráveis.'
      },
      philosophy: '"Não apenas otimizo cadeias de suprimento — construo coalizões multifuncionais que transformam a forma de pensar procurement."',
      points: {
        1: 'Arquitetura de Processos: tender kits, scoring ponderado, compliance-by-design',
        2: 'IA & Analytics: RFPs inteligentes, parsing de propostas, forecasting, inventário',
        3: 'Estratégia de Fornecedores: auditorias, mapeamento de capacidades, dual-sourcing',
        4: 'Confiança em Stakeholders: dashboards transparentes, SLAs e governança pós-contrato'
      },
      lang: { pt: 'Português (Nativo)', en: 'Inglês (Nativo)', es: 'Espanhol (Prof.)', fr: 'Francês (Prof.)' }
    },
    timeline: {
      title: 'Trajetória Profissional',
      subtitle: '15+ anos de liderança progressiva',
      level: { senior: 'Nível Sênior', director: 'Diretoria', manager: 'Gestão', growth: 'Expansão' }
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Excelência em desenvolvimento de produto e inovação com IA',
      view_gallery: 'Ver Galeria'
    },
    proj: {
      critical: {
        title: "Aquisição de Infraestrutura Crítica",
        desc: "Aquisição estratégica e governança de todos os sistemas críticos de edifícios em mais de 50 ativos de hospitalidade. Gestão completa de SCIE/Segurança Contra Incêndio, Prevenção de Legionella, HVAC, Elevadores, Caldeiras e Hottis — garantindo conformidade regulatória total, continuidade operacional e otimização mensurável de custos. Frameworks estruturados de RFP/RFQ com anexos técnicos (A1/A2), matrizes de pontuação ponderada e documentação pronta para auditoria. *Representações visuais e volumes são aproximados para proteger a confidencialidade da empresa."
      },
      hospitality: {
        title: "Excelência em Operações de Hospitalidade",
        desc: "Aquisição completa para operações de hospitalidade de luxo em mais de 50 ativos premium. Gestão abrangente de F&B, lavanderia, energia, campos de golfe, courts de padel, clubhouses e spas. Sourcing estratégico que equilibra excelência de qualidade com otimização de custos, garantindo experiências impecáveis aos hóspedes enquanto entrega impacto financeiro mensurável. Inclui integração de Monte Rei, Els Club, San Lourenzo com onboarding completo em conformidade. *Representações de dados são ilustrativas para manter a confidencialidade corporativa."
      },
      digital: {
        title: "Transformação Digital de Procurement",
        desc: "Integração Primavera P6 e e-Procurement (Mercado Eletrônico) com BidMaps automatizados, dashboards Power BI em tempo real e análise preditiva. Rastreabilidade completa da requisição ao pagamento, com workflows automatizados, scorecards de fornecedores e monitoramento de conformidade. Sistemas de procurement e contabilidade conectados permitindo harmonização de dados e acompanhamento de performance em tempo real. €1M+ em economias entregues em 2025, com meta de €3M no próximo ano através de tomada de decisão baseada em dados. *Visuais de dashboards representam métricas aproximadas por confidencialidade."
      },
      blaupunkt: {
        tools: { desc: "Criação e lançamento de linha completa de ferramentas para o mercado europeu — do conceito, BOM e compliance à produção." },
        power: { desc: "Furadeiras, serras e lixadeiras profissionais com especificações técnicas, auditorias e certificações de segurança." },
        garden: { desc: "Equipamentos outdoor (motosserras, aparadores) com documentação completa e conformidade de segurança." }
      },
      sj: { desc: "Panelas de ferro fundido esmaltado premium para marca britânica de tradição (desde 1760)." },
      pininfarina: { desc: "Eletrodomésticos premium para cozinha externa com design italiano e coordenação global (UE/Ásia)." },
      nks: {
        estrelas: { desc: "Eletrônicos e eletrodomésticos para o mercado brasileiro com gestão completa do ciclo de vida." },
        audio: { desc: "Áudio profissional e consumer: caixas, sistemas de som e fones (conformidade ANATEL)." },
        maisvc: { desc: "Linha de beleza e cuidados pessoais com certificação INMETRO para varejo brasileiro." }
      },
      ml: {
        title: "Projetos de IA & ML (Selecionados)",
        desc: "Portfólio consolidado: previsão de vendas, otimização de inventário, uplift de promoções, elasticidade de preço, detecção de anomalias/qualidade, churn e CLV.",
        caption1: "Portfólio de Machine Learning",
        caption2: "Previsão · Otimização · Uplift"
      }
    },
    tradeshows: {
      title: 'Feiras & Expos Internacionais',
      subtitle: 'Expositor e comprador estratégico em mercados globais',
      blaupunkt: {
        1: { title: "Estande Blaupunkt Ilumination", desc: "Hong Kong International Lighting Fair — experiência premium co-criada com Marketing." },
        2: { title: "Design de Estande & Storytelling", desc: "Layout, fluxo, demonstrações de iluminação e merchandising alinhados à estratégia." },
        3: { title: "Excelência em Exposição de Produtos", desc: "Portfólio completo com destaques de compliance e cards de features técnicas." },
        4: { title: "Geração de Leads", desc: "Reuniões no estande, scanning, qualificação e inserção em tempo real no pipeline." },
        5: { title: "Coordenação Global", desc: "Mensagem de marca consistente entre regiões com sortimentos localizados." }
      },
      ford: {
        1: { title: "Hong Kong International Lighting Fair", desc: "Planejamento estratégico do estande com Marketing & Merchandising; narrativas e demos." },
        2: { title: "Reuniões & Captação de Leads", desc: "Agenda de reuniões, qualificação de leads e follow-up estruturado pós-feira." },
        3: { title: "Engajamento com Fornecedores", desc: "Negociações, amostras técnicas, custos, MOQs e roadmaps de certificação." }
      },
      strategy: {
        title: 'Estratégia & Execução de Feiras',
        desc: 'Além do stand: co-crio com Marketing a jornada ponta a ponta — design, narrativa e assets; orquestro reuniões, qualifico leads e conduzo o pipeline pós-feira. Em paralelo, negocio com parceiros, faço benchmark de tecnologias e audito fábricas.',
        pillars: {
          1: 'Design de Stand & Merchandising',
          2: 'Reuniões & Captação de Leads',
          3: 'Negociações & Parcerias',
          4: 'Descoberta Tecnológica',
          5: 'Auditorias de Fábrica',
          6: 'Pipeline, ROI & Governança'
        }
      }
    },
    certs: {
      title: 'Certificações & Educação',
      subtitle: 'Aprendizado contínuo em IA, Data Science e Procurement'
    },
    framework: {
      title: 'Framework Estratégico de Procurement orientado por IA',
      desc: 'Framework executivo one-page que mostra como IA, dados e alinhamento operacional elevam a performance de procurement.',
      badge: 'Metodologia Proprietária'
    },
    ibm: {
      apply: { title: 'Aplicações em Procurement:' },
      genai: {
        subtitle: 'Fundamentos em IA Generativa',
        desc: 'Fundamentos de LLMs, prompt engineering e ética; aplicação prática em fluxos de procurement.',
        point1: 'Leitura de Contratos: extração de cláusulas e riscos',
        point2: 'RFPs Inteligentes: specs/SoW automáticos, horas poupadas',
        point3: 'Comunicação com Fornecedores: templates consistentes',
        point4: 'Inteligência de Mercado: comparação de propostas'
      },
      llms: {
        subtitle: 'Introdução a LLMs',
        desc: 'Transformers, tokenização e prompting; padrões de extração e suporte à decisão.',
        point1: 'Inteligência de Documentos',
        point2: 'Forecasting assistido por LLM',
        point3: 'Compliance vs. políticas',
        point4: 'Assistente interno de procurement'
      }
    },
    umd: { subtitle: 'IA e Empoderamento de Carreira', desc: 'Aplicações de IA em estratégia de negócios e automação de fluxos de procurement.' },
    mit: { subtitle: 'Supply Chain Analytics', desc: 'Metodologias avançadas de analytics para otimização e forecasting da cadeia de suprimentos.' },
    harvard: { subtitle: 'Tomada de Decisão em Liderança', desc: 'Frameworks de decisão baseados em evidências e pensamento estratégico para líderes.' },
    esl: {
      school: 'Gadsden State Community College',
      subtitle: 'Diploma — ESL (Inglês como 2ª Língua)',
      desc: 'Inglês acadêmico: comunicação, escrita e apresentações.'
    },
    vol: {
      title: 'Voluntariado & Impacto Comunitário',
      subtitle: 'Retribuindo através da educação e mentoria',
      position: 'Instrutor de Matemática & Inglês',
      school: 'Gadsden State Community College',
      desc: 'Aulas de matemática e inglês para alunos com necessidade de apoio acadêmico. Desenvolvi planos de aprendizado personalizados, mentorei populações diversas de estudantes e contribuí para iniciativas de educação comunitária. Esta experiência fortaleceu minhas habilidades de comunicação, paciência e capacidade de explicar conceitos complexos — habilidades que aplico atualmente em treinamento de procurement e liderança de equipes multifuncionais.'
    },
    github: {
      title: 'Projetos de GitHub & Data Science',
      subtitle: 'Transformando procurement com código e insights',
      tagline: 'Entusiasta de Python usando data science para decisões em procurement.',
      metrics: { accuracy: 'Acurácia de Previsão', cost: 'Redução de Custo', stockout: 'Redução de Ruptura' },
      cta: 'Ver Todos os Repositórios'
    },
    contact: {
      title: 'Vamos Conversar',
      subtitle: 'Pronto para transformar sua estratégia de procurement?',
      email: 'Email',
      location: 'Localização'
    }
  }
};

/* -------------------------
   Helpers / Estado Global
--------------------------*/
const PG_state = { images: [], index: 0, currentLang: 'en' };
const CardSlides = new Map();
let savedScrollPosition = 0;

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, evt, fn, opts) => el && el.addEventListener(evt, fn, opts);

/* -------------------------
   Dados — Stats & Estratégia
--------------------------*/
const getStatDetailsData = () => ({
  savings: {
    icon: "fa-piggy-bank",
    title: { en: "Cumulative Savings Delivered", pt: "Poupança Acumulada Entregue" },
    value: "€1M+",
    details: {
      en: [
        "Multi-category strategic sourcing initiatives across direct and indirect spend",
        "Negotiated favorable payment terms (60-90 days) improving cash flow",
        "Implemented should-cost modeling identifying 15-25% cost reduction opportunities",
        "Consolidated supplier base from 200+ to 80 key partners",
        "Zero-based budgeting approach for CAPEX projects saving 20% on average"
      ],
      pt: [
        "Iniciativas de strategic sourcing multi‑categoria em despesas diretas e indiretas",
        "Negociação de prazos de pagamento favoráveis (60–90 dias) melhorando o cash flow",
        "Modelos de should‑cost identificando oportunidades de 15–25% de redução de custos",
        "Consolidação da base de fornecedores de 200+ para 80 parceiros‑chave",
        "Orçamentação base‑zero para projetos CAPEX economizando ~20% em média"
      ]
    }
  },
  rfps: {
    icon: "fa-file-contract",
    title: { en: "Strategic Tenders Led", pt: "Tenders Estratégicos Conduzidos" },
    value: "120+",
    details: {
      en: [
        "End-to-end RFI/RFP/RFQ process design with technical annexes (A1/A2)",
        "Weighted scoring matrices balancing technical (40%), commercial (35%), and ESG (25%) criteria",
        "E-procurement platform integration with full audit trails",
        "Cross-functional evaluation committees (Engineering, Finance, Legal, Operations)",
        "Average cycle time reduction from 45 to 28 days while improving compliance"
      ],
      pt: [
        "Desenho ponta‑a‑ponta de RFI/RFP/RFQ com anexos técnicos (A1/A2)",
        "Matrizes de scoring ponderado: técnico (40%), comercial (35%) e ESG (25%)",
        "Integração com plataforma de e‑procurement com trilhas de auditoria",
        "Comitês de avaliação multifuncionais (Engenharia, Finanças, Jurídico, Operações)",
        "Redução do ciclo médio de 45 para 28 dias com mais compliance"
      ]
    }
  },
  projects: {
    icon: "fa-project-diagram",
    title: { en: "Project Portfolio Value", pt: "Valor do Portfólio de Projetos" },
    value: "€10M+",
    details: {
      en: [
        "New product development from concept to mass production",
        "Licensed portfolio launches (Blaupunkt, Spear & Jackson, Pininfarina)",
        "Factory audits and supplier capability assessments across Asia",
        "Quality system implementations (ISO 9001, compliance frameworks)",
        "Cross-border logistics optimization and customs compliance"
      ],
      pt: [
        "Desenvolvimento de produto do conceito à produção em massa",
        "Lançamentos licenciados (Blaupunkt, Spear & Jackson, Pininfarina)",
        "Auditorias fabris e avaliação de capacidades na Ásia",
        "Implementação de sistemas de qualidade (ISO 9001, frameworks de compliance)",
        "Otimização logística transfronteiriça e conformidade aduaneira"
      ]
    }
  },
  regions: {
    icon: "fa-globe",
    title: { en: "Global Operations Coverage", pt: "Cobertura Operacional Global" },
    value: "20+",
    details: {
      en: [
        "Europe: Portugal, Spain, Germany, UK, Netherlands, Italy, France",
        "LATAM: Brazil, Argentina, Chile, Colombia, Mexico, Peru, Uruguay",
        "Asia: China, Hong Kong, Taiwan, Vietnam, India, South Korea",
        "Multi-cultural negotiation experience and local market knowledge",
        "Time zone coordination for 24/7 project execution"
      ],
      pt: [
        "Europa: Portugal, Espanha, Alemanha, Reino Unido, Países Baixos, Itália, França",
        "LATAM: Brasil, Argentina, Chile, Colômbia, México, Peru, Uruguai",
        "Ásia: China, Hong Kong, Taiwan, Vietname, Índia, Coreia do Sul",
        "Negociação multicultural e conhecimento de mercados locais",
        "Coordenação de fuso horário para execução 24/7"
      ]
    }
  }
});

const getStrategyDetailsData = () => ({
  1: {
    title: { en: "Stand Design & Merchandising", pt: "Design de Stand & Merchandising" },
    subtitle: { en: "Creating immersive brand experiences", pt: "Criando experiências de marca imersivas" },
    icon: "fa-drafting-compass",
    sections: {
      en: [
        {
          title: "Strategic Approach",
          items: [
            "Co-created booth concept with Marketing aligning to brand positioning",
            "Traffic flow optimization for maximum visitor engagement",
            "Product display hierarchy highlighting hero SKUs and new launches",
            "Lighting and visual merchandising for premium brand perception",
            "Interactive demo stations for hands-on product experience"
          ]
        },
        {
          title: "Technical Execution",
          items: [
            "3D renderings and mockups approved 60 days prior to event",
            "Modular stand components for reusability across fairs",
            "Digital signage integration with real-time product catalogs",
            "Storage and logistics planning for 500+ SKU displays",
            "On-site supervision during build-up and dismantling"
          ]
        }
      ],
      pt: [
        {
          title: "Abordagem Estratégica",
          items: [
            "Co-criação do conceito do stand com Marketing alinhado ao posicionamento da marca",
            "Otimização do fluxo de tráfego para máximo engajamento de visitantes",
            "Hierarquia de exibição de produtos destacando SKUs principais e novos lançamentos",
            "Iluminação e merchandising visual para percepção premium da marca",
            "Estações de demonstração interativas para experiência prática do produto"
          ]
        },
        {
          title: "Execução Técnica",
          items: [
            "Renderizações 3D e maquetes aprovadas 60 dias antes do evento",
            "Componentes modulares do stand para reutilização em feiras",
            "Integração de sinalização digital com catálogos de produtos em tempo real",
            "Planejamento de armazenamento e logística para exibição de 500+ SKUs",
            "Supervisão no local durante montagem e desmontagem"
          ]
        }
      ]
    }
  },
  2: {
    title: { en: "Meetings Orchestration & Lead Capture", pt: "Reuniões & Captação de Leads" },
    subtitle: { en: "Maximizing ROI through structured engagement", pt: "Maximizando ROI através de engajamento estruturado" },
    icon: "fa-calendar-check",
    sections: {
      en: [
        {
          title: "Pre-Event Planning",
          items: [
            "Target list development: 200+ qualified prospects per fair",
            "Meeting scheduling system with automated reminders",
            "Sales team briefing with product knowledge sessions",
            "Customized pitch decks by customer segment",
            "Lead scoring criteria defined (budget, timeline, authority)"
          ]
        },
        {
          title: "On-Site Execution",
          items: [
            "Structured 30-minute meeting slots with clear agendas",
            "Real-time lead capture via CRM mobile app",
            "Immediate follow-up emails sent within 4 hours",
            "Meeting notes standardized for pipeline visibility",
            "Daily team huddles to adjust strategy based on feedback"
          ]
        }
      ],
      pt: [
        {
          title: "Planejamento Pré-Evento",
          items: [
            "Desenvolvimento de lista de alvos: 200+ prospectos qualificados por feira",
            "Sistema de agendamento de reuniões com lembretes automatizados",
            "Briefing da equipe de vendas com sessões de conhecimento de produto",
            "Pitch decks personalizados por segmento de cliente",
            "Critérios de pontuação de leads definidos (orçamento, cronograma, autoridade)"
          ]
        },
        {
          title: "Execução no Local",
          items: [
            "Slots de reunião estruturados de 30 minutos com agendas claras",
            "Captação de leads em tempo real via app móvel de CRM",
            "Emails de acompanhamento imediato enviados em até 4 horas",
            "Notas de reunião padronizadas para visibilidade do pipeline",
            "Reuniões diárias da equipe para ajustar estratégia baseada em feedback"
          ]
        }
      ]
    }
  },
  3: {
    title: { en: "Negotiations & Partnering", pt: "Negociações & Parcerias" },
    subtitle: { en: "Building strategic supplier relationships", pt: "Construindo relacionamentos estratégicos com fornecedores" },
    icon: "fa-handshake-angle",
    sections: {
      en: [
        {
          title: "Partnership Development",
          items: [
            "Initial qualification: financial stability, capacity, certifications",
            "Term sheet negotiations: MOQ, payment terms, exclusivity clauses",
            "Pricing framework with volume breaks and annual rebates",
            "Quality agreements defining defect rates and corrective actions",
            "IP protection and NDA frameworks for new product development"
          ]
        },
        {
          title: "Contractual Framework",
          items: [
            "Master Service Agreements (MSA) with standardized terms",
            "Statement of Work (SoW) templates for project-based work",
            "Service Level Agreements (SLA) with penalty/incentive clauses",
            "Force majeure and business continuity provisions",
            "Exit clauses and knowledge transfer obligations"
          ]
        }
      ],
      pt: [
        {
          title: "Desenvolvimento de Parcerias",
          items: [
            "Qualificação inicial: estabilidade financeira, capacidade, certificações",
            "Negociações de term sheet: MOQ, prazos de pagamento, cláusulas de exclusividade",
            "Framework de preços com quebras de volume e rebates anuais",
            "Acordos de qualidade definindo taxas de defeito e ações corretivas",
            "Proteção de PI e frameworks de NDA para desenvolvimento de novos produtos"
          ]
        },
        {
          title: "Framework Contratual",
          items: [
            "Master Service Agreements (MSA) com termos padronizados",
            "Templates de Statement of Work (SoW) para trabalho baseado em projeto",
            "Service Level Agreements (SLA) com cláusulas de penalidade/incentivo",
            "Disposições de força maior e continuidade de negócios",
            "Cláusulas de saída e obrigações de transferência de conhecimento"
          ]
        }
      ]
    }
  },
  4: {
    title: { en: "Tech Discovery & Benchmark", pt: "Descoberta Tecnológica" },
    subtitle: { en: "Staying ahead of market innovation", pt: "Mantendo-se à frente da inovação de mercado" },
    icon: "fa-microchip",
    sections: {
      en: [
        {
          title: "Market Intelligence",
          items: [
            "Technology scouting across 50+ supplier booths per fair",
            "Competitive product teardowns and feature comparison",
            "Cost benchmarking for similar specifications",
            "Innovation trend mapping (IoT, sustainability, smart features)",
            "Patent landscape analysis for freedom to operate"
          ]
        },
        {
          title: "Technical Evaluation",
          items: [
            "Sample collection for lab testing and validation",
            "Engineering team consultations on technical feasibility",
            "Prototype review and design for manufacturing (DFM) feedback",
            "Certification requirements assessment (CE, FCC, ANATEL)",
            "Roadmap alignment with supplier R&D investments"
          ]
        }
      ],
      pt: [
        {
          title: "Inteligência de Mercado",
          items: [
            "Scouting de tecnologia em 50+ stands de fornecedores por feira",
            "Desmontagem de produtos concorrentes e comparação de features",
            "Benchmark de custos para especificações similares",
            "Mapeamento de tendências de inovação (IoT, sustentabilidade, features inteligentes)",
            "Análise de panorama de patentes para liberdade de operação"
          ]
        },
        {
          title: "Avaliação Técnica",
          items: [
            "Coleta de amostras para testes de laboratório e validação",
            "Consultas da equipe de engenharia sobre viabilidade técnica",
            "Revisão de protótipos e feedback de design para manufatura (DFM)",
            "Avaliação de requisitos de certificação (CE, FCC, ANATEL)",
            "Alinhamento de roadmap com investimentos em P&D de fornecedores"
          ]
        }
      ]
    }
  },
  5: {
    title: { en: "Factory Audits & Capability Mapping", pt: "Auditorias de Fábrica" },
    subtitle: { en: "Ensuring operational excellence", pt: "Garantindo excelência operacional" },
    icon: "fa-industry",
    sections: {
      en: [
        {
          title: "Audit Framework",
          items: [
            "ISO 9001 quality management system verification",
            "Production capacity analysis (lines, shifts, utilization)",
            "Equipment maintenance records and calibration certificates",
            "Workforce skill assessment and training programs",
            "Environmental compliance and waste management practices"
          ]
        },
        {
          title: "Risk Assessment",
          items: [
            "Financial health check (credit reports, payment history)",
            "Supply chain resilience (dual sourcing, buffer stock)",
            "Social compliance audits (SA8000, BSCI standards)",
            "Cybersecurity protocols for data-sharing partnerships",
            "Business continuity planning and disaster recovery"
          ]
        }
      ],
      pt: [
        {
          title: "Framework de Auditoria",
          items: [
            "Verificação do sistema de gestão de qualidade ISO 9001",
            "Análise de capacidade produtiva (linhas, turnos, utilização)",
            "Registros de manutenção de equipamentos e certificados de calibração",
            "Avaliação de habilidades da força de trabalho e programas de treinamento",
            "Conformidade ambiental e práticas de gestão de resíduos"
          ]
        },
        {
          title: "Avaliação de Riscos",
          items: [
            "Verificação de saúde financeira (relatórios de crédito, histórico de pagamentos)",
            "Resiliência da cadeia de suprimentos (dual sourcing, estoque de segurança)",
            "Auditorias de conformidade social (padrões SA8000, BSCI)",
            "Protocolos de cibersegurança para parcerias de compartilhamento de dados",
            "Planejamento de continuidade de negócios e recuperação de desastres"
          ]
        }
      ]
    }
  },
  6: {
    title: { en: "Post-Fair Pipeline, ROI & Governance", pt: "Pipeline, ROI & Governança" },
    subtitle: { en: "Converting leads into revenue", pt: "Convertendo leads em receita" },
    icon: "fa-chart-line",
    sections: {
      en: [
        {
          title: "Pipeline Management",
          items: [
            "Lead categorization: Hot (immediate), Warm (3 months), Cold (nurture)",
            "CRM integration with automated follow-up sequences",
            "Opportunity value estimation and win probability scoring",
            "Cross-functional handover to regional sales teams",
            "Weekly pipeline review meetings for first 30 days"
          ]
        },
        {
          title: "Performance Metrics",
          items: [
            "Cost per lead calculation (stand cost ÷ qualified leads)",
            "Conversion rate tracking from lead to order",
            "Average deal size comparison vs. non-fair customers",
            "Time-to-close analysis identifying bottlenecks",
            "Annual ROI reporting for marketing budget justification"
          ]
        }
      ],
      pt: [
        {
          title: "Gestão de Pipeline",
          items: [
            "Categorização de leads: Hot (imediato), Warm (3 meses), Cold (nutrição)",
            "Integração com CRM com sequências automatizadas de acompanhamento",
            "Estimativa de valor de oportunidade e pontuação de probabilidade de ganho",
            "Handover multifuncional para equipes de vendas regionais",
            "Reuniões semanais de revisão de pipeline para primeiros 30 dias"
          ]
        },
        {
          title: "Métricas de Performance",
          items: [
            "Cálculo de custo por lead (custo do stand ÷ leads qualificados)",
            "Acompanhamento de taxa de conversão de lead para pedido",
            "Comparação de tamanho médio de negócio vs. clientes não-feira",
            "Análise de tempo para fechamento identificando gargalos",
            "Relatório anual de ROI para justificação de orçamento de marketing"
          ]
        }
      ]
    }
  }
});

/* -------------------------
   Modais — Stats
--------------------------*/
function openStatModal(key) {
  const lang = PG_state.currentLang || 'en';
  const data = getStatDetailsData()[key];
  if (!data) return;

  $('#statModalIcon').className = `fas ${data.icon}`;
  $('#statModalTitle').textContent = data.title[lang] || data.title.en;
  $('#statModalValue').textContent = data.value;
  $('#statModalDetails').innerHTML = (data.details[lang] || data.details.en).map(it => `<li>${it}</li>`).join('');
  $('#statModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStatModal() {
  const overlay = $('#statModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/* -------------------------
   Modais — Estratégia
--------------------------*/
function openStrategyModal(num) {
  const lang = PG_state.currentLang || 'en';
  const data = getStrategyDetailsData()[num];
  if (!data) return;

  $('#strategyDetailIcon').className = `fas ${data.icon}`;
  $('#strategyDetailTitle').textContent = data.title[lang] || data.title.en;
  $('#strategyDetailSubtitle').textContent = data.subtitle[lang] || data.subtitle.en;

  const sections = data.sections[lang] || data.sections.en;
  const body = sections.map(sec => {
    const items = sec.items.map(li => `<li>${li}</li>`).join('');
    return `<div class="strategy-detail-section"><h4><i class="fas fa-chevron-right"></i> ${sec.title}</h4><ul>${items}</ul></div>`;
  }).join('');

  $('#strategyDetailBody').innerHTML = body;
  $('#strategyDetailOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStrategyModal() {
  const overlay = $('#strategyDetailOverlay');
  if (!overlay) return;

  const card = overlay.querySelector('.strategy-detail-card');
  const body = overlay.querySelector('.strategy-detail-body');

  if (card) {
    card.scrollTop = 0;
    card.scrollTo(0, 0);
  }
  if (body) {
    body.scrollTop = 0;
    body.scrollTo(0, 0);
  }

  overlay.scrollTop = 0;
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/* -------------------------
   Galerias — Bolinhas
--------------------------*/
function updateCardDots(card, idx) {
  const dots = card.querySelectorAll('.gallery-dot');
  dots.forEach((dot, i) => {
    if (i === idx) {
      dot.classList.add('active');
      dot.style.transform = 'scale(1.4)';
      dot.style.background = 'var(--gold)';
      dot.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.6)';
    } else {
      dot.classList.remove('active');
      dot.style.transform = 'scale(1)';
      dot.style.background = 'rgba(255, 255, 255, 0.5)';
      dot.style.boxShadow = 'none';
    }
  });
}

function changeProjectSlide(dir) {
  if (!PG_state.images.length) return;

  const modal = document.getElementById('projectGalleryModal');
  if (!modal) return;

  const slides = modal.querySelectorAll('.gallery-slide');
  const dots = modal.querySelectorAll('.gallery-dot');

  if (slides[PG_state.index]) {
    slides[PG_state.index].classList.remove('active');
  }
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.remove('active');
    dots[PG_state.index].style.transform = 'scale(1)';
    dots[PG_state.index].style.background = 'rgba(212, 175, 55, 0.34)';
    dots[PG_state.index].style.boxShadow = 'none';
  }

  PG_state.index = (PG_state.index + dir + PG_state.images.length) % PG_state.images.length;

  if (slides[PG_state.index]) {
    slides[PG_state.index].classList.add('active');
  }
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.add('active');
    dots[PG_state.index].style.transform = 'scale(1.4)';
    dots[PG_state.index].style.background = 'var(--gold)';
    dots[PG_state.index].style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.6)';
  }
}

function goToProjectSlide(idx) {
  if (!PG_state.images.length) return;

  const modal = document.getElementById('projectGalleryModal');
  if (!modal) return;

  const slides = modal.querySelectorAll('.gallery-slide');
  const dots = modal.querySelectorAll('.gallery-dot');

  if (slides[PG_state.index]) {
    slides[PG_state.index].classList.remove('active');
  }
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.remove('active');
    dots[PG_state.index].style.transform = 'scale(1)';
    dots[PG_state.index].style.background = 'rgba(212, 175, 55, 0.34)';
    dots[PG_state.index].style.boxShadow = 'none';
  }

  PG_state.index = idx;

  if (slides[PG_state.index]) {
    slides[PG_state.index].classList.add('active');
  }
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.add('active');
    dots[PG_state.index].style.transform = 'scale(1.4)';
    dots[PG_state.index].style.background = 'var(--gold)';
    dots[PG_state.index].style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.6)';
  }
}

/* -------------------------
   Galerias de Projetos
--------------------------*/
function setupCardAutoSlide(card) {
  const container = card.querySelector('.gallery-main');
  if (!container) return;

  let images = [];
  const csv = card.getAttribute('data-images') || '';
  if (csv.trim()) {
    images = csv.split(',').map(s => s.trim()).filter(Boolean);
  } else {
    const main = container.querySelector('img');
    if (main?.src) images = [main.src];
  }
  if (!images.length) return;

  const imgEl = container.querySelector('img');
  const auto = card.getAttribute('data-autoslide') === 'true';
  const interval = Math.max(1200, parseInt(card.getAttribute('data-interval'), 10) || 2500);

  const state = { images, idx: 0, timer: null, interval, imgEl, paused: false };
  CardSlides.set(card, state);

  function tick() {
    if (state.paused || !auto || state.images.length <= 1) return;
    state.idx = (state.idx + 1) % state.images.length;
    state.imgEl.style.opacity = '0';
    setTimeout(() => {
      state.imgEl.src = state.images[state.idx];
      state.imgEl.onload = () => { state.imgEl.style.opacity = '1'; };
      updateCardDots(card, state.idx);
    }, 160);
  }
  function start() {
    stop();
    if (auto && state.images.length > 1) state.timer = setInterval(tick, state.interval);
  }
  function stop() {
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = null;
    }
  }

  on(card, 'mouseenter', () => { state.paused = true; });
  on(card, 'mouseleave', () => { state.paused = false; });

  const clickable = card.querySelector('.gallery-overlay') || container;
  on(clickable, 'click', (e) => {
    e.stopPropagation();
    openProjectGalleryFromCard(card);
  });

  start();
}

function openProjectGalleryFromCard(card) {
  savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;

  const modal = $('#projectGalleryModal');
  if (!modal) return;

  let images = [];
  const csv = card.getAttribute('data-images') || '';
  if (csv.trim()) {
    images = csv.split(',').map(s => s.trim()).filter(Boolean);
  } else {
    const main = card.querySelector('.gallery-main img');
    if (main?.src) images = [main.src];
  }
  if (!images.length) return;

  buildProjectSlides(images);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function buildProjectSlides(images) {
  const slider = $('#gallerySlider');
  const dotsContainer = $('#galleryDots');
  if (!slider || !dotsContainer) return;

  slider.innerHTML = '';
  dotsContainer.innerHTML = '';

  images.forEach((src, idx) => {
    const slide = document.createElement('div');
    slide.className = 'gallery-slide' + (idx === 0 ? ' active' : '');
    const img = document.createElement('img');
    img.alt = 'Project image ' + (idx + 1);
    img.src = src;
    slide.appendChild(img);
    slider.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'gallery-dot' + (idx === 0 ? ' active' : '');
    if (idx === 0) {
      dot.style.transform = 'scale(1.4)';
      dot.style.background = 'var(--gold)';
      dot.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.6)';
    }
    dot.addEventListener('click', () => goToProjectSlide(idx));
    dotsContainer.appendChild(dot);
  });

  PG_state.images = images.slice();
  PG_state.index = 0;
}

function closeProjectGallery() {
  const modal = $('#projectGalleryModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    if (savedScrollPosition > 0) {
      setTimeout(() => {
        window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
        savedScrollPosition = 0;
      }, 10);
    }
  }
}

/* -------------------------
   Inicializações
--------------------------*/
function initMobileEnhancements() {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (!isTouch) return;

  $$('.stat-box, .strategy-item, .project-card, .gallery-item').forEach(el => {
    on(el, 'touchstart', function(){ this.style.transform = 'scale(0.98)'; }, { passive: true });
    on(el, 'touchend',   function(){ this.style.transform = '';           }, { passive: true });
  });

  $$('.project-card').forEach(card => {
    let startX = 0, currentX = 0;
    const gallery = card.querySelector('.gallery-main');
    if (!gallery) return;

    on(gallery, 'touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    on(gallery, 'touchmove',  e => { currentX = e.touches[0].clientX; }, { passive: true });
    on(gallery, 'touchend',   () => {
      const diff = startX - currentX;
      if (Math.abs(diff) > 50) {
        const state = CardSlides.get(card);
        if (state && state.images.length > 1) {
          state.idx = diff > 0 
            ? (state.idx + 1) % state.images.length
            : (state.idx - 1 + state.images.length) % state.images.length;

          state.imgEl.style.opacity = '0';
          setTimeout(() => {
            state.imgEl.src = state.images[state.idx];
            state.imgEl.onload = () => { state.imgEl.style.opacity = '1'; };
            updateCardDots(card, state.idx);
          }, 160);
        }
      }
    }, { passive: true });
  });
}

function enhanceProjectGalleries() {
  const map = {
    "blaupunkt": [
      "./Blaupunkt_Tools.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_1.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_2.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_3.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_4.png"
    ],
    "blaupunkt-power": ["./Blaupunkt_Power_Tools.png"],
    "blaupunkt-garden": ["./Blaupunkt_Garden_Tools.png"]
  };

  Object.keys(map).forEach(key => {
    const card = document.querySelector(`.project-card[data-gallery="${key}"]`);
    if (!card) return;
    const images = map[key];
    card.setAttribute('data-images', images.join(','));

    const gallery = card.querySelector('.project-gallery');
    if (gallery && !gallery.querySelector('.gallery-dots')) {
      const dots = document.createElement('div');
      dots.className = 'gallery-dots';
      images.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `gallery-dot ${i === 0 ? 'active' : ''}`;
        if (i === 0) {
          dot.style.transform = 'scale(1.4)';
          dot.style.background = 'var(--gold)';
          dot.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.6)';
        }
        dots.appendChild(dot);
      });
      gallery.appendChild(dots);
    }
  });
}

function initVolunteerEnhancement() {
  const section = $('#volunteering');
  if (!section) return;
  if (section.querySelector('.volunteer-hero-image')) return;

  const header = section.querySelector('.section-header');
  if (!header) return;

  const hero = document.createElement('div');
  hero.className = 'volunteer-hero-image animate-on-scroll visible';
  hero.innerHTML = '<img src="./gadsdenstatecommunitycollege.jpg" alt="Gadsden State Community College" onerror="this.style.display=\'none\'" />';
  header.after(hero);
}

function fixGadsdenImages() {
  $$('.cert-logo img').forEach(img => {
    if (img.src.includes('Gadsden') || img.alt.includes('Gadsden')) {
      img.onerror = function () { this.src = './gadsdenstatecommunitycollege_logo.jpg'; };
    }
  });
}

function initScrollAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  $$('.animate-on-scroll').forEach(el => io.observe(el));
}

function initNavbarScroll() {
  const navbar = $('#navbar');
  const scrollTopBtn = $('#scrollTop');
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    navbar?.classList.toggle('scrolled', y > 50);
    scrollTopBtn?.classList.toggle('visible', y > 600);
    updateTimelineSpy();
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function initLightbox() {
  const lb = $('#lightbox');
  const lbImg = $('#lightbox-img');
  if (!lb || !lbImg) return;

  on(lb, 'click', (e) => { if (e.target === lb) closeLightbox(); });
  on(document, 'keydown', (e) => { if (lb.classList.contains('active') && e.key === 'Escape') closeLightbox(); });
}

function openLightbox(el) {
  savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;

  const lb = $('#lightbox');
  const lbImg = $('#lightbox-img');
  if (!lb || !lbImg) return;
  const img = el?.querySelector?.('img');
  if (!img?.src) return;
  lbImg.src = img.src;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = $('#lightbox');
  if (!lb) return;
  lb.classList.remove('active');
  document.body.style.overflow = 'auto';

  if (savedScrollPosition > 0) {
    setTimeout(() => {
      window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
      savedScrollPosition = 0;
    }, 10);
  }
}

function initTradeTabs() {
  const tabs = $$('.gallery-tab');
  if (!tabs.length) return;
  tabs.forEach(btn => {
    on(btn, 'click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      $$('.gallery-content').forEach(gc => gc.classList.remove('active'));
      const panel = $('#' + btn.dataset.target);
      panel?.classList.add('active');
    });
  });
}

function showToast(message = '') {
  const t = $('#toast');
  if (!t) return;
  t.textContent = message;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function updateTimelineSpy() {
  const items = $$('.timeline-item');
  if (!items.length) return;
  const logoImg = $('#logo-img');
  const indicators = $$('.indicator-dot');
  if (!logoImg) return;

  let activeIndex = 0;
  const windowHeight = window.innerHeight;
  const midTop = windowHeight * 0.62;
  const midBottom = windowHeight * 0.38;

  items.forEach((item, idx) => {
    const r = item.getBoundingClientRect();
    if (r.top < midTop && r.bottom > midBottom) {
      activeIndex = idx;
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const lastIndex = items.length - 1;
  const lastItem = items[lastIndex];
  const lastItemRect = lastItem?.getBoundingClientRect();

  if (lastItemRect && lastItemRect.top < windowHeight * 0.8) {
    activeIndex = lastIndex;
  }

  const activeItem = items[activeIndex];
  if (activeItem) {
    const newLogo = activeItem.getAttribute('data-logo');
    const currentSrc = logoImg.getAttribute('src');
    if (newLogo && newLogo !== currentSrc) {
      logoImg.style.opacity = '0';
      setTimeout(() => {
        logoImg.src = newLogo;
        logoImg.onload = () => { logoImg.style.opacity = '1'; };
      }, 160);
    }
  }
  indicators.forEach((dot, idx) => dot.classList.toggle('active', idx === activeIndex));
}

function initParticles() {
  const container = $('#particles');
  if (!container) return;
  const count = 26;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    const s = Math.max(3, Math.min(6, 3 + Math.random() * 4));
    p.style.width = p.style.height = s + 'px';
    p.style.opacity = (0.22 + Math.random() * 0.35).toFixed(2);
    p.style.animationDelay = (Math.random() * 5).toFixed(2) + 's';
    p.style.animationDuration = (4 + Math.random() * 5).toFixed(2) + 's';
    p.style.position = 'absolute';
    p.style.background = 'var(--gold)';
    p.style.borderRadius = '50%';
    p.style.pointerEvents = 'none';
    container.appendChild(p);
  }
}

function translateAll(lang) {
  PG_state.currentLang = lang;
  document.documentElement.lang = lang;
  const dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N['en']) || {};
  $$('[data-i18n]').forEach(el => {
    const path = el.dataset.i18n;
    const value = path?.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), dict);
    if (value !== undefined) el.textContent = value;
  });
  setTimeout(updateTimelineSpy, 100);
}

function markActiveLang(lang) {
  $$('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}

function initLangSwitcher() {
  const switcher = $('#langSwitcher');
  if (!switcher) return;
  on(switcher, 'click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    const lang = btn.dataset.lang;
    if (!lang) return;
    translateAll(lang);
    markActiveLang(lang);
    try { localStorage.setItem('lang', lang); } catch(e) {}
    showToast(`Translated to ${lang.toUpperCase()}`);
  });
}

function initI18N() {
  try {
    const stored = localStorage.getItem('lang');
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    const initial = stored || (['en', 'pt', 'es', 'fr'].includes(browser) ? browser : 'en');
    translateAll(initial);
    markActiveLang(initial);
  } catch(e) {
    translateAll('en');
    markActiveLang('en');
  }
}

function initLoading() {
  const loading = $('#loading');
  if (!loading) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loading.classList.add('hidden');
      setTimeout(() => loading.remove(), 400);
    }, 1200);
  });
}

function initSmoothAnchors() {
  $$('a[href^="#"]').forEach(a => {
    on(a, 'click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = $(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initStatModals() {
  document.querySelectorAll('.stat-box').forEach(box => {
    box.style.cursor = 'pointer';
    box.addEventListener('click', function(e) {
      const statKey = this.dataset.stat;
      if (statKey) {
        openStatModal(statKey);
      }
    });
  });
}

/* -------------------------
   DOMContentLoaded - Inicialização Principal
--------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  // Inicializações em ordem
  initLoading();
  initNavbarScroll();
  initScrollAnimations();
  initParticles();
  initSmoothAnchors();
  initLangSwitcher();
  initI18N();
  initTradeTabs();
  initLightbox();
  enhanceProjectGalleries();

  // Setup dos cards de projeto
  $$('.project-card').forEach(setupCardAutoSlide);

  initVolunteerEnhancement();
  fixGadsdenImages();
  initMobileEnhancements();
  initStatModals();

  // Event listeners globais
  on(document, 'click', (e) => {
    if (e.target?.id === 'statModalOverlay') closeStatModal();
    if (e.target?.id === 'strategyDetailOverlay') closeStrategyModal();
  });

  on(document, 'keydown', (e) => {
    if (e.key === 'Escape') {
      closeStatModal();
      closeStrategyModal();
    }
  });

  // Cursor animation (desktop only)
  try {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    if (cursor && cursorFollower && !window.matchMedia('(pointer: coarse)').matches) {
      let mouseX = 0, mouseY = 0;
      let cursorX = 0, cursorY = 0;
      let followerX = 0, followerY = 0;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        followerX += (mouseX - followerX) * 0.08;
        followerY += (mouseY - followerY) * 0.08;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';

        requestAnimationFrame(animateCursor);
      }

      animateCursor();

      document.querySelectorAll('a, button, .project-card, .stat-box, .strategy-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursor.style.borderColor = 'var(--gold-light)';
          cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
          cursor.style.borderColor = 'var(--gold)';
          cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
      });
    }
  } catch(e) { console.log('Cursor init error:', e); }

  console.log('✅ Portfolio JS inicializado com sucesso');
});

// Strategy items click handlers
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.strategy-item[data-strategy]').forEach(el => {
    el.addEventListener('click', () => {
      const n = Number(el.getAttribute('data-strategy'));
      if (!isNaN(n)) { openStrategyModal(n); }
    });
  });
});

// Project gallery click handlers
document.addEventListener('click', function(e) {
  const gm = e.target.closest('.project-card .gallery-main');
  if (!gm) return;
  const card = gm.closest('.project-card');
  openProjectGalleryFromCard(card);
});

/* -------------------------
   Trade Show Galleries
--------------------------*/
const TRADE_GALLERIES = {
  blaupunkt: [
    './Blaupunkt_Illumiation_booth_HK_Fair.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_1.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_2.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_3.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_4.png'
  ],
  ford: [
    './Ford_lighting_solutions_HK_Intl.png',
    './Ford_lighting_solutions_HK_Intl_1.png',
    './Ford_lighting_solutions_HK_Intl_2.png'
  ]
};

function openTradeGallery(brand) {
  savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
  const images = (TRADE_GALLERIES[brand] || []).slice();
  if (!images.length) return;
  buildProjectSlides(images);
  document.getElementById('projectGalleryModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* -------------------------
   Exports Globais
--------------------------*/
window.openStatModal = openStatModal;
window.closeStatModal = closeStatModal;
window.openStrategyModal = openStrategyModal;
window.closeStrategyModal = closeStrategyModal;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeProjectSlide = changeProjectSlide;
window.goToProjectSlide = goToProjectSlide;
window.closeProjectGallery = closeProjectGallery;
window.scrollToTop = scrollToTop;
window.openTradeGallery = openTradeGallery;
