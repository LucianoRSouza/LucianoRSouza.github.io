/* =========================================================
   Luciano Rodrigues — Portfolio JS (consolidado e limpo)
   ========================================================= */

/* -------------------------
   Helpers / Estado Global
--------------------------*/
const PG_state = { images: [], index: 0, currentLang: 'en' };
const CardSlides = new Map();

// NOVO: Variável para salvar posição de scroll
let savedScrollPosition = 0;

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, evt, fn, opts) => el && el.addEventListener(evt, fn, opts);

/* -------------------------
   Dados — Stats & Estratégia (com tradução)
--------------------------*/
const getStatDetailsData = () => ({
  savings: {
    icon: "fa-piggy-bank",
    title: { en: "Cumulative Savings Delivered", pt: "Poupança Acumulada Entregue", es: "Ahorros Acumulados Entregados", fr: "Économies Cumulées Réalisées" },
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
      ],
      es: [
        "Iniciativas de strategic sourcing multi‑categoría en gasto directo e indirecto",
        "Negociación de plazos de pago favorables (60–90 días) mejorando el flujo de caja",
        "Modelado should‑cost identificando oportunidades de reducción del 15–25%",
        "Consolidación de la base de proveedores de 200+ a 80 socios clave",
        "Presupuestación base‑cero para proyectos CAPEX ahorrando ~20% en promedio"
      ],
      fr: [
        "Initiatives de sourcing stratégique multi‑catégories sur dépenses directes et indirectes",
        "Négociation de conditions de paiement favorables (60–90 jours) améliorant la trésorerie",
        "Modélisation should‑cost identifiant 15–25% d\'opportunités de réduction",
        "Consolidation de la base fournisseurs de 200+ à 80 partenaires clés",
        "Budget base‑zéro pour projets CAPEX économisant ~20% en moyenne"
      ]
    }
  },
  rfps: {
    icon: "fa-file-contract",
    title: { en: "Strategic Tenders Led", pt: "Tenders Estratégicos Conduzidos", es: "Licitaciones Estratégicas Dirigidas", fr: "Appels d\'Offres Stratégiques Menés" },
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
      ],
      es: [
        "Diseño integral RFI/RFP/RFQ con anexos técnicos (A1/A2)",
        "Matrices de ponderación: técnico (40%), comercial (35%) y ESG (25%)",
        "Integración con plataforma de e‑procurement con trazabilidad completa",
        "Comités de evaluación multifuncionales (Ingeniería, Finanzas, Legal, Operaciones)",
        "Reducción del ciclo promedio de 45 a 28 días con mayor cumplimiento"
      ],
      fr: [
        "Conception bout‑à‑bout RFI/RFP/RFQ avec annexes techniques (A1/A2)",
        "Matrices de pondération : technique (40%), commercial (35%), ESG (25%)",
        "Intégration à la plateforme d\'e‑procurement avec traçabilité complète",
        "Comités d\'évaluation interfonctionnels (Ingénierie, Finance, Juridique, Opérations)",
        "Réduction du cycle moyen de 45 à 28 jours avec meilleur compliance"
      ]
    }
  },
  projects: {
    icon: "fa-project-diagram",
    title: { en: "Project Portfolio Value", pt: "Valor do Portfólio de Projetos", es: "Valor del Portafolio de Proyectos", fr: "Valeur du Portefeuille de Projets" },
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
      ],
      es: [
        "Desarrollo de producto del concepto a producción masiva",
        "Lanzamientos licenciados (Blaupunkt, Spear & Jackson, Pininfarina)",
        "Auditorías de fábrica y evaluación de capacidades en Asia",
        "Implementación de sistemas de calidad (ISO 9001, marcos de compliance)",
        "Optimización logística transfronteriza y cumplimiento aduanero"
      ],
      fr: [
        "Développement produit du concept à la production de masse",
        "Lancements sous licence (Blaupunkt, Spear & Jackson, Pininfarina)",
        "Audits d\'usines et évaluation des capacités en Asie",
        "Mise en place de systèmes qualité (ISO 9001, cadres de conformité)",
        "Optimisation logistique transfrontalière et conformité douanière"
      ]
    }
  },
  regions: {
    icon: "fa-globe",
    title: { en: "Global Operations Coverage", pt: "Cobertura Operacional Global", es: "Cobertura Operativa Global", fr: "Couverture Opérationnelle Globale" },
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
      ],
      es: [
        "Europa: Portugal, España, Alemania, Reino Unido, Países Bajos, Italia, Francia",
        "LATAM: Brasil, Argentina, Chile, Colombia, México, Perú, Uruguay",
        "Asia: China, Hong Kong, Taiwán, Vietnam, India, Corea del Sur",
        "Experiencia de negociación multicultural y conocimiento local",
        "Coordinación de husos horarios para ejecución 24/7"
      ],
      fr: [
        "Europe : Portugal, Espagne, Allemagne, Royaume‑Uni, Pays‑Bas, Italie, France",
        "LATAM : Brésil, Argentine, Chili, Colombie, Mexique, Pérou, Uruguay",
        "Asie : Chine, Hong Kong, Taïwan, Viêt Nam, Inde, Corée du Sud",
        "Expérience de négociation multiculturelle et connaissance des marchés locaux",
        "Coordination des fuseaux horaires pour exécution 24/7"
      ]
    }
  }
});

