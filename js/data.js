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
        titulo: "Crece Mujer",
        cliente: "Caja Piura",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2026",
        videoUrl: "https://www.youtube.com/embed/gZGDXmbE0Kg",
        thumbnail: null,
        descripcion: "Campaña por el Día de la Mujer para Caja Piura."
      },
      {
        id: "proj-2",
        titulo: "Campaña Movistar",
        cliente: "Movistar Perú",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2021",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Campaña publicitaria para medios ATL y digital."
      },
      {
        id: "proj-3",
        titulo: "BCP",
        cliente: "Banco de Crédito del Perú",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2020",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Pieza audiovisual institucional."
      },
      {
        id: "proj-4",
        titulo: "Yanbal",
        cliente: "Yanbal International",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2022",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Campaña de producto para medios digitales."
      },
      {
        id: "proj-5",
        titulo: "Lima Airport Partners",
        cliente: "LAP",
        tipo: "Corporativo",
        rol: "Productora Ejecutiva",
        año: "2023",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Video corporativo institucional."
      },
      {
        id: "proj-6",
        titulo: "Hyundai / LG",
        cliente: "Hyundai · LG",
        tipo: "Publicidad",
        rol: "Productora Ejecutiva",
        año: "2021",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Piezas publicitarias para marcas internacionales."
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
      tagline: "From script to screen — telling stories that move.",
      bio: [
        "Bilingual professional in communication and audiovisual production with <strong>over 15 years of experience</strong> in the comprehensive management of advertising, corporate, and institutional content projects.",
        "I have led campaigns as an <strong>Executive Producer</strong> for brands such as Marca Perú, Movistar, BCP, Scotiabank, Mapfre, Yanbal, Hyundai, LG, and Lima Airport Partners. My work combines strategic vision, team coordination, and project delivery with precision and creative judgment."
      ],
      stats: [
        { numero: "15+", label: "Years of experience" },
        { numero: "10+", label: "Top-tier brands" },
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
        titulo: "Marca Perú",
        cliente: "PromPerú",
        tipo: "Commercial",
        rol: "Executive Producer",
        año: "2022",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Institutional brand campaign for the country."
      },
      {
        id: "proj-2",
        titulo: "Movistar Campaign",
        cliente: "Movistar Perú",
        tipo: "Commercial",
        rol: "Executive Producer",
        año: "2021",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Advertising campaign for ATL and digital media."
      },
      {
        id: "proj-3",
        titulo: "BCP",
        cliente: "Banco de Crédito del Perú",
        tipo: "Commercial",
        rol: "Executive Producer",
        año: "2020",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Institutional audiovisual piece."
      },
      {
        id: "proj-4",
        titulo: "Yanbal",
        cliente: "Yanbal International",
        tipo: "Commercial",
        rol: "Executive Producer",
        año: "2022",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Product campaign for digital media."
      },
      {
        id: "proj-5",
        titulo: "Lima Airport Partners",
        cliente: "LAP",
        tipo: "Corporate",
        rol: "Executive Producer",
        año: "2023",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Institutional corporate video."
      },
      {
        id: "proj-6",
        titulo: "Hyundai / LG",
        cliente: "Hyundai · LG",
        tipo: "Commercial",
        rol: "Executive Producer",
        año: "2021",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: null,
        descripcion: "Advertising pieces for international brands."
      }
    ],
    HABILIDADES: [
      {
        categoria: "Audiovisual Production",
        items: [
          "Executive production",
          "Field production",
          "Production coordination",
          "Budget management",
          "Script breakdown and scheduling",
          "Casting, locations, and vendors",
          "Preproduction and postproduction supervision"
        ]
      },
      {
        categoria: "Communication & Management",
        items: [
          "Project management",
          "Multidisciplinary team coordination",
          "Client & agency relations",
          "Bilingual communication ES/EN (C1)",
          "Medical interpretation OPI & VRI",
          "Medical terminology",
          "Microsoft Office / Google Workspace"
        ]
      },
      {
        categoria: "Project Types",
        items: [
          "ATL, digital, and print advertising",
          "Corporate and institutional content",
          "Commercial photography",
          "Streaming and live coverage",
          "Product catalogs",
          "Workshops and health communication"
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
    about_title: "Organización, coordinación y ejecución",
    exp_label: "Experiencia",
    exp_title: "Trayectoria",
    filter_all: "Todos",
    filter_publicidad: "Publicidad",
    filter_corporativo: "Corporativo",
    filter_comunicacionsocial: "Comunicación Social",
    portfolio_label: "Portafolio",
    portfolio_title: "Proyectos",
    portfolio_subtitle: "Una selección de proyectos en los que he participado como Productora Ejecutiva y Coordinadora de Producción. Haz clic en cualquier proyecto para ver el video.",
    skills_label: "Habilidades",
    skills_title: "Herramientas<br><span class=\"font-script accent-circle\">&</span> Especialidades",
    skills_languages: "Idiomas",
    skills_education: "Educación",
    skills_certifications: "Certificaciones",
    annex_label: "Anexo",
    annex_title: "Intérprete Médica",
    annex_subtitle: "Además de su carrera en producción audiovisual, Ana Lucía cuenta con experiencia como intérprete médica para el sector salud de los Estados Unidos.",
    annex_group_title: "Competencias como intérprete",
    annex_btn_cv: "Descargar CV de Intérprete",
    annex_btn_cv_aria: "Descargar CV de intérprete en PDF",
    contact_label: "Contacto",
    contact_title: "Hablemos<span class=\"gradient-dot\" style=\"background: var(--gradient-1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;\">.</span>",
    contact_subtitle: "¿Tienes un proyecto en mente? Me encantaría ser parte de él.",
    contact_btn_cv: "Descargar CV",
    contact_btn_cv_aria: "Descargar CV en PDF",
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
    hero_role: "Audiovisual Producer",
    hero_tagline: "Over 15 years leading audiovisual production for Marca Perú, Movistar, BCP, Scotiabank, Yanbal, Hyundai, LG, and more. From brief to final delivery.",
    hero_btn_portfolio: "View Portfolio",
    hero_btn_cv: "View CV",
    about_label: "About me",
    about_title: "Production as a<br>craft <span class=\"font-script accent-circle\">and</span> vision.",
    exp_label: "Experience",
    exp_title: "Career",
    filter_all: "All",
    filter_publicidad: "Commercial",
    filter_documental: "Documentary",
    filter_corporativo: "Corporate",
    filter_musical: "Music Video",
    portfolio_label: "Portfolio",
    portfolio_title: "Projects",
    portfolio_subtitle: "A selection of works in advertising, documentary, corporate and more. Click on any project to watch the video.",
    skills_label: "Skills",
    skills_title: "Tools<br><span class=\"font-script accent-circle\">&</span> Specialties",
    skills_languages: "Languages",
    skills_education: "Education",
    skills_certifications: "Certifications",
    annex_label: "Annex",
    annex_title: "Interpreter <span class=\"accent\">&</span> Voice Actress",
    annex_subtitle: "In addition to her career in audiovisual production, Ana Lucía has training and experience as an interpreter, bringing a comprehensive perspective to the creative process from behind the camera.",
    annex_group_title: "Skills as an interpreter",
    annex_btn_cv: "Download Interpreter CV",
    annex_btn_cv_aria: "Download interpreter CV in PDF",
    contact_label: "Contact",
    contact_title: "Let's talk<span class=\"gradient-dot\" style=\"background: var(--gradient-1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;\">.</span>",
    contact_subtitle: "Have a project in mind? I would love to be part of it.",
    contact_btn_cv: "Download CV",
    contact_btn_cv_aria: "Download CV in PDF",
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
