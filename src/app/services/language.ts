import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  // Signal Angular contenant la langue active
  currentLang = signal<'en' | 'fr'>('en');

  // Toutes les traductions du site
  translations = {

    en: {
      hello: "Hello 👋 I'm",
      title: 'PHP/Symfony & Python/Django Developer',
      description:
        'Passionate backend developer focused on modern web applications, REST APIs, Docker and scalable architectures.',

      about: 'About Me',
      aboutText1 : "I'm a passionate web developer specialized in backend technologies such as PHP, Symfony, Python and Django.",
      aboutText2 : "I enjoy building modern web applications, REST APIs, scalable architectures and containerized environments using Docker.",
      aboutText3 : "Currently focused on remote opportunities and continuous learning in fullstack and cloud technologies.",
      stack: 'Tech Stack',
      projects: 'Featured Projects',
      contact: 'Contact Me',
      yearsLearning: 'Years Learning',
      technologies: 'Technologies',
      personalProjects: 'Personal Projects',
      remoteReady: 'Remote Ready',
      home: 'Home',
      viewProject: 'View Project',
      email: 'Email',
      rights: 'All rights reserved',

      phpDesc: 'Backend development & APIs',
      symfonyDesc: 'Modern PHP framework',
      pythonDesc: 'Automation & backend',
      djangoDesc: 'Scalable web applications',
      angularDesc: 'Frontend SPA framework',
      dockerDesc: 'Containerized environments',
      mysqlDesc: 'Relational database',
      postgresDesc: 'Advanced SQL database'
    },

    fr: {
      hello: 'Bonjour 👋 Je suis',
      title: 'Développeur PHP/Symfony & Python/Django',
      description:
        'Développeur backend passionné par les applications web modernes, les API REST, Docker et les architectures scalables.',

      about: 'À propos',
      aboutText1 : 'Je suis un développeur web passionné, spécialisé dans les technologies backend, telles que PHP, Symfony, Python et Django.',
      aboutText2 : "J'aime concevoir des applications web modernes, des API REST, des architectures évolutives et des environnements conteneurisés avec Docker.",
      aboutText3 : "Actuellement, je me concentre sur les opportunités de travail à distance et la formation continue dans les technologies fullstack et cloud.",
      stack: 'Technologies',
      projects: 'Projets',
      contact: 'Me contacter',
      yearsLearning: "Années d'apprentissage",
      technologies: 'Technologies',
      personalProjects: 'Projets personnels',
      remoteReady: 'Prêt pour le remote',
      home: 'Accueil',
      viewProject: 'Voir le projet',
      email: 'Email',
      rights: 'Tous droits réservés',
      
      phpDesc: 'Développement backend & API',
      symfonyDesc: 'Framework PHP moderne',
      pythonDesc: 'Automatisation & backend',
      djangoDesc: 'Applications web scalables',
      angularDesc: 'Framework frontend SPA',
      dockerDesc: 'Environnements conteneurisés',
      mysqlDesc: 'Base de données relationnelle',
      postgresDesc: 'Base SQL avancée',
    },
  };

  // Retourne les traductions selon la langue active
  get t() {
    return this.translations[this.currentLang()];
  }

  // Change la langue active
  changeLang(lang: 'en' | 'fr') {
    this.currentLang.set(lang);
  }
}