const getStrategyDetailsData = () => ({
  1: {
    title: { en: "Stand Design & Merchandising", pt: "Design de Stand & Merchandising", es: "Diseño de Stand & Merchandising", fr: "Design de Stand & Merchandising" },
    subtitle: { en: "Creating immersive brand experiences", pt: "Criando experiências de marca imersivas", es: "Creando experiencias de marca inmersivas", fr: "Création d'expériences de marque immersives" },
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
      ],
      es: [
        {
          title: "Enfoque Estratégico",
          items: [
            "Co-creación del concepto de stand con Marketing alineado al posicionamiento de marca",
            "Optimización del flujo de tráfico para máximo compromiso de visitantes",
            "Jerarquía de exhibición de productos destacando SKUs principales y nuevos lanzamientos",
            "Iluminación y merchandising visual para percepción premium de marca",
            "Estaciones de demostración interactivas para experiencia práctica del producto"
          ]
        },
        {
          title: "Ejecución Técnica",
          items: [
            "Renderizados 3D y maquetas aprobadas 60 días antes del evento",
            "Componentes modulares de stand para reutilización en ferias",
            "Integración de señalización digital con catálogos de productos en tiempo real",
            "Planificación de almacenamiento y logística para exhibición de 500+ SKUs",
            "Supervisión en sitio durante montaje y desmontaje"
          ]
        }
      ],
      fr: [
        {
          title: "Approche Stratégique",
          items: [
            "Co-création du concept de stand avec le Marketing aligné sur le positionnement de la marque",
            "Optimisation du flux de trafic pour un engagement maximal des visiteurs",
            "Hiérarchie d'affichage des produits mettant en avant les SKU phares et les nouveautés",
            "Éclairage et merchandising visuel pour une perception premium de la marque",
            "Stations de démonstration interactives pour une expérience produit hands-on"
          ]
        },
        {
          title: "Exécution Technique",
          items: [
            "Rendus 3D et maquettes approuvés 60 jours avant l'événement",
            "Composants modulaires de stand pour réutilisation sur les salons",
            "Intégration de signalétique numérique avec catalogues produits en temps réel",
            "Planification de stockage et logistique pour l'affichage de 500+ SKU",
            "Supervision sur site pendant le montage et le démontage"
          ]
        }
      ]
    }
  },
  2: {
    title: { en: "Meetings Orchestration & Lead Capture", pt: "Reuniões & Captação de Leads", es: "Orquestación de Reuniones & Captación", fr: "Orquestration de Réunions & Capture" },
    subtitle: { en: "Maximizing ROI through structured engagement", pt: "Maximizando ROI através de engajamento estruturado", es: "Maximizando ROI mediante compromiso estructurado", fr: "Maximisation du ROI via un engagement structuré" },
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
      ],
      es: [
        {
          title: "Planificación Pre-Evento",
          items: [
            "Desarrollo de lista de objetivos: 200+ prospectos calificados por feria",
            "Sistema de programación de reuniones con recordatorios automatizados",
            "Briefing del equipo de ventas con sesiones de conocimiento de producto",
            "Pitch decks personalizados por segmento de cliente",
            "Criterios de puntuación de leads definidos (presupuesto, cronograma, autoridad)"
          ]
        },
        {
          title: "Ejecución en Sitio",
          items: [
            "Slots de reunión estructurados de 30 minutos con agendas claras",
            "Captación de leads en tiempo real vía app móvil de CRM",
            "Emails de seguimiento inmediato enviados dentro de 4 horas",
            "Notas de reunión estandarizadas para visibilidad del pipeline",
            "Reuniones diarias del equipo para ajustar estrategia basada en feedback"
          ]
        }
      ],
      fr: [
        {
          title: "Planification Pré-Événement",
          items: [
            "Développement de liste cible: 200+ prospects qualifiés par salon",
            "Système de planification de réunions avec rappels automatisés",
            "Briefing de l'équipe commerciale avec sessions de connaissance produit",
            "Pitch decks personnalisés par segment client",
            "Critères de scoring des leads définis (budget, calendrier, autorité)"
          ]
        },
        {
          title: "Exécution sur Site",
          items: [
            "Créneaux de réunion structurés de 30 minutes avec agendas clairs",
            "Capture de leads en temps réel via app mobile CRM",
            "Emails de suivi immédiat envoyés sous 4 heures",
            "Notes de réunion standardisées pour visibilité du pipeline",
            "Réunions d'équipe quotidiennes pour ajuster la stratégie basée sur le feedback"
          ]
        }
      ]
    }
  },
  3: {
    title: { en: "Negotiations & Partnering", pt: "Negociações & Parcerias", es: "Negociaciones y Alianzas", fr: "Négociations et Partenariats" },
    subtitle: { en: "Building strategic supplier relationships", pt: "Construindo relacionamentos estratégicos com fornecedores", es: "Construyendo relaciones estratégicas con proveedores", fr: "Construction de relations fournisseurs stratégiques" },
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
      ],
      es: [
        {
          title: "Desarrollo de Alianzas",
          items: [
            "Calificación inicial: estabilidad financiera, capacidad, certificaciones",
            "Negociaciones de hoja de términos: MOQ, plazos de pago, cláusulas de exclusividad",
            "Marco de precios con descuentos por volumen y rebates anuales",
            "Acuerdos de calidad definiendo tasas de defecto y acciones correctivas",
            "Protección de PI y marcos de NDA para desarrollo de nuevos productos"
          ]
        },
        {
          title: "Marco Contractual",
          items: [
            "Master Service Agreements (MSA) con términos estandarizados",
            "Plantillas de Statement of Work (SoW) para trabajo basado en proyecto",
            "Service Level Agreements (SLA) con cláusulas de penalidad/incentivo",
            "Disposiciones de fuerza mayor y continuidad de negocios",
            "Cláusulas de salida y obligaciones de transferencia de conocimiento"
          ]
        }
      ],
      fr: [
        {
          title: "Développement de Partenariats",
          items: [
            "Qualification initiale: stabilité financière, capacité, certifications",
            "Négociations de term sheet: MOQ, conditions de paiement, clauses d'exclusivité",
            "Cadre de prix avec ruptures de volume et rebates annuels",
            "Accords de qualité définissant les taux de défaut et actions correctives",
            "Protection de PI et cadres de NDA pour développement de nouveaux produits"
          ]
        },
        {
          title: "Cadre Contractuel",
          items: [
            "Master Service Agreements (MSA) avec termes standardisés",
            "Templates de Statement of Work (SoW) pour travail basé sur projet",
            "Service Level Agreements (SLA) avec clauses de pénalité/incitation",
            "Dispositions de force majeure et continuité d'activité",
            "Clauses de sortie et obligations de transfert de connaissances"
          ]
        }
      ]
    }
  },
  4: {
    title: { en: "Tech Discovery & Benchmark", pt: "Descoberta Tecnológica", es: "Descubrimiento Tecnológico", fr: "Veille Technologique & Benchmark" },
    subtitle: { en: "Staying ahead of market innovation", pt: "Mantendo-se à frente da inovação de mercado", es: "Manteniéndose a la vanguardia de la innovación de mercado", fr: "Rester à la pointe de l'innovation marché" },
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
      ],
      es: [
        {
          title: "Inteligencia de Mercado",
          items: [
            "Scouting de tecnología en 50+ stands de proveedores por feria",
            "Desmontaje de productos competitivos y comparación de características",
            "Benchmark de costos para especificaciones similares",
            "Mapeo de tendencias de innovación (IoT, sostenibilidad, características inteligentes)",
            "Análisis de panorama de patentes para libertad de operación"
          ]
        },
        {
          title: "Evaluación Técnica",
          items: [
            "Recolección de muestras para pruebas de laboratorio y validación",
            "Consultas del equipo de ingeniería sobre viabilidad técnica",
            "Revisión de prototipos y feedback de diseño para manufactura (DFM)",
            "Evaluación de requisitos de certificación (CE, FCC, ANATEL)",
            "Alineación de roadmap con inversiones en I+D de proveedores"
          ]
        }
      ],
      fr: [
        {
          title: "Intelligence Marché",
          items: [
            "Veille technologique sur 50+ stands fournisseurs par salon",
            "Démontage de produits concurrents et comparaison de fonctionnalités",
            "Benchmark de coûts pour spécifications similaires",
            "Cartographie des tendances d'innovation (IoT, durabilité, fonctionnalités intelligentes)",
            "Analyse de paysage de brevets pour liberté d'exploitation"
          ]
        },
        {
          title: "Évaluation Technique",
          items: [
            "Collecte d'échantillons pour tests laboratoire et validation",
            "Consultations de l'équipe ingénierie sur faisabilité technique",
            "Revue de prototypes et feedback de conception pour fabrication (DFM)",
            "Évaluation des exigences de certification (CE, FCC, ANATEL)",
            "Alignement de roadmap avec investissements R&D fournisseurs"
          ]
        }
      ]
    }
  },
  5: {
    title: { en: "Factory Audits & Capability Mapping", pt: "Auditorias de Fábrica", es: "Auditorías y Mapeo de Capacidades", fr: "Audits et Cartographie des Capacités" },
    subtitle: { en: "Ensuring operational excellence", pt: "Garantindo excelência operacional", es: "Garantizando excelencia operativa", fr: "Assurance d'excellence opérationnelle" },
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
      ],
      es: [
        {
          title: "Marco de Auditoría",
          items: [
            "Verificación del sistema de gestión de calidad ISO 9001",
            "Análisis de capacidad productiva (líneas, turnos, utilización)",
            "Registros de mantenimiento de equipos y certificados de calibración",
            "Evaluación de habilidades de la fuerza laboral y programas de capacitación",
            "Cumplimiento ambiental y prácticas de gestión de residuos"
          ]
        },
        {
          title: "Evaluación de Riesgos",
          items: [
            "Verificación de salud financiera (reportes de crédito, historial de pagos)",
            "Resiliencia de cadena de suministro (dual sourcing, stock de seguridad)",
            "Auditorías de cumplimiento social (estándares SA8000, BSCI)",
            "Protocolos de ciberseguridad para alianzas de intercambio de datos",
            "Planificación de continuidad de negocios y recuperación ante desastres"
          ]
        }
      ],
      fr: [
        {
          title: "Cadre d'Audit",
          items: [
            "Vérification du système de management qualité ISO 9001",
            "Analyse de capacité de production (lignes, équipes, utilisation)",
            "Registres de maintenance équipements et certificats d'étalonnage",
            "Évaluation des compétences de la main-d'œuvre et programmes de formation",
            "Conformité environnementale et prátiques de gestion des déchets"
          ]
        },
        {
          title: "Évaluation des Risques",
          items: [
            "Vérification de santé financière (rapports de crédit, historique de paiements)",
            "Résilience de la chaîne d'approvisionnement (double sourcing, stock tampon)",
            "Audits de conformité sociale (normes SA8000, BSCI)",
            "Protocoles de cybersécurité pour partenariages de partage de données",
            "Planification de continuité d'activité et reprise après sinistre"
          ]
        }
      ]
    }
  },
  6: {
    title: { en: "Post-Fair Pipeline, ROI & Governance", pt: "Pipeline, ROI & Governança", es: "Pipeline Post-Feria, ROI y Gobernanza", fr: "Pipeline Post-Salon, ROI et Gouvernance" },
    subtitle: { en: "Converting leads into revenue", pt: "Convertendo leads em receita", es: "Convirtiendo leads en ingresos", fr: "Conversion des leads en revenus" },
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
      ],
      es: [
        {
          title: "Gestión de Pipeline",
          items: [
            "Categorización de leads: Hot (inmediato), Warm (3 meses), Cold (nutrición)",
            "Integración con CRM con secuencias automatizadas de seguimiento",
            "Estimación de valor de oportunidad y puntuación de probabilidad de ganancia",
            "Handover multifuncional a equipos de ventas regionales",
            "Reuniones semanales de revisión de pipeline para primeros 30 días"
          ]
        },
        {
          title: "Métricas de Rendimiento",
          items: [
            "Cálculo de costo por lead (costo de stand ÷ leads calificados)",
            "Seguimiento de tasa de conversión de lead a pedido",
            "Comparación de tamaño promedio de trato vs. clientes no-feria",
            "Análisis de tiempo para cierre identificando cuellos de botella",
            "Reporte anual de ROI para justificación de presupuesto de marketing"
          ]
        }
      ],
      fr: [
        {
          title: "Gestion du Pipeline",
          items: [
            "Catégorisation des leads: Hot (immédiat), Warm (3 mois), Cold (nurturing)",
            "Intégration CRM avec séquences de suivi automatisées",
            "Estimation de valeur d'opportunité et scoring de probabilité de gain",
            "Passation interfonctionnelle aux équipes commerciales régionales",
            "Réunions hebdomadaires de revue de pipeline pour les 30 premiers jours"
          ]
        },
        {
          title: "Métriques de Performance",
          items: [
            "Calcul de coût par lead (coût stand ÷ leads qualifiés)",
            "Suivi de taux de conversion lead à commande",
            "Comparaison de taille moyenne d'affaire vs. clients non-salon",
            "Analyse de délai de clôture identifiant les goulots d'étranglement",
            "Rapport annuel de ROI pour justification du budget marketing"
          ]
        }
      ]
    }
  }
});

