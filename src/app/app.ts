import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { TechStack } from './components/tech-stack/tech-stack';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, TechStack, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
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
