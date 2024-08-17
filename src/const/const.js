

export const jobtimeline = [
  {
    title: "Full Stack Developer",
    corporation: "Fulltimeforce",
    date: "1.5 years",
    url: "https://www.fulltimeforce.com/",
  },
  {
    title: "Software Developer",
    corporation: "Quantico Trends",
    date: "1.5 years",
    url: "https://quantico.ai/",
  },
  {
    title: "Software Developer",
    corporation: "Imedia",
    date: "1 years",
    url: "https://www.imedia.pe/",
  },
  {
    title: "Backend Developer",
    corporation: "Crehana",
    date: "3 years",
    url: "https://www.crehana.com/",
  },
  {
    title: "Backend Developer",
    corporation: "Wordbox",
    date: "2.5 years",
    url: "https://play.google.com/store/apps/details?id=com.wordbox.ai",
  }
];
export const IconKeys = {
  python: "python",
  fastapi: "fastapi",
  django: "django",
  flask: "flask",
  postgresql: "postgresql",
  firebase: "firebase",
  mongodb: "mongodb",
  neo4j: "neo4j",
  rabbitmq: "rabbitmq",
  redis: "redis",
  selenium: "selenium",
  docker: "docker",
  kube: "kube",
  aws: "aws",
  gcp: "gcp",
  git: "git",
  github: "github",
  javaScript: "javaScript",
  typeScript: "typeScript",
  nodejs: "nodejs",
  astro: "astro",
  html: "html",
  css: "css",
  trello: "trello",
  jira: "jira",
  oauth: "oauth",
  travisci: "travisci",
  mysql: "mysql",
  // here add more icon keys
  pythonmini: "pythonmini",
  fastapimini: "fastapimini",
  djangomini: "djangomini",
  seleniummini: "seleniummini",
  awsmini: "awsmini",
  gcpmini: "gcpmini",
};


export const skills = [
  {
    title: "Python",
    icon: IconKeys.python,
  },
  {
    title: "FastAPI",
    icon: IconKeys.fastapi,
  },
  {
    title: "Django",
    icon: IconKeys.django,
  },
  {
    title: "Flask",
    icon: IconKeys.flask,
  },
  {
    title: "PostgreSQL",
    icon: IconKeys.postgresql,
  },
  {
    title: "Firebase",
    icon: IconKeys.firebase,
  },
  {
    title: "MySQL",
    icon: IconKeys.mysql,
  },
  {
    title: "MongoDB",
    icon: IconKeys.mongodb,
  },
  {
    title: "Neo4J",
    icon: IconKeys.neo4j,
  },
  {
    title: "RabbitMQ",
    icon: IconKeys.rabbitmq,
  },
  {
    title: "Redis",
    icon: IconKeys.redis,
  },
  {
    title: "Selenium",
    icon: IconKeys.selenium,
  },
  {
    title: "Docker",
    icon: IconKeys.docker,
  },
  {
    title: "Kubernetes",
    icon: IconKeys.kube,
  },
  {
    title: "AWS",
    icon: IconKeys.aws,
  },
  {
    title: "GCP",
    icon: IconKeys.gcp,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },
  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },
  {
    title: "NodeJS",
    icon: IconKeys.nodejs,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "HTML",
    icon: IconKeys.html,
  },
  {
    title: "CSS",
    icon: IconKeys.css,
  },
  {
    title: "Trello",
    icon: IconKeys.trello,
  },
  {
    title: "Jira",
    icon: IconKeys.jira,
  },
  {
    title: "OAuth",
    icon: IconKeys.oauth,
  },
  {
    title: "TravisCI",
    icon: IconKeys.travisci,
  },
  {
    title: "MySQL",
    icon: IconKeys.mysql,
  }
];


