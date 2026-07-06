/**
 * data.js — Toda la información editable del portafolio (Bilingüe)
 *
 * ✏️  INSTRUCCIONES PARA ACTUALIZAR:
 * Edita este archivo para cambiar la experiencia, proyectos o datos de contacto.
 * Soporta versiones en Español (es) e Inglés (en).
 */

var PORTFOLIO_DATA = {
  es: {
    PERSONA: {
      nombre: "Ana Lucía Beoutis",
      rol: "Productora Ejecutiva & Coordinadora Bilingüe",
      tagline: "Asistente Ejedcutiva y Coordinadora de Proyectos",
      bio: [
        "Durante más de 15 años he coordinado proyectos publicitarios y audiovisuales, acompañando cada etapa, desde el brief de marketing hasta la ejecución y entrega de campañas. Esa experiencia me permitió desarrollar habilidades de organización, seguimiento, coordinación de equipos y gestión de múltiples tareas, que hoy quiero aplicar en roles remotos de Executive Assistant y Virtual Assistant."
      ],
      stats: [
        { numero: "15+", label: "Años de experiencia" },
        { numero: "20+", label: "Clientes y marcas" },
        { numero: "C1", label: "Inglés certificado EF SET" },
        { numero: "2", label: "Idiomas de trabajo" }
      ],
      contacto: {
        email: "analuciab2@gmail.com",
        whatsapp: "+51992740520",
        linkedin: "https://www.linkedin.com/in/analuciabeoutis/",
        instagram: null,
        vimeo: null,
        cvPdf: null
      }
    },
    EXPERIENCIA: [
      {
        id: "exp-1",
        rol: "Productora Ejecutiva",
        empresa: "Parce Films",
        lugar: "Lima, Perú",
        fechaInicio: "Feb 2026",
        fechaFin: "Jun 2026",
        duracion: "5 meses",
        tipo: ["publicidad"],
        logros: [
          "Gestión y supervisión integral de proyectos audiovisuales publicitarios en coordinación con agencias creativas y equipos de marketing.",
          "Desarrollo de presupuestos, planificación, contratación de equipos técnicos y creativos, y control de producción hasta la entrega final."
        ]
      },
      {
        id: "exp-2",
        rol: "Medical Interpreter (OPI)",
        empresa: "Elite Language Services",
        lugar: "Lima, Perú (remoto)",
        fechaInicio: "Sep 2025",
        fechaFin: "Feb 2026",
        duracion: "6 meses",
        tipo: ["interpretacion"],
        logros: [
          "Gestión de comunicación en tiempo real entre pacientes y personal médico dentro del sistema de salud de Estados Unidos.",
          "Colaboración en procesos de reclutamiento y selección de nuevos intérpretes."
        ]
      },
      {
        id: "exp-3",
        rol: "Medical Interpreter (OPI & VRI)",
        empresa: "Bilingual",
        lugar: "Lima, Perú (remoto)",
        fechaInicio: "Dic 2024",
        fechaFin: "Ago 2025",
        duracion: "9 meses",
        tipo: ["interpretacion"],
        logros: [
          "Gestión de comunicación en tiempo real entre pacientes y personal médico dentro del sistema de salud de EE.UU.",
          "Indicadores de calidad (QA) sostenidos de forma consistente entre <strong>92% y 100%</strong>."
        ]
      },
      {
        id: "exp-4",
        rol: "Productora Ejecutiva",
        empresa: "Jaguar Media",
        lugar: "Lima, Perú",
        fechaInicio: "May 2024",
        fechaFin: "Dic 2024",
        duracion: "8 meses",
        tipo: ["publicidad",],
        logros: [
          "Venta de servicios audiovisuales: streaming y coberturas en vivo, CCTV para eventos, pantallas LED, alquiler de equipos, estudio de TV y sala Podcast."
        ]
      },
      {
        id: "exp-5",
        rol: "Productora Ejecutiva y de Campo",
        empresa: "Analú Beoutis – Productora",
        lugar: "Perú",
        fechaInicio: "Abr 2019",
        fechaFin: "Abr 2024",
        duracion: "5 años",
        tipo: ["publicidad",],
        logros: [
          "Productora audiovisual independiente: gestión de proyectos audiovisuales y fotográficos para clientes del sector privado y público."
        ]
      },
      {
        id: "exp-6",
        rol: "Productora Ejecutiva",
        empresa: "No Problem Films",
        lugar: "Lima, Perú",
        fechaInicio: "Sep 2015",
        fechaFin: "Mar 2019",
        duracion: "3 años 7 meses",
        tipo: ["publicidad",],
        logros: [
          "Producción general de campañas audiovisuales para ATL, digital y medios impresos: brief, presupuesto, cronograma, equipo, proveedores y supervisión de rodaje.",
          "Ventas y relación con clientes: búsqueda de nuevos clientes y gestión de la relación con cuentas activas."
        ]
      },
      {
        id: "exp-7",
        rol: "Productora",
        empresa: "Sirius Films",
        lugar: "Lima, Perú",
        fechaInicio: "Ene 2015",
        fechaFin: "Sep 2015",
        duracion: "9 meses",
        tipo: ["publicidad"],
        logros: [
          "Elaboración de presupuestos y cronogramas.",
          "Apoyo en la coordinación de preproducción, postproducción y días de rodaje."
        ]
      },
      {
        id: "exp-8",
        rol: "Productora",
        empresa: "Circus Grey",
        lugar: "Lima, Perú",
        fechaInicio: "Ago 2013",
        fechaFin: "Jun 2014",
        duracion: "11 meses",
        tipo: ["publicidad"],
        logros: [
          "Producción fotográfica para catálogos de Hipermercados Tottus.",
          "Supervisión de preproducción y sesiones fotográficas en estudio y locación."
        ]
      },
      {
        id: "exp-9",
        rol: "Ejecutiva de Cuentas",
        empresa: "VMLY&R",
        lugar: "Lima, Perú",
        fechaInicio: "Abr 2011",
        fechaFin: "Ago 2013",
        duracion: "2 años 5 meses",
        tipo: ["publicidad"],
        logros: [
          "Gestión de campañas ATL, editoriales y piezas gráficas digitales e impresas.",
          "Supervisión de ejecución: coordination con producción, cumplimiento de objetivos y acuerdos para filmación y fotografía."
        ]
      },
      {
        id: "exp-10",
        rol: "Asistente de Comunicación",
        empresa: "CEPES – Centro Peruano de Estudios Sociales",
        lugar: "Lima, Perú",
        fechaInicio: "Oct 2009",
        fechaFin: "Jun 2010",
        duracion: "9 meses",
        tipo: ["comunicacionsocial"],
        logros: [
          "Asistente de Diseño y Monitoreo en proyecto de Comunicación en Salud para ALICORP y MINSA.",
          "Producción y coordinación de talleres de capacitación para periodistas radiales en el interior del país."
        ]
      }
    ],
    PROYECTOS_VIDEO: [
      {
        id: "proj-1",
        titulo: "Hechos Para Más",
        cliente: "Hyundai",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/YBPM0Y5PzGM",
        thumbnail: "assets/img/thumbnails/hyundai_hechos_para_mas.png",
        descripcion: "Campaña para Camiones Hyundai."
      },
      {
        id: "proj-2",
        titulo: "Feria Educativa Fest 26",
        cliente: "Beca Cometa Intercorp",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/PWliXy8OT9s",
        thumbnail: "assets/img/thumbnails/beca_cometa.png",
        descripcion: "Publicidad de Feria Educativa Beca Cometa de Intercorp"
      },
      {
        id: "proj-3",
        titulo: "Accesorios Toyota Rav4 Hybrid",
        cliente: "Toyota",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/uhtIXta9GHU",
        thumbnail: "assets/img/thumbnails/toyota_rav4_hybrid.png",
        descripcion: "Contenido publicitario para Toyota."
      },
      {
        id: "proj-4",
        titulo: "Bienestars",
        cliente: "APF Prima",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/1X6SCYGe5WY",
        thumbnail: "assets/img/thumbnails/afp_prima_bienestars.png",
        descripcion: "Campaña de incentivos de APF Prima."
      },
      {
        id: "proj-5",
        titulo: "Añejo",
        cliente: "Arroz Costeño Extra Añejo",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/UsCZ2Djt46o",
        thumbnail: "assets/img/thumbnails/arroz_costeno_extra_anejo.png",
        descripcion: "Campaña de relanzamiento de Arroz Costeño Extra Añejo."
      },
      {
        id: "proj-6",
        titulo: "Promo Fiestas Patrias",
        cliente: "Field",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/Z_qz5bBoqyQ",
        thumbnail: "assets/img/thumbnails/field_fiestas_patrias_2026.png",
        descripcion: "Campaña promocional por Fiestas Patrias para galletas Field."
      },
      {
        id: "proj-7",
        titulo: "Crece Mujer",
        cliente: "Caja Piura",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/gZGDXmbE0Kg",
        thumbnail: "assets/img/thumbnails/caja_piura_crece_mujer.jpg",
        descripcion: "Campaña por el Día de la Mujer para Caja Piura."
      },
      {
        id: "proj-8",
        titulo: "Bullying",
        cliente: "Jockey Plaza",
        tipo: "Contenido",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/3H6yBtLTuAs",
        thumbnail: "assets/img/thumbnails/jockey_plaza_bullying.jpg",
        descripcion: "Campaña contra el bullying para el Jockey Plaza."
      },
      {
        id: "proj-9",
        titulo: "Labial Cushion",
        cliente: "Yanbal International",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2021",
        videoUrl: "https://www.youtube.com/embed/hZR50Qc7Yic",
        thumbnail: "assets/img/thumbnails/unique_labial.jpg",
        descripcion: "Campaña de beauty. Animación 3D."
      },
      {
        id: "proj-10",
        titulo: "Amigos | Y Tú Qué Planes",
        cliente: "Marca Perú",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2019",
        videoUrl: "https://www.youtube.com/embed/9KGMGhNS8sg",
        thumbnail: "assets/img/thumbnails/y_tu_que_planes.jpg",
        descripcion: "Campaña de turismo interno."
      },
      {
        id: "proj-11",
        titulo: "Hit",
        cliente: "Pizza Hut",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2017",
        videoUrl: "https://www.youtube.com/embed/iYhUZ_oUGu8",
        thumbnail: "assets/img/thumbnails/pizza_hut_hit.jpg",
        descripcion: "Campaña promocional."
      },
      {
        id: "proj-12",
        titulo: "Mentalista",
        cliente: "Pingüinos Marinela",
        tipo: "Contenido",
        rol: "Productora Ejecutiva",
        año: "2015",
        videoUrl: "https://www.youtube.com/embed/O4saBGUPG-o",
        thumbnail: "assets/img/thumbnails/pinguinos_marinela.jpg",
        descripcion: "Contenido para campaña promocional en redes sociales"
      }
    ],
    HABILIDADES: [
      {
        categoria: "Producción Audiovisual",
        items: [
          "Producción ejecutiva",
          "Coordinación de producción",
          "Gestión de presupuestos",
          "Planificación y cronogramas",
          "Coordinación de proveedores",
          "Coordinación de locaciones y casting",
          "Supervisión de pre y postproducción"
        ]
      },
      {
        categoria: "Comunicación & Gestión",
        items: [
          "Coordinación de proyectos",
          "Gestión de agendas y prioridades",
          "Seguimiento de tareas",
          "Coordinación de equipos",
          "Relación con clientes y proveedores",
          "Comunicación bilingüe ES/EN",
          "Microsoft Office / Google Workspace"
        ]
      },
      {
        categoria: "Herramientas Digitales",
        items: [
          "Google Workspace",
          "Microsoft Office",
          "Canva",
          "ChatGPT",
          "Claude",
          "Meta Ads (básico)",
          "Notion (básico)"
        ]
      }
    ],
    IDIOMAS: [
      { idioma: "Español", nivel: "Nativo" },
      { idioma: "Inglés", nivel: "C1 Avanzado (EF SET 69/100)" }
    ],
    EDUCACION: [
      {
        titulo: "Licenciatura en Comunicación",
        institucion: "Universidad de Lima",
        año: "2004 – 2010"
      }
    ],
    CERTIFICACIONES: [
      { nombre: "EF SET English Certificate", detalle: "69/100 · C1 Advanced" }
    ],
    HABILIDADES_INTERPRETE: {
      visible: true,
      titulo: "También: Intérprete Médica Bilingüe",
      descripcion: "Además de su carrera en producción audiovisual, Ana Lucía trabaja como intérprete médica bilingüe (ES/EN), gestionando comunicación en tiempo real dentro del sistema de salud de Estados Unidos con indicadores de calidad consistentemente superiores al 92%.",
      items: [
        "Interpretación médica OPI (Over-the-Phone)",
        "Interpretación médica VRI (Video Remote)",
        "Terminología médica especializada",
        "Comunicación en tiempo real bajo presión",
        "Reclutamiento y selección de intérpretes"
      ],
      cvPdf: null
    }
  },
  en: {
    PERSONA: {
      nombre: "Ana Lucía Beoutis",
      rol: "Executive Producer & Bilingual Coordinator",
      tagline: "Executive Assistant and Project Coordinator",
      bio: [
        "For over 15 years, I have coordinated advertising and audiovisual projects, accompanying every stage from the marketing brief to campaign execution and delivery. This experience allowed me to develop organizational, follow-up, team coordination, and multitasking skills that I now want to apply in remote Executive Assistant and Virtual Assistant roles."
      ],
      stats: [
        { numero: "15+", label: "Years of experience" },
        { numero: "20+", label: "Clients and brands" },
        { numero: "C1", label: "EF SET Certified English" },
        { numero: "2", label: "Working languages" }
      ],
      contacto: {
        email: "analuciab2@gmail.com",
        whatsapp: "+51992740520",
        linkedin: "https://www.linkedin.com/in/analuciabeoutis/",
        instagram: null,
        vimeo: null,
        cvPdf: null
      }
    },
    EXPERIENCIA: [
      {
        id: "exp-1",
        rol: "Executive Producer",
        empresa: "Parce Films",
        lugar: "Lima, Peru",
        fechaInicio: "Feb 2026",
        fechaFin: "Jun 2026",
        duracion: "5 months",
        tipo: ["publicidad"],
        logros: [
          "Comprehensive management and supervision of advertising audiovisual projects in coordination with creative agencies and marketing teams.",
          "Development of budgets, planning, hiring of technical and creative teams, and production control until final delivery."
        ]
      },
      {
        id: "exp-2",
        rol: "Medical Interpreter (OPI)",
        empresa: "Elite Language Services",
        lugar: "Lima, Peru (remote)",
        fechaInicio: "Sep 2025",
        fechaFin: "Feb 2026",
        duracion: "6 months",
        tipo: ["interpretacion"],
        logros: [
          "Real-time communication management between patients and medical staff within the United States healthcare system.",
          "Collaboration in recruitment and selection processes for new interpreters."
        ]
      },
      {
        id: "exp-3",
        rol: "Medical Interpreter (OPI & VRI)",
        empresa: "Bilingual",
        lugar: "Lima, Peru (remote)",
        fechaInicio: "Dec 2024",
        fechaFin: "Aug 2025",
        duracion: "9 months",
        tipo: ["interpretacion"],
        logros: [
          "Real-time communication management between patients and medical staff within the US healthcare system.",
          "Quality assurance (QA) indicators consistently maintained between <strong>92% and 100%</strong>."
        ]
      },
      {
        id: "exp-4",
        rol: "Executive Producer",
        empresa: "Jaguar Media",
        lugar: "Lima, Peru",
        fechaInicio: "May 2024",
        fechaFin: "Dec 2024",
        duracion: "8 months",
        tipo: ["publicidad", "corporativo"],
        logros: [
          "Sales of audiovisual services: streaming and live coverage, CCTV for events, LED screens, equipment rentals, TV studio, and Podcast room."
        ]
      },
      {
        id: "exp-5",
        rol: "Executive & Field Producer",
        empresa: "Analú Beoutis – Producer",
        lugar: "Peru",
        fechaInicio: "Apr 2019",
        fechaFin: "Apr 2024",
        duracion: "5 years",
        tipo: ["publicidad", "corporativo", "documental"],
        logros: [
          "Independent audiovisual producer: managing film and commercial photography projects for private and public sector clients."
        ]
      },
      {
        id: "exp-6",
        rol: "Executive Producer",
        empresa: "No Problem Films",
        lugar: "Lima, Peru",
        fechaInicio: "Sep 2015",
        fechaFin: "Mar 2019",
        duracion: "3 years 7 months",
        tipo: ["publicidad"],
        logros: [
          "General production of audiovisual campaigns for ATL, digital, and print media: brief, budget, timeline, team, vendors, and filming supervision.",
          "Sales and client relations: seeking new clients and managing active account relationships."
        ]
      },
      {
        id: "exp-7",
        rol: "Producer",
        empresa: "Sirius Films",
        lugar: "Lima, Peru",
        fechaInicio: "Jan 2015",
        fechaFin: "Sep 2015",
        duracion: "9 months",
        tipo: ["publicidad"],
        logros: [
          "Budget preparation and production scheduling.",
          "Support in coordinating preproduction, postproduction, and filming days."
        ]
      },
      {
        id: "exp-8",
        rol: "Producer",
        empresa: "Circus Grey",
        lugar: "Lima, Peru",
        fechaInicio: "Aug 2013",
        fechaFin: "Jun 2014",
        duracion: "11 months",
        tipo: ["publicidad"],
        logros: [
          "Production for Tottus Hypermarkets catalogs.",
          "Supervision of preproduction and photography sessions in studio and on location."
        ]
      },
      {
        id: "exp-9",
        rol: "Account Executive",
        empresa: "VMLY&R",
        lugar: "Lima, Peru",
        fechaInicio: "Apr 2011",
        fechaFin: "Aug 2013",
        duracion: "2 years 5 months",
        tipo: ["publicidad"],
        logros: [
          "Management of ATL, editorial, and digital/print graphic campaigns.",
          "Execution supervision: coordination with production, meeting goals and agreements for filming and photography."
        ]
      },
      {
        id: "exp-10",
        rol: "Communication Assistant",
        empresa: "CEPES – Peruvian Center for Social Studies",
        lugar: "Lima, Peru",
        fechaInicio: "Oct 2009",
        fechaFin: "Jun 2010",
        duracion: "9 months",
        tipo: ["corporativo"],
        logros: [
          "Design and monitoring assistant in a health communication project for ALICORP and MINSA.",
          "Production and coordination of training workshops for radio journalists in the interior of the country."
        ]
      }
    ],
    PROYECTOS_VIDEO: [
      
      {
        id: "proj-1",
        titulo: "Hechos Para Más",
        cliente: "Hyundai",
        tipo: "Commercial",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/YBPM0Y5PzGM",
        thumbnail: "assets/img/thumbnails/hyundai_hechos_para_mas.png",
        descripcion: "Ad campaign for Hyundai trucks and buses."
      },
      {
        id: "proj-2",
        titulo: "Feria Educativa Fest 26",
        cliente: "Beca Cometa Intercorp",
        tipo: "Commercial",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/PWliXy8OT9s",
        thumbnail: "assets/img/thumbnails/beca_cometa.png",
        descripcion: "Ad for Beca Cometa, Intercorp's educational fair."
      },
      {
        id: "proj-3",
        titulo: "Accesorios Toyota Rav4 Hybrid",
        cliente: "Toyota",
        tipo: "Content",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/uhtIXta9GHU",
        thumbnail: "assets/img/thumbnails/toyota_rav4_hybrid.png",
        descripcion: "Branded Content for Toyota Rav4 Hybrid."
      },
      {
        id: "proj-4",
        titulo: "Bienestars",
        cliente: "APF Prima",
        tipo: "Commercial",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/1X6SCYGe5WY",
        thumbnail: "assets/img/thumbnails/afp_prima_bienestars.png",
        descripcion: "APF Prima's incentive campaign."
      },
      {
        id: "proj-5",
        titulo: "Añejo",
        cliente: "Arroz Costeño Extra Añejo",
        tipo: "Commercial",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/UsCZ2Djt46o",
        thumbnail: "assets/img/thumbnails/arroz_costeno_extra_anejo.png",
        descripcion: "Relaunch campagin for Arroz Costeño Extra Añejo."
      },
      {
        id: "proj-6",
        titulo: "Promo Fiestas Patrias",
        cliente: "Field",
        tipo: "Commercial",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/Z_qz5bBoqyQ",
        thumbnail: "assets/img/thumbnails/field_fiestas_patrias_2026.png",
        descripcion: "Field's Promotional campagin for National Day celebration."
      },
      {
        id: "proj-7",
        titulo: "Crece Mujer",
        cliente: "Caja Piura",
        tipo: "Commercial",
        rol: "Executive Producer",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/gZGDXmbE0Kg",
        thumbnail: "assets/img/thumbnails/caja_piura_crece_mujer.jpg",
        descripcion: "Wome's Day ad campaign for Caja Piura."
      },
      {
        id: "proj-8",
        titulo: "Bullying",
        cliente: "Jockey Plaza",
        tipo: "Content",
        rol: "Executive Producer",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/3H6yBtLTuAs",
        thumbnail: "assets/img/thumbnails/jockey_plaza_bullying.jpg",
        descripcion: "Campaign against bullying for Jockey Plaza."
      },
      {
        id: "proj-9",
        titulo: "Cushion Lipstick",
        cliente: "Yanbal International",
        tipo: "Commercial",
        rol: "Executive Producer",
        año: "2021",
        videoUrl: "https://www.youtube.com/embed/hZR50Qc7Yic",
        thumbnail: "assets/img/thumbnails/unique_labial.jpg",
        descripcion: "Beauty advertisement. 3D animation."
      },
      {
        id: "proj-10",
        titulo: "Amigos | Y Tú Qué Planes",
        cliente: "Peru Country Brand",
        tipo: "Commercial",
        rol: "Executive Producer",
        año: "2019",
        videoUrl: "https://www.youtube.com/embed/9KGMGhNS8sg",
        thumbnail: "assets/img/thumbnails/y_tu_que_planes.jpg",
        descripcion: "Domestic Tourism Advertising Campaign."
      },
      {
        id: "proj-11",
        titulo: "Hit",
        cliente: "Pizza Hut",
        tipo: "Commercial",
        rol: "Executive Producer",
        año: "2017",
        videoUrl: "https://www.youtube.com/embed/iYhUZ_oUGu8",
        thumbnail: "assets/img/thumbnails/pizza_hut_hit.jpg",
        descripcion: "Promotional campaign."
      },
      {
        id: "proj-12",
        titulo: "The Mentalist",
        cliente: "Pingüinos Marinela",
        tipo: "Content",
        rol: "Executive Producer",
        año: "2015",
        videoUrl: "https://www.youtube.com/embed/O4saBGUPG-o",
        thumbnail: "assets/img/thumbnails/pinguinos_marinela.jpg",
        descripcion: "Content for social media promotional campaign."
      }
    ],
    HABILIDADES: [
      {
        categoria: "Audiovisual Production",
        items: [
          "Executive production",
          "Production coordination",
          "Budget management",
          "Planning and scheduling",
          "Vendor coordination",
          "Location and casting coordination",
          "Pre and postproduction supervision"
        ]
      },
      {
        categoria: "Communication & Management",
        items: [
          "Project coordination",
          "Schedule and priority management",
          "Task follow-up",
          "Team coordination",
          "Client and vendor relations",
          "Bilingual communication ES/EN",
          "Microsoft Office / Google Workspace"
        ]
      },
      {
        categoria: "Digital Tools",
        items: [
          "Google Workspace",
          "Microsoft Office",
          "Canva",
          "ChatGPT",
          "Claude",
          "Meta Ads (basic)",
          "Notion (basic)"
        ]
      }
    ],
    IDIOMAS: [
      { idioma: "Spanish", nivel: "Native" },
      { idioma: "English", nivel: "C1 Advanced (EF SET 69/100)" }
    ],
    EDUCACION: [
      {
        titulo: "Bachelor's Degree in Communication",
        institucion: "Universidad de Lima",
        año: "2004 – 2010"
      }
    ],
    CERTIFICACIONES: [
      { nombre: "EF SET English Certificate", detalle: "69/100 · C1 Advanced" }
    ],
    HABILIDADES_INTERPRETE: {
      visible: true,
      titulo: "Also: Bilingual Medical Interpreter",
      descripcion: "In addition to her career in audiovisual production, Ana Lucía works as a bilingual medical interpreter (ES/EN), managing real-time communication within the United States healthcare system with quality assurance indicators consistently above 92%.",
      items: [
        "Medical interpretation OPI (Over-the-Phone)",
        "Medical interpretation VRI (Video Remote)",
        "Specialized medical terminology",
        "Real-time communication under pressure",
        "Recruitment and selection of interpreters"
      ],
      cvPdf: null
    }
  }
};

