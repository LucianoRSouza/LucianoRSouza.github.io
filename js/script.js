/* =========================================================
   Luciano Rodrigues — Portfolio JS (CORREÇÕES APLICADAS)
   ========================================================= */

/* -------------------------
   Correção 1: Timeline logos terminam em NKS (não voltam para Details)
--------------------------*/
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
  
  // CORREÇÃO: Não resetar para Details quando passar do último item
  // O logo permanece no último item ativo (NKS)
  indicators.forEach((dot, idx) => dot.classList.toggle('active', idx === activeIndex));
}

/* -------------------------
   Correção 2: Gallery dots animando corretamente
--------------------------*/
function changeProjectSlide(dir) {
  if (!PG_state.images.length) return;
  const slides = $$('.gallery-slide');
  const dots = $$('.gallery-dot');
  
  // Remove active da atual
  slides[PG_state.index]?.classList.remove('active');
  dots[PG_state.index]?.classList.remove('active');
  
  // Calcula novo índice
  PG_state.index = (PG_state.index + dir + PG_state.images.length) % PG_state.images.length;
  
  // Adiciona active na nova
  slides[PG_state.index]?.classList.add('active');
  dots[PG_state.index]?.classList.add('active');
  
  // Força reflow para garantir animação
  dots[PG_state.index]?.style.transform = 'scale(1.25)';
  setTimeout(() => {
    dots[PG_state.index]?.style.transform = '';
  }, 220);
}

function goToProjectSlide(idx) {
  if (!PG_state.images.length) return;
  const slides = $$('.gallery-slide');
  const dots = $$('.gallery-dot');
  
  // Remove active da atual
  slides[PG_state.index]?.classList.remove('active');
  dots[PG_state.index]?.classList.remove('active');
  
  // Define novo índice
  PG_state.index = idx;
  
  // Adiciona active na nova
  slides[PG_state.index]?.classList.add('active');
  dots[PG_state.index]?.classList.add('active');
  
  // Força reflow para garantir animação
  dots[PG_state.index]?.style.transform = 'scale(1.25)';
  setTimeout(() => {
    dots[PG_state.index]?.style.transform = '';
  }, 220);
}

/* -------------------------
   Correção 3: Trade shows - fechar galeria permanece na seção
--------------------------*/
let tradeShowsScrollY = 0;

