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
    title: "Visibility Dilemma",
    painPoint:
      "Your brand is drowning in the vast sea of social media, struggling to be seen by your target audience.",
    agitatepainPoint:
      "It's disheartening when your carefully crafted content goes unnoticed. Your potential customers are out there, but they simply can't find you amidst the digital noise.",
    solution:
      "Our targeted visibility strategies cut through the clutter, ensuring your brand is not just seen but remembered. Watch our video to see how we make your presence impossible to ignore.",
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
    question: "How can social media marketing benefit my business?",
    answer:
      "Social media marketing can significantly benefit your business by increasing brand awareness, engaging your target audience, driving website traffic, and generating leads. It also allows for direct interaction with your customers, fostering brand loyalty and providing valuable insights into consumer behavior.",
  },
  {
    question: "What sets your agency apart from others?",
    answer:
      "Our agency stands out through a combination of tailored strategies, data-driven decision-making, and a commitment to client collaboration. We prioritize understanding your unique business goals and offer personalized solutions that deliver measurable results.",
  },
  {
    question: "How do you measure the success of social media campaigns?",
    answer:
      "We employ a comprehensive approach to measure campaign success. This includes tracking key performance indicators (KPIs) such as engagement metrics, conversion rates, reach, and customer feedback. Our goal is to provide you with transparent and actionable insights into the effectiveness of your social media efforts.",
  },
  {
    question:
      "Can you give examples of your successful social media campaigns?",
    answer:
      "Certainly! We have a portfolio of successful campaigns across various industries. Check out our Case Studies to see how we've helped businesses like yours achieve their social media goals.",
  },
  {
    question: "Do you offer customized social media strategies?",
    answer:
      "Absolutely. Our team specializes in creating customized strategies tailored to your brand, industry, and target audience. We believe in the power of uniqueness, and our strategies reflect your specific goals and aspirations.",
  },
  {
    question: "How do you handle negative comments or reviews on social media?",
    answer:
      "We have a proactive approach to managing online reputation. Our social listening tools help us monitor brand mentions in real-time. In case of negative comments, we respond promptly with empathy and seek resolutions. We believe in turning challenges into opportunities for improvement.",
  },
  {
    question: "What social media platforms do you work with?",
    answer:
      "We work with a wide range of social media platforms, including but not limited to Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok. Our strategies are adaptable to the platforms most relevant to your target audience.",
  },
  {
    question:
      "How often will I receive reports on the performance of my social media campaigns?",
    answer:
      "We provide regular and detailed reports on the performance of your social media campaigns. The frequency of reporting can be customized based on your preferences, with options for weekly, bi-weekly, or monthly updates.",
  },
  {
    question:
      "Is there ongoing support if I have questions or need adjustments to my strategy?",
    answer:
      "Absolutely. We offer ongoing support to address any questions or concerns you may have. Our team is readily available to assist you and can make adjustments to your strategy as needed to ensure it aligns with your evolving business goals.",
  },
  {
    question:
      "Can I see a demo or get a consultation before deciding to work with your agency?",
    answer:
      "Certainly! We offer free consultations and personalized demos to showcase our approach, discuss your needs, and determine how we can best support your business. Contact us to schedule a consultation.",
  },
];

export { services, solutions, faqs };
