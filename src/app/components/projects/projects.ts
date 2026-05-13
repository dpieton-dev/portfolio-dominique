import { Component } from '@angular/core';


interface Project {
  title: string;
  description: string;
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
  projects: Project[] = [
    {
      title: 'Task Manager API',
      description: 'REST API built with Symfony and Docker for task management.',
      technologies: ['Symfony', 'Docker', 'PostgreSQL'],
      color: 'bg-cyan-500',
    },
    {
      title: 'CRM Dashboard',
      description: 'Customer management dashboard built with Django and Angular.',
      technologies: ['Django', 'Angular', 'MySQL'],
      color: 'bg-purple-500',
    },
    {
      title: 'Developer Portfolio',
      description: 'Personal portfolio built with Angular and TailwindCSS.',
      technologies: ['Angular', 'TailwindCSS'],
      color: 'bg-green-500',
    },
  ];
}
