import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/Language/language.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mavaleurajouter',
  imports: [NgIf],
  templateUrl: './mavaleurajouter.component.html',
  styleUrl: './mavaleurajouter.component.css',
  standalone:true

})
export class MavaleurajouterComponent {



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