var UI_TRANSLATIONS = {
  es: {
    nav_about: "Sobre mí",
    nav_experience: "Experiencia",
    nav_portfolio: "Portafolio",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",
    hero_eyebrow: "Productora Ejecutiva · Lima, Perú",
    hero_role: "Productora Audiovisual | Asistente Ejecutiva",
    hero_tagline: "Más de <strong>15 años</strong> coordinando campañas publicitarias y proyectos audiovisuales de principio a fin, administrando presupuestos, cronogramas, proveedores y equipos multidisciplinarios, con un enfoque en la organización, el seguimiento continuo y el cumplimiento de plazos.",
    hero_btn_portfolio: "Ver Portafolio",
    hero_btn_cv: "Ver CV",
    about_label: "Sobre mí",
    about_title: "Organización, coordinación <span class=\"font-script accent-circle\">&</span> ejecución",
    exp_label: "Experiencia",
    exp_title: "Trayectoria",
    filter_all: "Todos",
    filter_publicidad: "Publicidad",
    filter_corporativo: "Corporativo",
    filter_comunicacionsocial: "Comunicación Social",
    portfolio_label: "Portafolio",
    portfolio_title: "Proyectos",
    portfolio_subtitle: "Una selección de proyectos en los que he participado como Productora Ejecutiva. Haz clic en cualquier proyecto para ver el video.",
    skills_label: "Habilidades",
    skills_title: "Herramientas<br><span class=\"font-script accent-circle\">&</span> Especialidades",
    skills_languages: "Idiomas",
    skills_education: "Educación",
    skills_certifications: "Certificaciones",
    annex_label: "Anexo",
    annex_title: "Intérprete Médica",
    annex_subtitle: "Además de su carrera en producción audiovisual, Ana Lucía cuenta con experiencia como intérprete médica para el sector salud de los Estados Unidos.",
    annex_group_title: "Competencias como intérprete",
    contact_label: "Contacto",
    contact_title: "Hablemos<span class=\"gradient-dot\" style=\"background: var(--gradient-1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;\">.</span>",
    contact_subtitle: "¿Tienes un proyecto en mente? Me encantaría ser parte de él.",
    footer_text: "Ana Lucía Beoutis. Lima, Perú.",
    modal_aria: "Reproductor de video",
    modal_close_aria: "Cerrar video",

    // Mapeos de tags internos para visualización en las tarjetas de experiencia
    tag_publicidad: "Publicidad",
    tag_comunicacion_social: "Comunicación Social",
    tag_interpretacion: "Interpretación"
  },
  en: {
    nav_about: "About me",
    nav_experience: "Experience",
    nav_portfolio: "Portfolio",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_eyebrow: "Executive Producer · Lima, Peru",
    hero_role: "Audiovisual Producer | Executive Assistant",
    hero_tagline: "Over <strong>15 years</strong> coordinating advertising campaigns and audiovisual projects from start to finish, managing budgets, schedules, vendors, and multidisciplinary teams, with a focus on organization, continuous follow-up, and meeting deadlines.",
    hero_btn_portfolio: "View Portfolio",
    hero_btn_cv: "View CV",
    about_label: "About me",
    about_title: "Organization, coordination <span class=\"font-script accent-circle\">&</span> execution",
    exp_label: "Experience",
    exp_title: "Career",
    filter_all: "All",
    filter_publicidad: "Commercial",
    filter_documental: "Documentary",
    filter_corporativo: "Corporate",
    filter_musical: "Music Video",
    portfolio_label: "Portfolio",
    portfolio_title: "Projects",
    portfolio_subtitle: "A selection of projects in which I have participated as Executive Producer. Click on any project to watch the video.",
    skills_label: "Skills",
    skills_title: "Tools<br><span class=\"font-script accent-circle\">&</span> Specialties",
    skills_languages: "Languages",
    skills_education: "Education",
    skills_certifications: "Certifications",
    annex_label: "Annex",
    annex_title: "Medical Interpreter",
    annex_subtitle: "In addition to her career in audiovisual production, Ana Lucía has experience as a medical interpreter for the United States healthcare sector.",
    annex_group_title: "Skills as an interpreter",
    contact_label: "Contact",
    contact_title: "Let's talk<span class=\"gradient-dot\" style=\"background: var(--gradient-1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;\">.</span>",
    contact_subtitle: "Have a project in mind? I would love to be part of it.",
    footer_text: "Ana Lucía Beoutis. Lima, Peru.",
    modal_aria: "Video player",
    modal_close_aria: "Close video",

    // Mapeos de tags internos para visualización en las tarjetas de experiencia
    tag_publicidad: "Commercial",
    tag_documental: "Documentary",
    tag_corporativo: "Corporate",
    tag_musical: "Music Video",
    tag_interpretacion: "Interpretation"
  }
};
