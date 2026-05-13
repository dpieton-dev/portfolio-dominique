import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  langService = inject(LanguageService);

  // Année actuelle automatique
  currentYear = new Date().getFullYear();
}
