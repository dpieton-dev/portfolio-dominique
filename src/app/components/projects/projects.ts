import { Component, inject} from '@angular/core';
import { LanguageService } from '../../services/language';

interface Project {
  title: string;
  descriptionEn: string;
  descriptionFr: string;
  technologies: string[];
  color: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})

export class Projects {
  langService = inject(LanguageService);
  
  projects: Project[] = [
    {
      title: 'Task Manager API',
      descriptionEn: 'REST API built with Symfony and Docker for task management.',
      descriptionFr: 'API REST construite avec Symfony et Docker pour la gestion de tâches.',
      technologies: ['Symfony', 'Docker', 'PostgreSQL'],
      color: 'bg-cyan-500',
    },
    {
      title: 'CRM Dashboard',
      descriptionEn: 'Customer management dashboard built with Django and Angular.',
      descriptionFr: 'Tableau de bord de gestion des clients conçu avec Django et Angular.',
      technologies: ['Django', 'Angular', 'MySQL'],
      color: 'bg-purple-500',
    },
    {
      title: 'Developer Portfolio',
      descriptionEn: 'Personal portfolio built with Angular and TailwindCSS.',
      descriptionFr: 'Portfolio personnel réalisé avec Angular et TailwindCSS.',
      technologies: ['Angular', 'TailwindCSS'],
      color: 'bg-green-500',
    },
  ];
}
