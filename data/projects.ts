export const projects = [
    {
    id: 0,
    slug: "threathunter-lab",
    title: "ThreatHunter Lab",
    description: "Honeypot SSH pour la capture et l'analyse d'attaques réelles",
    longDescription:
      "Déploiement d'un honeypot SSH Cowrie sur une instance AWS EC2 Ubuntu (Free Tier, région Stockholm) pour capturer des attaques réelles provenant d'Internet. " +
      "L'accès administratif est sécurisé sur le port 2222 avec authentification par clé SSH uniquement et protection Fail2ban. " +
      "Le honeypot collecte automatiquement les tentatives d'intrusion 24/7. " +
      "Un script Python (parser.py) analyse les logs JSON rapatriés : détection des sessions externes, extraction des tentatives de login et des commandes exécutées par les attaquants. " +
      "Première attaque détectée : un scanner automatisé extérieur testant le port 22. " +
      "Le projet démontre la capacité à déployer une infrastructure sécurisée, à mettre en place un système de détection d'intrusion, et à analyser des données de sécurité avec du code Python.",
    stack: ["Python", "AWS EC2", "Cowrie Honeypot", "Fail2ban", "Ubuntu Linux", "JSON", "SSH"],
    role: "Développeur & Architecte — Solo",
    github: "https://github.com/ThomasWEBDEV/threathunter-lab",
    demo: "",  // Pas de demo en ligne (infrastructure active)
    image: "/images/threathunter.jpg"
  },
  {
    id: 1,
    slug: "app-marketplace",
    title: "Marketplace App",
    description: "Application de marketplace avec système de paiement intégré",
    longDescription: "Plateforme complète de marketplace permettant aux utilisateurs d'acheter et vendre des produits avec système de paiement Stripe intégré.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    role: "Développeur Full-stack",
    github: "https://github.com/thomasferet/marketplace",
    demo: "https://marketplace-demo.vercel.app",
    image: "/images/project1.jpg"
  },
  {
    id: 2,
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Tableau de bord avec visualisation de données en temps réel",
    longDescription: "Dashboard interactif pour visualiser et analyser des données business avec graphiques dynamiques et exports.",
    stack: ["React", "D3.js", "Node.js", "MongoDB"],
    role: "Développeur Frontend",
    github: "https://github.com/thomasferet/dashboard",
    demo: "https://dashboard-demo.vercel.app",
    image: "/images/project2.jpg"
  },
  {
    id: 3,
    slug: "api-rest",
    title: "API REST",
    description: "API REST complète avec authentification JWT",
    longDescription: "API REST sécurisée avec système d'authentification JWT, validation des données et documentation Swagger.",
    stack: ["Ruby on Rails", "PostgreSQL", "JWT", "Swagger"],
    role: "Développeur Backend",
    github: "https://github.com/thomasferet/api-rest",
    demo: "https://api-documentation.com",
    image: "/images/project3.jpg"
  },
  {
    id: 4,
    slug: "app-mobile",
    title: "App Mobile E-commerce",
    description: "Application mobile cross-platform pour e-commerce",
    longDescription: "Application mobile React Native avec panier, favoris, notifications push et paiement intégré pour boutique en ligne.",
    stack: ["React Native", "Redux", "Firebase", "Stripe"],
    role: "Développeur Mobile",
    github: "https://github.com/thomasferet/mobile-app",
    demo: "https://app-store-link.com",
    image: "/images/project4.jpg"
  },
  {
    id: 5,
    slug: "chatbot-ia",
    title: "Chatbot IA Support",
    description: "Chatbot intelligent pour support client automatisé",
    longDescription: "Chatbot utilisant l'IA pour répondre automatiquement aux questions clients avec intégration CRM et analytics.",
    stack: ["Python", "OpenAI API", "FastAPI", "Redis"],
    role: "Développeur IA/Backend",
    github: "https://github.com/thomasferet/chatbot",
    demo: "https://chatbot-demo.vercel.app",
    image: "/images/project5.jpg"
  }
];
