import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  // Injection du service traduction
  langService = inject(LanguageService);
  // Injection du service theme
  themeService = inject(ThemeService);

}
