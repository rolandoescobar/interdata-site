import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";

const services = [
  {
    title: "Asesorías en Seguridad de la Información (ISO 27001)",
    features: [
      "Diseño de políticas y procedimientos a la medida",
      "Implementación de controles alineados a ISO 27001",
      "Preparación para auditorías y certificaciones"
    ],
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"w-6 h-6\"><path d=\"M12 2L2 7v6c0 5.25 3.75 10 10 10s10-4.75 10-10V7l-10-5z\"/></svg>`
  },
  {
    title: "Evaluaciones GAP (ISO 27001 / 22301)",
    features: [
      "Diagnóstico de cumplimiento y madurez",
      "Identificación de brechas y plan de acción",
      "Orientación para certificación y continuidad"
    ],
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"w-6 h-6\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></svg>`
  },
  {
    title: "CISO as a Service",
    features: [
      "Definición de estrategia de ciberseguridad alineada al negocio",
      "Gestión de riesgos y planes de mitigación",
      "Gobierno corporativo de la seguridad (reportes, métricas, comités)",
      "Programas de capacitación y concientización en seguridad"
    ],
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"w-6 h-6\"><path d=\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z\"/><path d=\"M6 20v-2c0-2.21 3.58-4 6-4s6 1.79 6 4v2\"/></svg>`
  }
];

const solutions = [
  {
    title: "Modelo de Servicios por Bolsas de Horas",
    painPoint:
      "Conscientes de la necesidad de flexibilidad, ofrecemos un esquema de bolsas de horas mensuales.",
    agitatepainPoint:
      "Este modelo permite acceder a nuestros especialistas en la medida justa que su negocio lo requiera, evitando costos fijos de personal y ajustándose a la dinámica de cada organización.",
    solution:
      "Ventajas para su empresa: 1) Flexibilidad: uso de horas en soporte, auditorías, gestión de incidentes o asesoría estratégica. 2) Control de costos: tarifas preferenciales y previsibilidad presupuestaria. 3) Disponibilidad inmediata: acceso a expertos cuando los necesite. 4) Transparencia: reportes claros y mensuales del consumo de horas.",
    img: visibilityDilemma,
  },
  {
    title: "Engagement Gap",
    painPoint:
      "Despite your efforts, audience engagement remains lackluster, and interactions are not translating into meaningful connections.",
    agitatepainPoint:
      "It's frustrating to see competitors effortlessly engaging their audience while your brand struggles to spark conversations. Your content deserves better results, and we have the solution.",
    solution:
      "Our proven engagement tactics ignite conversations, turning passive viewers into active participants. Explore how we bridge the engagement gap in our video walkthrough.",
    img: engagementGap,
  },
  {
    title: "Results in Hibernation",
    painPoint:
      "Your social media efforts aren't translating into tangible results, leaving you wondering if your investment is paying off.",
    agitatepainPoint:
      "It's disheartening when the metrics show little growth or impact. Your time and resources are valuable, and it's time to break free from the cycle of stagnant results.",
    solution:
      "Our data-driven approach ensures every action is purposeful, yielding measurable results. Dive into our video guide to witness how we turn social media activities into a powerful engine for your brand's success.",
    img: resultsInHibernation,
  },
];

const faqs = [
  {
    question: "¿Qué incluye exactamente el servicio de CISO as a Service?",
    answer:
      "Gobierno de ciberseguridad, definición de estrategia y políticas, gestión de riesgos, planificación (plan de acción), métricas/KRIs-KPIs y reportes ejecutivos. Operamos fraccionalmente, alineados a tus comités y prioridades."
  },
  {
    question: "¿Cuánto tarda implementar un SGSI ISO/IEC 27001:2022?",
    answer:
      "Depende del alcance y madurez inicial. Como referencia, proyectos típicos toman entre 12 y 20 semanas en sprints quincenales, desde el contexto y análisis de riesgos hasta SoA, evidencias y preparación de auditoría."
  },
  {
    question: "¿Qué es el SoA y por qué es importante?",
    answer:
      "La Declaración de Aplicabilidad (SoA) lista los controles seleccionados del Anexo A, su aplicabilidad y justificación. Es clave para demostrar el tratamiento de riesgos y la trazabilidad del SGSI ante auditorías."
  },
  {
    question: "¿Cómo realizan la Auditoría combinada ISO 27001 + ISO 9001?",
    answer:
      "Integramos el plan de auditoría interna para ambos sistemas, reducimos interrupciones y entregamos un informe único con hallazgos priorizados y plan de acciones correctivas coordinado."
  },
  {
    question: "NIST CSF 2.0: ¿qué entregan en el Gap & Plan de Acción?",
    answer:
      "Evaluamos madurez en las funciones Govern, Identify, Protect, Detect, Respond y Recover; priorizamos brechas por riesgo/impacto y definimos un plan de acción con hitos trimestrales, responsables y métricas."
  },
  {
    question: "BIA & Continuidad (ISO 22301): ¿qué resultados obtendré?",
    answer:
      "RTO/RPO por proceso/servicio, análisis de dependencias y terceros, estrategias de continuidad y planes BCP/DRP listos para ejercitar, además de lecciones aprendidas para mejora continua."
  },
  {
    question: "¿Cómo abordan el cumplimiento con la Ley 21.663 (Chile)?",
    answer:
      "Realizamos un gap regulatorio-operativo, definimos roles y responsabilidades, flujos de notificación de incidentes, controles mínimos y evidencias. Entregamos una matriz de cumplimiento y un plan de adecuación."
  },
  {
    question: "¿Pueden crear tableros GRC en Power BI conectados a mis datos?",
    answer:
      "Sí. Modelamos datos en esquema de estrella, definimos KPIs/KRIs, conectamos a fuentes (por ejemplo, MySQL/CSV/Excel/InterAudit) y publicamos con gobierno de acceso. Incluimos guía de uso y adopción."
  },
  {
    question: "¿Trabajan la seguridad en la nube (ISO 27017/27018)?",
    answer:
      "Mapeamos controles para servicios cloud, configuraciones seguras, gobierno y protección de PII en la nube (27018). Integramos riesgos de terceros y cláusulas contractuales."
  },
  {
    question: "¿Cómo gestionan riesgos de proveedores y terceros?",
    answer:
      "Evaluamos criticidad, riesgos y controles esperados, cláusulas de seguridad y monitoreo continuo. Mantenemos trazabilidad de evidencias y de planes de mitigación."
  },
  {
    question: "¿Incluyen formación y concientización?",
    answer:
      "Sí. Programas ejecutivos y técnicos, campañas de awareness y medición de adopción. Adaptamos contenidos a roles y procesos clave."
  },
  {
    question: "¿Qué modalidad de trabajo ofrecen y cómo se cotiza?",
    answer:
      "Proyectos cerrados por alcance, bolsas de horas o CISOaaS mensual. La propuesta detalla entregables, cronograma, plan de acción y responsabilidades."
  },
  {
    question: "¿Cómo resguardan la confidencialidad y datos sensibles?",
    answer:
      "Firmamos acuerdos de confidencialidad (NDA), definimos accesos mínimos necesarios, registramos evidencias de forma segura y realizamos auditorías internas periódicas."
  },
];

export { services, solutions, faqs };