/* -------------------------
   Modais — Stats (com tradução dinâmica)
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
   Modais — Estratégia (com tradução dinâmica)
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

  // Reset scroll BEFORE closing - try multiple methods
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

  // Also try the overlay itself
  overlay.scrollTop = 0;

  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/* -------------------------
   CORREÇÃO DAS BOLINHAS - ANIMAÇÃO GARANTIDA
   ========================================================= */

// Função para atualizar bolinhas dos cards de projeto
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

// CORREÇÃO PRINCIPAL: Navegação da galeria do modal - VERSÃO CORRIGIDA
function changeProjectSlide(dir) {
  if (!PG_state.images.length) return;
  
  // Busca específica dentro do modal ativo (CORREÇÃO CHAVE!)
  const modal = document.getElementById('projectGalleryModal');
  if (!modal) return;
  
  const slides = modal.querySelectorAll('.gallery-slide');
  const dots = modal.querySelectorAll('.gallery-dot');
  
  // Remove active atual
  if (slides[PG_state.index]) {
    slides[PG_state.index].classList.remove('active');
  }
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.remove('active');
    dots[PG_state.index].style.transform = 'scale(1)';
    dots[PG_state.index].style.background = 'rgba(212, 175, 55, 0.34)';
    dots[PG_state.index].style.boxShadow = 'none';
  }
  
  // Calcula novo índice
  PG_state.index = (PG_state.index + dir + PG_state.images.length) % PG_state.images.length;
  
  // Adiciona active novo com animação
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