export const projects = [
  {
    img: "../../../img/google-login.webp",
    title: "Serverless Google Auth Login",
    link: "https://github.com/borismnq/serverless-google-auth-login",
    description: `Función lambda de AWS que utiliza usando Flask y OAuth para ejecutar y manejar la autenticación con cuentas de google.`,
    technologies: [
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.flask,
      },
      {
        icon: IconKeys.oauth,
      },
      {
        icon: IconKeys.aws,
      },
    ],
  },
  {
    img: "../../../img/recipes-management.webp",
    title: "Recipes management using Django admin",
    link: "https://github.com/borismnq/restful-django-api-tdd",
    description: `Backend API using RESTFUL Django rest framework and Test Driven Development`,
    technologies: [
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.django,
      },
      {
        icon: IconKeys.postgresql,
      },
      {
        icon: IconKeys.docker,
      },
      {
        icon: IconKeys.travisci,
      },
    ],
  },
  {
    img: "../../../img/rabbitmq.webp",
    title: "Consumer dockerizado básico de RabbitMQ en architecture de microservicio",
    link: "https://github.com/borismnq/python-microservice-rabbitmq",
    description: `Boilerplate de un consumidor como microservicio siguiendo los patrones de RabbitMQ`,
    technologies: [
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.rabbitmq,
      },
      {
        icon: IconKeys.docker,
      },
      {
        icon: IconKeys.mysql,
      }
    ],
  },
  {
    img: "../../../img/scraping-tools.webp",
    title: "Web scraping a páginas de contenido multimedia y redes sociales",
    link: "https://github.com/borismnq/scraping-tools",
    description: `Web Scraping de algunas redes sociales y multimedia`,
    technologies: [
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.django,
      },
      {
        icon: IconKeys.selenium,
      },
      {
        icon: IconKeys.postgresql,
      },
      {
        icon: IconKeys.docker,
      },
      {
        icon: IconKeys.travisci,
      },
    ],
  }
];
export const certifications = [
  {
    url: "https://platzi.com/p/borismnq/curso/1098-ingenieria/diploma/detalle/",
    description: "Fundamentos de Ingeniería de Software",
    icon: IconKeys.pythonmini,
  },
  {
    url: "https://platzi.com/p/borismnq/learning-path/8422-cloud-digital-leader/diploma/detalle/",
    description: "Certificación Cloud Digital Leader",
    icon: IconKeys.gcpmini,
  },
  {
    url: "https://platzi.com/p/borismnq/curso/2469-fundamentos-google/diploma/detalle/",
    description: "Curso de Introducción a Google Cloud Platform",
    icon: IconKeys.gcpmini,
  },
  {
    url: "https://www.udemy.com/certificate/UC-6f83275e-b731-4fd2-8231-11995df9d4e7/",
    description: "Curso maestro de Web Scraping: Extracción de Datos de la Web",
    icon: IconKeys.seleniummini,
  },
  {
    url: "https://www.udemy.com/certificate/UC-d6e6a502-42c2-4ce0-b276-133b69bcaa22/",
    description: "Backend REST API with Python & Django - Advanced ",
    icon: IconKeys.djangomini,
  },
  {
    url: "https://certificate.givemycertificate.com/c/c2f0e899-3e19-4c81-bd2b-321f8f3c68f4",
    description: "PyGeekle 22",
    icon: IconKeys.pythonmini,
  },
  {
    url: "https://platzi.com/p/borismnq/curso/1937-python/diploma/detalle/",
    description: "Curso Básico de Python",
    icon: IconKeys.pythonmini,
  },
  {
    url: "https://platzi.com/p/borismnq/curso/2255-python-intermedio/diploma/detalle/",
    description: "Curso de Python Intermedio: Comprehensions, Lambdas y Manejo de Errores",
    icon: IconKeys.pythonmini,
  },
  {
    url: "https://platzi.com/p/borismnq/curso/1775-algoritmos-python/diploma/detalle/",
    description: "Curso de Complejidad Algorítmica con Python",
    icon: IconKeys.pythonmini,
  },
  {
    url: "https://platzi.com/p/borismnq/curso/2514-fastapi-errores/diploma/detalle/",
    description: "Curso de FastAPI: Modularización, Datos y Errores",
    icon: IconKeys.fastapimini,
  },
  {
    url: "https://platzi.com/p/borismnq/curso/2513-fundamentos-fastapi/diploma/detalle/",
    description: "Curso de FastAPI: Fundamentos, Path Operations y Validaciones",
    icon: IconKeys.fastapimini,
  },
  {
    url: "https://platzi.com/p/borismnq/curso/2694-django/diploma/detalle/",
    description: "Curso Básico de Django",
    icon: IconKeys.djangomini,
  },
  {
    url: "https://platzi.com/p/borismnq/curso/2728-django-intermedio/diploma/detalle/",
    description: "Curso de Django Intermedio: Testing, Static Files, Django Admin",
    icon: IconKeys.djangomini,
  },
  {
    url: "https://platzi.com/p/borismnq/curso/8031-intro-nube/diploma/detalle/",
    description: "Curso de Introducción a la Nube",
    icon: IconKeys.awsmini,
  },
  
]