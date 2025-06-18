import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [NgFor, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  standalone:true

})
export class PortfolioComponent implements OnInit {


  listprojets:any[]=[]


  projetes = [
    {
      id: 1,
      title: "Axess Logistique Identity - Branding - Guideline design",
      description: "If you're interested in similar projects or want to collaborate on creating a unique visual identity for your brand.",
      pathPhoto: "/images/paxess.png",
      typeProjet:"branding"
    },
    {
      id: 2,
      title: "Go Taxi® Identity - Branding Taxi logo application",
      description: "If you're interested in similar projects or want to collaborate on creating a unique visual identity for your brand.",
      pathPhoto: "/images/pgotaxi.png",
      typeProjet:"ui-ux-design"
    },
    {
      id: 3,
      title: "Social media post design & Gaza war media post",
      description: "Boost your brand's online presence with custom social media post design. To promote your products effectively.",
      pathPhoto: "/images/pgaza.png",
      typeProjet:"montage-video"
    },
    {
      id: 4,
      title: "Axess Logistique Identity - Branding - Guideline design",
      description: "If you're interested in similar projects or want to collaborate on creating a unique visual identity for your brand.",
      pathPhoto: "/images/paxess.png",
      typeProjet:"branding"
    },
    {
      id: 5,
      title: "Go Taxi® Identity - Branding Taxi logo application",
      description: "Boost your brand's online presence with custom social media post design. To promote your products effectively.",
      pathPhoto: "/images/pgotaxi.png",
      typeProjet:"ui-ux-design"
    },
    {
      id: 6,
      title: "Social media post design & Gaza war media post",
      description: "If you're interested in similar projects or want to collaborate on creating a unique visual identity for your brand.",
      pathPhoto: "/images/pgaza.png",
      typeProjet:"montage-video"
    },{
      id: 7,
      title: "Axess Logistique Identity - Branding - Guideline design",
      description: "If you're interested in similar projects or want to collaborate on creating a unique visual identity for your brand.",
      pathPhoto: "/images/paxess.png",
      typeProjet:"branding"
    },
    {
      id: 8,
      title: "Go Taxi® Identity - Branding Taxi logo application",
      description: "Boost your brand's online presence with custom social media post design. To promote your products effectively.",
      pathPhoto: "/images/pgotaxi.png",
      typeProjet:"motion-design"
    },
    {
      id: 9,
      title: "Social media post design & Gaza war media post",
      description: "If you're interested in similar projects or want to collaborate on creating a unique visual identity for your brand.",
      pathPhoto: "/images/pgaza.png",
      typeProjet:"motion-design"
    },

  ];


  activeButton: string = 'all-project';  // Variable pour suivre le bouton actif
  changeColor(buttonId: string): void {
    this.activeButton = buttonId;
  }

  ngOnInit(): void {
    this.listprojets=this.projetes;
  }

  partypeproject() {
    if (this.activeButton === 'all-project') {
      return this.listprojets;
    } else {
      return this.listprojets.filter(r =>
        r.typeProjet.toLowerCase().includes(this.activeButton.toLowerCase())
      );
    }
  }


}