// CORREÇÃO PRINCIPAL: Ir para slide específico no modal - VERSÃO CORRIGIDA
function goToProjectSlide(idx) {
  if (!PG_state.images.length) return;
  
  // Busca específica dentro do modal ativo (CORREÇÃO CHAVE!)
  const modal = document.getElementById('projectGalleryModal');
  if (!modal) return;
  
  const slides = modal.querySelectorAll('.gallery-slide');
  const dots = modal.querySelectorAll('.gallery-dot');
  
  // Remove active atual
  if (slides[PG_state.index]) {
    slides[PG_state.index].classList.remove('active');
  }
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.remove('active');
    dots[PG_state.index].style.transform = 'scale(1)';
    dots[PG_state.index].style.background = 'rgba(212, 175, 55, 0.34)';
    dots[PG_state.index].style.boxShadow = 'none';
  }
  
  // Novo índice
  PG_state.index = idx;
  
  // Adiciona active com animação
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

  // carregar lista de imagens
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
      // Atualizar dots COM ANIMAÇÃO
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

// Salvar posição antes de abrir
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
    // Aplica estilos iniciais
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

// Restaurar posição ao fechar
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
   Outras melhorias
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
    "blaupunkt-power": [
      "./Blaupunkt_Power_Tools.png"
    ],
    "blaupunkt-garden": [
      "./Blaupunkt_Garden_Tools.png"
    ]
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

