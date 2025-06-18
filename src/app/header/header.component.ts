import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../services/Language/language.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, /*RouterLinkActive,RouterLink*/],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone:true

})
export class HeaderComponent implements OnInit{

  constructor(private serv:LanguageService){}



  languages = [
    { code: 'fr', label: 'FR', flag: '/images/fr.png' },
    { code: 'en', label: 'EN', flag: '/images/an.png' }
  ];

  selectedLanguage  = this.languages[0];
  showDropdown = false;


  ngOnInit(): void {
    console.log(this.selectedLanguage)
    // this.serv.language$.subscribe(lang => {
    //   this.selectedLanguage = lang;
    // });

    const current = this.serv.getLanguage();
    const found = this.languages.find(lang => lang.code === current);
    if (found) {
      this.selectedLanguage = found;
    }

  }

  selectLanguage(lang: any): void {
    this.selectedLanguage = lang;
    this.serv.setLanguage(lang.code);
    this.showDropdown = true;
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }






  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }








  isNavbarHidden = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      // Scroll vers le bas
      this.isNavbarHidden = true;
    } else {
      // Scroll vers le haut
      this.isNavbarHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
