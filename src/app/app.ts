import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Array Project
  projects: Project[] = [
    {
      title: 'Task Manager API',

      description:
        'REST API built with Symfony and Docker for task management.',

      technologies: ['Symfony', 'Docker', 'PostgreSQL'],

      color: 'bg-cyan-500'
    },

    {
      title: 'CRM Dashboard',

      description:
        'Customer management dashboard built with Django and Angular.',

      technologies: ['Django', 'Angular', 'MySQL'],

      color: 'bg-purple-500'
    },

    {
      title: 'Developer Portfolio',

      description:
        'Personal portfolio built with Angular and TailwindCSS.',

      technologies: ['Angular', 'TailwindCSS'],

      color: 'bg-green-500'
    }

  ];
  // Langue active
  currentLang = 'en';

  // Objet contenant toutes les traductions
  translations: any = {

    en: {
      hello: "Hello 👋 I'm",
      title: 'PHP/Symfony & Python/Django Developer',
      description: 'Passionate backend developer focused on modern web applications, REST APIs, Docker and scalable architectures.',
      contact: 'Contact Me',
      projects: 'Featured Projects',
      stack: 'Tech Stack',
      about: 'About Me'
    },

    fr: {
      hello: 'Bonjour 👋 Je suis',
      title: 'Développeur PHP/Symfony & Python/Django',
      description: 'Développeur backend passionné par les applications web modernes, les API REST, Docker et les architectures scalables.',
      contact: 'Me contacter',
      projects: 'Projets',
      stack: 'Technologies',
      about: 'À propos'
    }
  };

  // Getter simplifié pour accéder facilement aux traductions
  get t() {
    return this.translations[this.currentLang];
  }

  // Fonction changement langue
  changeLang(lang: string) {
    this.currentLang = lang;
  }

}

// Interface représentant un projet
interface Project {

  // Nom du projet
  title: string;

  // Description du projet
  description: string;

  // Technologies utilisées
  technologies: string[];

  // Couleur du header
  color: string;

}