function initTimelineSpy() { updateTimelineSpy(); }

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

;
  $$('[data-i18n]').forEach(el => {
    const path = el.dataset.i18n;
    const value = path?.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), dict);
    if (value !== undefined) el.textContent = value;
  });
  setTimeout(updateTimelineSpy, 100);
}

catch(e) {}
    showToast(`Translated to ${lang.toUpperCase()}`);
  });
}

catch(e) {
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

document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initNavbarScroll();
  initScrollAnimations();
  initParticles();
  initSmoothAnchors();

  initTradeTabs();
  initLightbox();

  enhanceProjectGalleries();
  $$('.project-card').forEach(setupCardAutoSlide);

  initVolunteerEnhancement();
  fixGadsdenImages();

  initMobileEnhancements();

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

  // Cursor animation
try {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    if (cursor && cursorFollower) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Smooth follow for main cursor
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;

            // Slower follow for follower
            followerX += (mouseX - followerX) * 0.08;
            followerY += (mouseY - followerY) * 0.08;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Hover effects
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

console.log('✅ Portfolio JS (consolidado) inicializado');
  
  initStatModals();
});

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
  
  console.log('✅ Stat modals initialized');
}

window.openStatModal        = openStatModal;
window.closeStatModal       = closeStatModal;
window.openStrategyModal    = openStrategyModal;
window.closeStrategyModal   = closeStrategyModal;
window.openLightbox         = openLightbox;
window.closeLightbox        = closeLightbox;
window.changeProjectSlide   = changeProjectSlide;
window.goToProjectSlide     = goToProjectSlide;
window.closeProjectGallery  = closeProjectGallery;
window.scrollToTop          = scrollToTop;