function openTradeGallery(brand) {
  tradeShowsScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  const images = (TRADE_GALLERIES[brand] || []).slice();
  if (!images.length) return;
  buildProjectSlides(images);
  document.getElementById('projectGalleryModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Sobrescreve closeProjectGallery para preservar posição na seção trade shows
const originalCloseProjectGallery = window.closeProjectGallery;
window.closeProjectGallery = function() {
  const modal = document.getElementById('projectGalleryModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  // Restaura scroll para trade shows
  setTimeout(() => {
    window.scrollTo({top: tradeShowsScrollY, behavior: 'instant'});
  }, 0);
};

/* -------------------------
   Correção 4: Strategy Modal com tradução correta
--------------------------*/
// Dados de estratégia com traduções completas
const strategyDetailsDataI18N = {
  en: {
    1: {
      title: "Stand Design & Merchandising",
      subtitle: "Creating immersive brand experiences",
      icon: "fa-drafting-compass",
      sections: [
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
      ]
    },
    2: {
      title: "Meetings Orchestration & Lead Capture",
      subtitle: "Maximizing ROI through structured engagement",
      icon: "fa-calendar-check",
      sections: [
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
      ]
    },
    3: {
      title: "Negotiations & Partnering",
      subtitle: "Building strategic supplier relationships",
      icon: "fa-handshake-angle",
      sections: [
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
      ]
    },
    4: {
      title: "Tech Discovery & Benchmark",
      subtitle: "Staying ahead of market innovation",
      icon: "fa-microchip",
      sections: [
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
      ]
    },
    5: {
      title: "Factory Audits & Capability Mapping",
      subtitle: "Ensuring operational excellence",
      icon: "fa-industry",
      sections: [
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
      ]
    },
    6: {
      title: "Post-Fair Pipeline, ROI & Governance",
      subtitle: "Converting leads into revenue",
      icon: "fa-chart-line",
      sections: [
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
      ]
    }
  },
  pt: {
    1: {
      title: "Design de Stand & Merchandising",
      subtitle: "Criando experiências de marca imersivas",
      icon: "fa-drafting-compass",
      sections: [
        {
          title: "Abordagem Estratégica",
          items: [
            "Co-criação do conceito do stand com Marketing alinhado ao posicionamento da marca",
            "Otimização do fluxo de tráfego para máximo engajamento de visitantes",
            "Hierarquia de exibição de produtos destacando SKUs principais e novos lançamentos",
            "Iluminação e merchandising visual para percepção premium da marca",
            "Estações de demonstração interativa para experiência prática do produto"
          ]
        },
        {
          title: "Execução Técnica",
          items: [
            "Renderizações 3D e maquetes aprovadas 60 dias antes do evento",
            "Componentes modulares de stand para reutilização em feiras",
            "Integração de sinalização digital com catálogos de produtos em tempo real",
            "Planejamento de armazenamento e logística para exibição de 500+ SKUs",
            "Supervisão no local durante montagem e desmontagem"
          ]
        }
      ]
    },
    2: {
      title: "Orquestração de Reuniões & Captação de Leads",
      subtitle: "Maximizando ROI através de engajamento estruturado",
      icon: "fa-calendar-check",
      sections: [
        {
          title: "Planejamento Pré-Evento",
          items: [
            "Desenvolvimento de lista de alvos: 200+ prospectos qualificados por feira",
            "Sistema de agendamento de reuniões com lembretes automatizados",
            "Briefing da equipe de vendas com sessões de conhecimento do produto",
            "Pitch decks personalizados por segmento de cliente",
            "Critérios de pontuação de leads definidos (orçamento, cronograma, autoridade)"
          ]
        },
        {
          title: "Execução no Local",
          items: [
            "Slots de reunião estruturados de 30 minutos com agendas claras",
            "Captação de leads em tempo real via aplicativo móvel de CRM",
            "E-mails de acompanhamento imediato enviados dentro de 4 horas",
            "Notas de reunião padronizadas para visibilidade do pipeline",
            "Reuniões diárias da equipe para ajustar estratégia baseada em feedback"
          ]
        }
      ]
    },
    3: {
      title: "Negociações & Parcerias",
      subtitle: "Construindo relacionamentos estratégicos com fornecedores",
      icon: "fa-handshake-angle",
      sections: [
        {
          title: "Desenvolvimento de Parcerias",
          items: [
            "Qualificação inicial: estabilidade financeira, capacidade, certificações",
            "Negociações de term sheet: MOQ, prazos de pagamento, cláusulas de exclusividade",
            "Estrutura de preços com quebras de volume e rebaixas anuais",
            "Acordos de qualidade definindo taxas de defeitos e ações corretivas",
            "Proteção de PI e frameworks de NDA para desenvolvimento de novos produtos"
          ]
        },
        {
          title: "Estrutura Contratual",
          items: [
            "Acordos Mestre de Serviço (MSA) com termos padronizados",
            "Modelos de Declaração de Trabalho (SoW) para trabalho baseado em projeto",
            "Acordos de Nível de Serviço (SLA) com cláusulas de penalidade/incentivo",
            "Provisões de força maior e continuidade de negócios",
            "Cláusulas de saída e obrigações de transferência de conhecimento"
          ]
        }
      ]
    },
    4: {
      title: "Descoberta Tecnológica & Benchmark",
      subtitle: "Mantendo-se à frente da inovação de mercado",
      icon: "fa-microchip",
      sections: [
        {
          title: "Inteligência de Mercado",
          items: [
            "Prospecção de tecnologia em 50+ estandes de fornecedores por feira",
            "Desmontagem de produtos competitivos e comparação de recursos",
            "Benchmark de custos para especificações similares",
            "Mapeamento de tendências de inovação (IoT, sustentabilidade, recursos inteligentes)",
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
            "Alinhamento de roadmap com investimentos em P&D do fornecedor"
          ]
        }
      ]
    },
    5: {
      title: "Auditorias de Fábrica & Mapeamento de Capacidades",
      subtitle: "Garantindo excelência operacional",
      icon: "fa-industry",
      sections: [
        {
          title: "Framework de Auditoria",
          items: [
            "Verificação do sistema de gestão de qualidade ISO 9001",
            "Análise de capacidade de produção (linhas, turnos, utilização)",
            "Registros de manutenção de equipamentos e certificados de calibração",
            "Avaliação de habilidades da força de trabalho e programas de treinamento",
            "Práticas de conformidade ambiental e gestão de resíduos"
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
    },
    6: {
      title: "Pipeline Pós-Feira, ROI & Governança",
      subtitle: "Convertendo leads em receita",
      icon: "fa-chart-line",
      sections: [
        {
          title: "Gestão de Pipeline",
          items: [
            "Categorização de leads: Quente (imediato), Morno (3 meses), Frio (nutrição)",
            "Integração com CRM com sequências automatizadas de acompanhamento",
            "Estimativa de valor de oportunidade e pontuação de probabilidade de ganho",
            "Handover multifuncional para equipes de vendas regionais",
            "Reuniões semanais de revisão de pipeline para primeiros 30 dias"
          ]
        },
        {
          title: "Métricas de Desempenho",
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
  },
  es: {
    1: {
      title: "Diseño de Stand & Merchandising",
      subtitle: "Creando experiencias de marca inmersivas",
      icon: "fa-drafting-compass",
      sections: [
        {
          title: "Enfoque Estratégico",
          items: [
            "Co-creación del concepto de stand con Marketing alineado al posicionamiento de marca",
            "Optimización del flujo de tráfico para máximo engagement de visitantes",
            "Jerarquía de exhibición de productos destacando SKUs principales y nuevos lanzamientos",
            "Iluminación y merchandising visual para percepción premium de marca",
            "Estaciones de demostración interactiva para experiencia práctica del producto"
          ]
        },
        {
          title: "Ejecución Técnica",
          items: [
            "Renderizaciones 3D y maquetas aprobadas 60 días antes del evento",
            "Componentes modulares de stand para reutilización en ferias",
            "Integración de señalización digital con catálogos de productos en tiempo real",
            "Planificación de almacenamiento y logística para exhibición de 500+ SKUs",
            "Supervisión en el sitio durante montaje y desmontaje"
          ]
        }
      ]
    },
    2: {
      title: "Orquestación de Reuniones & Captación de Leads",
      subtitle: "Maximizando ROI a través de engagement estructurado",
      icon: "fa-calendar-check",
      sections: [
        {
          title: "Planificación Pre-Evento",
          items: [
            "Desarrollo de lista de objetivos: 200+ prospectos calificados por feria",
            "Sistema de programación de reuniones con recordatorios automatizados",
            "Briefing del equipo de ventas con sesiones de conocimiento del producto",
            "Pitch decks personalizados por segmento de cliente",
            "Criterios de puntuación de leads definidos (presupuesto, cronograma, autoridad)"
          ]
        },
        {
          title: "Ejecución en el Sitio",
          items: [
            "Slots de reunión estructurados de 30 minutos con agendas claras",
            "Captación de leads en tiempo real vía aplicación móvil de CRM",
            "Correos de seguimiento inmediatos enviados dentro de 4 horas",
            "Notas de reunión estandarizadas para visibilidad del pipeline",
            "Reuniones diarias del equipo para ajustar estrategia basada en feedback"
          ]
        }
      ]
    },
    3: {
      title: "Negociaciones & Alianzas",
      subtitle: "Construyendo relaciones estratégicas con proveedores",
      icon: "fa-handshake-angle",
      sections: [
        {
          title: "Desarrollo de Alianzas",
          items: [
            "Calificación inicial: estabilidad financiera, capacidad, certificaciones",
            "Negociaciones de hoja de términos: MOQ, plazos de pago, cláusulas de exclusividad",
            "Estructura de precios con descuentos por volumen y rebajas anuales",
            "Acuerdos de calidad definiendo tasas de defectos y acciones correctivas",
            "Protección de PI y marcos de NDA para desarrollo de nuevos productos"
          ]
        },
        {
          title: "Marco Contractual",
          items: [
            "Acuerdos Maestros de Servicio (MSA) con términos estandarizados",
            "Plantillas de Declaración de Trabajo (SoW) para trabajo basado en proyecto",
            "Acuerdos de Nivel de Servicio (SLA) con cláusulas de penalización/incentivo",
            "Disposiciones de fuerza mayor y continuidad de negocios",
            "Cláusulas de salida y obligaciones de transferencia de conocimiento"
          ]
        }
      ]
    },
    4: {
      title: "Descubrimiento Tecnológico & Benchmark",
      subtitle: "Manteniéndose a la vanguardia de la innovación de mercado",
      icon: "fa-microchip",
      sections: [
        {
          title: "Inteligencia de Mercado",
          items: [
            "Exploración tecnológica en 50+ stands de proveedores por feria",
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
            "Revisión de prototipos y retroalimentación de diseño para manufactura (DFM)",
            "Evaluación de requisitos de certificación (CE, FCC, ANATEL)",
            "Alineación de hoja de ruta con inversiones en I+D del proveedor"
          ]
        }
      ]
    },
    5: {
      title: "Auditorías de Fábrica & Mapeo de Capacidades",
      subtitle: "Garantizando excelencia operativa",
      icon: "fa-industry",
      sections: [
        {
          title: "Marco de Auditoría",
          items: [
            "Verificación del sistema de gestión de calidad ISO 9001",
            "Análisis de capacidad de producción (líneas, turnos, utilización)",
            "Registros de mantenimiento de equipos y certificados de calibración",
            "Evaluación de habilidades de la fuerza laboral y programas de entrenamiento",
            "Prácticas de cumplimiento ambiental y gestión de residuos"
          ]
        },
        {
          title: "Evaluación de Riesgos",
          items: [
            "Verificación de salud financiera (reportes de crédito, historial de pagos)",
            "Resiliencia de la cadena de suministro (dual sourcing, inventario de seguridad)",
            "Auditorías de cumplimiento social (estándares SA8000, BSCI)",
            "Protocolos de ciberseguridad para asociaciones de intercambio de datos",
            "Planificación de continuidad de negocios y recuperación de desastres"
          ]
        }
      ]
    },
    6: {
      title: "Pipeline Post-Feria, ROI & Gobernanza",
      subtitle: "Convirtiendo leads en ingresos",
      icon: "fa-chart-line",
      sections: [
        {
          title: "Gestión de Pipeline",
          items: [
            "Categorización de leads: Caliente (inmediato), Tibio (3 meses), Frío (nutrición)",
            "Integración con CRM con secuencias automatizadas de seguimiento",
            "Estimación de valor de oportunidad y puntuación de probabilidad de ganancia",
            "Transferencia multifuncional a equipos de ventas regionales",
            "Reuniones semanales de revisión de pipeline para primeros 30 días"
          ]
        },
        {
          title: "Métricas de Desempeño",
          items: [
            "Cálculo de costo por lead (costo del stand ÷ leads calificados)",
            "Seguimiento de tasa de conversión de lead a orden",
            "Comparación de tamaño promedio de trato vs. clientes no-feria",
            "Análisis de tiempo para cierre identificando cuellos de botella",
            "Reporte anual de ROI para justificación de presupuesto de marketing"
          ]
        }
      ]
    }
  },
  fr: {
    1: {
      title: "Design de Stand & Merchandising",
      subtitle: "Création d'expériences de marque immersives",
      icon: "fa-drafting-compass",
      sections: [
        {
          title: "Approche Stratégique",
          items: [
            "Co-création du concept de stand avec Marketing aligné sur le positionnement de la marque",
            "Optimisation du flux de trafic pour un engagement maximal des visiteurs",
            "Hiérarchie d'affichage des produits mettant en valeur les SKU phares et les nouveaux lancements",
            "Éclairage et merchandising visuel pour une perception premium de la marque",
            "Stations de démonstration interactive pour une expérience produit pratique"
          ]
        },
        {
          title: "Exécution Technique",
          items: [
            "Rendus 3D et maquettes approuvés 60 jours avant l'événement",
            "Composants modulaires de stand pour réutilisation sur les salons",
            "Intégration de signalisation numérique avec catalogues de produits en temps réel",
            "Planification de stockage et logistique pour l'affichage de 500+ SKU",
            "Supervision sur site pendant le montage et le démontage"
          ]
        }
      ]
    },
    2: {
      title: "Orchestration de Réunions & Capture de Leads",
      subtitle: "Maximisation du ROI grâce à un engagement structuré",
      icon: "fa-calendar-check",
      sections: [
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
            "Capture de leads en temps réel via application mobile CRM",
            "E-mails de suivi immédiats envoyés dans les 4 heures",
            "Notes de réunion standardisées pour visibilité du pipeline",
            "Réunions d'équipe quotidiennes pour ajuster la stratégie basée sur les retours"
          ]
        }
      ]
    },
    3: {
      title: "Négociations & Partenariats",
      subtitle: "Construction de relations fournisseurs stratégiques",
      icon: "fa-handshake-angle",
      sections: [
        {
          title: "Développement de Partenariats",
          items: [
            "Qualification initiale: stabilité financière, capacité, certifications",
            "Négociations de feuille de termes: MOQ, délais de paiement, clauses d'exclusivité",
            "Cadre de tarification avec ruptures de volume et remises annuelles",
            "Accords qualité définissant les taux de défauts et actions correctives",
            "Protection de PI et cadres de NDA pour développement de nouveaux produits"
          ]
        },
        {
          title: "Cadre Contractuel",
          items: [
            "Accords Cadre de Service (MSA) avec termes standardisés",
            "Modèles de Déclaration de Travail (SoW) pour travail basé sur projet",
            "Accords de Niveau de Service (SLA) avec clauses de pénalité/incitation",
            "Dispositions de force majeure et continuité d'activité",
            "Clauses de sortie et obligations de transfert de connaissances"
          ]
        }
      ]
    },
    4: {
      title: "Veille Technologique & Benchmark",
      subtitle: "Rester à la pointe de l'innovation marché",
      icon: "fa-microchip",
      sections: [
        {
          title: "Intelligence Marché",
          items: [
            "Prospection technologique sur 50+ stands fournisseurs par salon",
            "Démontages de produits concurrents et comparaison de fonctionnalités",
            "Benchmark de coûts pour spécifications similaires",
            "Cartographie des tendances d'innovation (IoT, durabilité, fonctionnalités intelligentes)",
            "Analyse de paysage de brevets pour liberté d'exploitation"
          ]
        },
        {
          title: "Évaluation Technique",
          items: [
            "Collecte d'échantillons pour tests en laboratoire et validation",
            "Consultations de l'équipe d'ingénierie sur faisabilité technique",
            "Revue de prototype et retour de conception pour fabrication (DFM)",
            "Évaluation des exigences de certification (CE, FCC, ANATEL)",
            "Alignement de feuille de route avec investissements R&D du fournisseur"
          ]
        }
      ]
    },
    5: {
      title: "Audits d'Usines & Cartographie des Capacités",
      subtitle: "Garantir l'excellence opérationnelle",
      icon: "fa-industry",
      sections: [
        {
          title: "Cadre d'Audit",
          items: [
            "Vérification du système de management qualité ISO 9001",
            "Analyse de capacité de production (lignes, équipes, utilisation)",
            "Dossiers de maintenance équipement et certificats d'étalonnage",
            "Évaluation des compétences de la main-d'œuvre et programmes de formation",
            "Pratiques de conformité environnementale et gestion des déchets"
          ]
        },
        {
          title: "Évaluation des Risques",
          items: [
            "Vérification de santé financière (rapports de crédit, historique de paiements)",
            "Résilience de la chaîne d'approvisionnement (double sourcing, stock tampon)",
            "Audits de conformité sociale (normes SA8000, BSCI)",
            "Protocoles de cybersécurité pour partenariats de partage de données",
            "Planification de continuité d'activité et reprise après sinistre"
          ]
        }
      ]
    },
    6: {
      title: "Pipeline Post-Salon, ROI & Gouvernance",
      subtitle: "Conversion des leads en revenus",
      icon: "fa-chart-line",
      sections: [
        {
          title: "Gestion du Pipeline",
          items: [
            "Catégorisation des leads: Chaud (immédiat), Tiède (3 mois), Froid (nurturing)",
            "Intégration CRM avec séquences de suivi automatisées",
            "Estimation de valeur d'opportunité et scoring de probabilité de gain",
            "Passation de relais transversale aux équipes commerciales régionales",
            "Réunions hebdomadaires de revue de pipeline pour les 30 premiers jours"
          ]
        },
        {
          title: "Métriques de Performance",
          items: [
            "Calcul de coût par lead (coût stand ÷ leads qualifiés)",
            "Suivi de taux de conversion lead à commande",
            "Comparaison de taille moyenne de transaction vs. clients non-salon",
            "Analyse de délai de clôture identifiant les goulots d'étranglement",
            "Rapport annuel de ROI pour justification du budget marketing"
          ]
        }
      ]
    }
  }
};

// Função openStrategyModal corrigida com tradução
function openStrategyModal(num) {
  const lang = PG_state.currentLang || 'en';
  const data = strategyDetailsDataI18N[lang] && strategyDetailsDataI18N[lang][num];
  
  if (!data) {
    console.error('Strategy data not found for lang:', lang, 'num:', num);
    return;
  }
  
  $('#strategyDetailIcon').className = `fas ${data.icon} fa-2x`;
  $('#strategyDetailTitle').textContent = data.title;
  $('#strategyDetailSubtitle').textContent = data.subtitle;
  
  const body = data.sections.map(sec => {
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
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/* -------------------------
   Correção 5: Project card dots animation fix
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

  // Create dots if they don't exist
  let dotsContainer = card.querySelector('.gallery-dots');
  if (!dotsContainer && images.length > 1) {
    dotsContainer = document.createElement('div');
    dotsContainer.className = 'gallery-dots';
    images.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = `gallery-dot ${i === 0 ? 'active' : ''}`;
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goToCardSlide(card, i);
      });
      dotsContainer.appendChild(dot);
    });
    card.querySelector('.project-gallery')?.appendChild(dotsContainer);
  }

  function updateDots() {
    const dots = card.querySelectorAll('.gallery-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === state.idx);
      if (i === state.idx) {
        dot.style.transform = 'scale(1.4)';
        setTimeout(() => { dot.style.transform = ''; }, 200);
      }
    });
  }

  function tick() {
    if (state.paused || !auto || state.images.length <= 1) return;
    state.idx = (state.idx + 1) % state.images.length;
    state.imgEl.style.opacity = '0';
    setTimeout(() => {
      state.imgEl.src = state.images[state.idx];
      state.imgEl.onload = () => { 
        state.imgEl.style.opacity = '1'; 
        updateDots();
      };
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

function goToCardSlide(card, idx) {
  const state = CardSlides.get(card);
  if (!state || !state.images.length) return;
  
  state.idx = idx;
  state.imgEl.style.opacity = '0';
  setTimeout(() => {
    state.imgEl.src = state.images[state.idx];
    state.imgEl.onload = () => { 
      state.imgEl.style.opacity = '1';
      // Update dots
      const dots = card.querySelectorAll('.gallery-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === state.idx);
        if (i === state.idx) {
          dot.style.transform = 'scale(1.4)';
          setTimeout(() => { dot.style.transform = ''; }, 200);
        }
      });
    };
  }, 160);
}

// Expor funções globalmente
window.openStrategyModal = openStrategyModal;
window.closeStrategyModal = closeStrategyModal;
window.openStatModal = openStatModal;
window.closeStatModal = closeStatModal;
window.changeProjectSlide = changeProjectSlide;
window.goToProjectSlide = goToProjectSlide;
window.closeProjectGallery = closeProjectGallery;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.scrollToTop = scrollToTop;
