import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { OffersComponent } from "../../offers/offers.component";
import { ConsultingComponent } from "../consulting/consulting.component";
import { HomeComponent } from "../home/home.component";
import { MavaleurajouterComponent } from "../mavaleurajouter/mavaleurajouter.component";
import { MoncvComponent } from "../moncv/moncv.component";
import { OffresHomeComponent } from "../offres-home/offres-home.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { PourquoiCestUnAtoutComponent } from "../pourquoi-cest-un-atout/pourquoi-cest-un-atout.component";
import { ServicesComponent } from "../services/services.component";
import { ChatbotComponent } from "../../chatbot/chatbot.component";
import { LoadingComponent } from "../../loading/loading.component";

@Component({
  selector: 'app-accueil',
  imports: [HomeComponent, MavaleurajouterComponent, NgIf, PourquoiCestUnAtoutComponent, OffersComponent, ServicesComponent, ConsultingComponent, PortfolioComponent, MoncvComponent, OffresHomeComponent, ChatbotComponent, LoadingComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  standalone:true

})
export class AccueilComponent {
  showScroll: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScroll = window.scrollY > 400; // Affiche le bouton après 200px de scroll
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
