import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSubject: BehaviorSubject<string>;
  public language$; // ✅ déclarée séparément

  constructor() {
    const storedLang = localStorage.getItem('lang') || 'fr';
    this.languageSubject = new BehaviorSubject<string>(storedLang);
    this.language$ = this.languageSubject.asObservable(); // ✅ ici après l'initialisation
  }


  setLanguage(lang: string): void {
    this.languageSubject.next(lang);
    localStorage.setItem('lang', lang);
    console.log('Langue définie :', lang);
  }

  getLanguage(): string {
    return this.languageSubject.value;
  }
}
