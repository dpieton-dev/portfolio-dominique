import { Injectable, signal } from '@angular/core';

type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Thème actif
  currentTheme = signal<Theme>('dark');

  constructor() {
    // Récupère le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme) {
      this.currentTheme.set(savedTheme);
    }

    // Applique le thème au chargement
    this.applyTheme();
  }

  // Change le thème
  toggleTheme() {
    const newTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';

    this.currentTheme.set(newTheme);
    localStorage.setItem('theme', newTheme);
    this.applyTheme();
  }

  // Applique une classe sur le body
  applyTheme() {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(`${this.currentTheme()}-theme`);
  }
}
