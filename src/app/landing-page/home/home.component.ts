import { NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuiSuisJeComponent } from "../qui-suis-je/qui-suis-je.component";
import { LanguageService } from '../../services/Language/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [NgFor, QuiSuisJeComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:true

})
export class HomeComponent implements OnInit, OnDestroy {

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




  logos = [
    { name: "Xicom", imagePath: "/images/xicom.png" },
    { name: "Taqeem", imagePath: "/images/taqeem.png" },
    { name: "Go Taxi", imagePath: "/images/gotaxi.png" },
    { name: "AXESS LOGISTIQUE", imagePath: "/images/axess.png" },
    { name: "Xicom", imagePath: "/images/xicom.png" },
    { name: "Taqeem", imagePath: "/images/taqeem.png" },
    { name: "Go Taxi", imagePath: "/images/gotaxi.png" },
    { name: "AXESS LOGISTIQUE", imagePath: "/images/axess.png" },
  ]


}