document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape'){
    try{ closeStatModal(); }catch(_){ }
    try{ closeStrategyModal(); }catch(_){ }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.strategy-item[data-strategy]').forEach(el => {
    el.addEventListener('click', () => {
      const n = Number(el.getAttribute('data-strategy'));
      if (!isNaN(n)) { window.openStrategyModal(n); }
    });
  });
});

function initTradeDuoFromExisting(){
  const sec = document.getElementById('trade-shows');
  if(!sec) return;
  const blau = document.querySelector('#gallery-blaupunkt .gallery-item img');
  const ford = document.querySelector('#gallery-ford .gallery-item img');
  const blauSrc = blau ? blau.getAttribute('src') : '';
  const fordSrc = ford ? ford.getAttribute('src') : '';
  if(!blauSrc || !fordSrc) return;
  if(sec.querySelector('.trade-duo')) return;
  
  const duo = document.createElement('div');
  duo.className = 'trade-duo';
  duo.innerHTML = `
    <div class="brand-card" data-brand="blaupunkt">
      <div class="brand-head"><h4>Blaupunkt</h4><i class="fas fa-images" style="color:var(--gold);"></i></div>
      <div class="brand-body"><img src="${blauSrc}" alt="Blaupunkt cover"/></div>
    </div>
    <div class="brand-card" data-brand="ford">
      <div class="brand-head"><h4>Ford Lighting</h4><i class="fas fa-images" style="color:var(--gold);"></i></div>
      <div class="brand-body"><img src="${fordSrc}" alt="Ford cover"/></div>
    </div>`;
  const tabs = sec.querySelector('.gallery-tabs');
  sec.insertBefore(duo, tabs);
  
  const openBrand = (brand)=>{
    savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    
    const panel = document.getElementById(brand==='blaupunkt' ? 'gallery-blaupunkt' : 'gallery-ford');
    if(!panel) return;
    const imgs = Array.from(panel.querySelectorAll('.gallery-item img')).map(i=> i.getAttribute('src')).filter(Boolean);
    if(!imgs.length) return;
    
    buildProjectSlides(imgs);
    const modal = document.getElementById('projectGalleryModal');
    if(modal){ 
      modal.classList.add('active'); 
      document.body.style.overflow='hidden'; 
    }
  };
  
  duo.querySelector('[data-brand="blaupunkt"]').addEventListener('click', ()=> openBrand('blaupunkt'));
  duo.querySelector('[data-brand="ford"]').addEventListener('click', ()=> openBrand('ford'));
}

