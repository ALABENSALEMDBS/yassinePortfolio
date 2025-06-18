import { NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/Language/language.service';

@Component({
  selector: 'app-pourquoi-cest-un-atout',
  imports: [NgIf],
  templateUrl: './pourquoi-cest-un-atout.component.html',
  styleUrl: './pourquoi-cest-un-atout.component.css',
  standalone:true

})
export class PourquoiCestUnAtoutComponent implements AfterViewInit {






      constructor(private serv: LanguageService, private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.checkVisibility();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  // checkVisibility() {
  //   const component = this.el.nativeElement.querySelector('.fade-in-on-scroll');
  //   const rect = component.getBoundingClientRect();
  //   const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
  //   if (isVisible) {
  //     this.renderer.addClass(component, 'visible');
  //   }
  // }

  // checkVisibility() {
  //   const component = this.el.nativeElement.querySelector('.fade-in-on-scroll');
  //   const rect = component.getBoundingClientRect();
  //   const viewportMiddle = window.innerHeight / 2;
  //   const elementMiddle = rect.top + rect.height / 2;

  //   const isVisible = elementMiddle >= viewportMiddle - 50 && elementMiddle <= viewportMiddle + 50;

  //   if (isVisible) {
  //     this.renderer.addClass(component, 'visible');
  //   }
  // }

  checkVisibility() {
    const component = this.el.nativeElement.querySelector('.fade-in-on-scroll');
    const rect = component.getBoundingClientRect();

    // Déclenchement après apparition de 2cm (≈75px)
    const triggerOffset = 75;

    const isVisible = rect.top <= window.innerHeight - triggerOffset;

    if (isVisible) {
      this.renderer.addClass(component, 'visible');
    }
  }




  selectlan: string = '';
  private langSub!: Subscription;

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
