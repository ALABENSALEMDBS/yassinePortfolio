import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/Language/language.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-qui-suis-je',
  imports: [ NgIf],
  templateUrl: './qui-suis-je.component.html',
  styleUrl: './qui-suis-je.component.css',
  standalone:true

})
export class QuiSuisJeComponent implements OnInit, OnDestroy {
// Données du profil
profile = {
  name: "Yassine Ben Salem",
  title: "designer UI/UX, graphiste et créateur vidéo",
  location: "Tunisie",
  experience: "4 ans d'expérience",
  countries: ["Saudi Arabie", "France", "Portugal", "Tunisie"],
  quote: "Je transforme les idées en expériences visuelles engageantes",
  description:
    "Passionné par l'esthétique minimaliste et les expériences immersives, je conçois des interfaces modernes et des identités visuelles percutantes.",
  objective: "Créer des designs qui marquent et des expériences qui convertissent.",
}



 selectlan: string = '';
  private langSub!: Subscription;

  constructor(private serv: LanguageService) {}

  ngOnInit(): void {
    this.langSub = this.serv.language$.subscribe(lang => {
      this.selectlan = lang;
      console.log('Langue détectée :', this.selectlan);
    });
  }

  ngOnDestroy(): void {
    // Ne pas oublier de nettoyer l’abonnement
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }



}