function initMobileTimelineLogos(){
  if(!window.matchMedia('(max-width: 1200px)').matches) return;
  document.querySelectorAll('.timeline-item').forEach(item=>{
    if(item.querySelector('.mobile-company-logo')) return;
    const logo = item.getAttribute('data-logo');
    if(!logo) return;
    const img = document.createElement('img');
    img.className = 'mobile-company-logo';
    img.alt = 'Company logo';
    img.src = logo;
    item.appendChild(img);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  try{ initTradeDuoFromExisting(); }catch(e){}
  try{ initMobileTimelineLogos(); }catch(e){}
});

document.addEventListener('DOMContentLoaded',function(){try{var l=localStorage.getItem('lang')||document.documentElement.lang||'en';if(typeof translateAll==='function'){}}catch(e){}});

document.addEventListener('click',function(e){const gm=e.target.closest('.project-card .gallery-main');if(!gm)return;const card=gm.closest('.project-card');openProjectGalleryFromCard(card);});

const TRADE_GALLERIES={
  blaupunkt:[
    './Blaupunkt_Illumiation_booth_HK_Fair.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_1.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_2.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_3.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_4.png'
  ],
  ford:[
    './Ford_lighting_solutions_HK_Intl.png',
    './Ford_lighting_solutions_HK_Intl_1.png',
    './Ford_lighting_solutions_HK_Intl_2.png'
  ]
};

function openTradeGallery(brand){
  savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
  
  const images = (TRADE_GALLERIES[brand] || []).slice();
  if(!images.length) return;
  
  buildProjectSlides(images);
  document.getElementById('projectGalleryModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
/* -------------------------
   TIMELINE MOBILE - ADICIONAR HEADERS COM LOGO E DATA
   -------------------------*/
function initTimelineMobileHeaders() {
  if (window.innerWidth > 1200) return;
  
  const items = document.querySelectorAll('.timeline-item');
  
  items.forEach(item => {
    // Se já tem header, pula
    if (item.querySelector('.timeline-header')) return;
    
    const company = item.dataset.company;
    const logo = item.dataset.logo;
    const dateRange = item.querySelector('.date-range')?.textContent || '';
    const dateLevel = item.querySelector('.date-level')?.textContent || '';
    
    // Cria o header
    const header = document.createElement('div');
    header.className = 'timeline-header';
    header.innerHTML = `
      <div class="company-logo">
        <img src="${logo}" alt="Company logo" onerror="this.style.display='none'">
      </div>
      <div class="date-info">
        <span class="date-range">${dateRange}</span>
        <span class="date-level">${dateLevel}</span>
      </div>
    `;
    
    // Insere antes do content
    const content = item.querySelector('.timeline-content');
    item.insertBefore(header, content);
  });
}

// Inicializa no load e no resize
window.addEventListener('load', initTimelineMobileHeaders);
window.addEventListener('resize', () => {
  // Debounce simples
  clearTimeout(window.timelineResizeTimer);
  window.timelineResizeTimer = setTimeout(initTimelineMobileHeaders, 250);
});
