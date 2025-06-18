import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-offres-home',
  imports: [CommonModule, NgFor],
  templateUrl: './offres-home.component.html',
  styleUrl: './offres-home.component.css',
  standalone:true

})
export class OffresHomeComponent {


  cards = [
    {
      id: 1,
      title: "Pour une Présence Visuelle Solide, Idéale pour les entrepreneurs et petites entreprises.",
      typecard:"Essentielle",
      prix: "550",
      color:"gris",
      services: [
        { id: 1, namegras: "Identité Visuelle de Base", name:"(Logo, palette de couleurs, typographie)" },
        { id: 2, namegras: "Design Social Media Starter", name:"(3 templates Instagram/Facebook)" },
        { id: 3, namegras: "Audit et conseils stratégiques", name:"" },
      ]
    },
    {
      id: 2,
      title: "un Branding Fort & Cohérent Parfait pour les startups et entreprises.",
      typecard:"Business",
      prix: "1 500",
      color:"yellow",
      services: [
        { id: 1, namegras: "Identité Visuelle Complète", name:"(Logo, charte graphique, guidelines)" },
        { id: 2, namegras: "UI/UX Design d’un Site Web ou App", name:"(Wireframes + UI Kit)" },
        { id: 3, namegras: "Pack Social Media", name:"(6 visuels optimisés pour engagement)" },
        { id: 4, namegras: "Vidéo & Motion Design Basique", name:" (Animation Logo + Post animé)" },
      ]
    },
    {
      id: 3,
      title: "Pour une Présence Digitale Premium Destinée aux marques et entreprises ambitieuses.",
      typecard:"Élite",
      prix: "2 500",
      color:"gris",
      services: [
        { id: 1, namegras: "Identité Visuelle Premium", name:"(Logo, branding, supports print & web)" },
        { id: 2, namegras: "UUI/UX Design Complet", name:" (Site Web ou Application sur-mesure)" },
        { id: 3, namegras: "Stratégie & Design Social Media", name:"(12 visuels + animation post et story)" },
        { id: 4, namegras: "Vidéo & Motion Design Pro", name:"(Vidéo promo, animations complexes)" },
        { id: 5, namegras: "Accompagnement & Consulting", name:"" },
      ]
    }
  ];

}
