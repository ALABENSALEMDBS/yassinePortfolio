import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './landing-page/accueil/accueil.component';
import { ConsultingComponent } from './landing-page/consulting/consulting.component';
import { HomeComponent } from './landing-page/home/home.component';
import { MavaleurajouterComponent } from './landing-page/mavaleurajouter/mavaleurajouter.component';
import { MoncvComponent } from './landing-page/moncv/moncv.component';
import { OffresHomeComponent } from './landing-page/offres-home/offres-home.component';
import { PortfolioComponent } from './landing-page/portfolio/portfolio.component';
import { PourquoiCestUnAtoutComponent } from './landing-page/pourquoi-cest-un-atout/pourquoi-cest-un-atout.component';
import { QuiSuisJeComponent } from './landing-page/qui-suis-je/qui-suis-je.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { LoadingComponent } from './loading/loading.component';

export const routes: Routes = [
    {path:'', redirectTo:'accueil',pathMatch:'full'},//path initial par defaut
    {path:'accueil', component:AccueilComponent} ,
    {path:'home', component:HomeComponent} ,
    {path:'qui-suis-je', component:QuiSuisJeComponent} ,
    {path:'ma-valeur-ajouter', component:MavaleurajouterComponent} ,
    {path:'pourquoi-cest-un-atout', component:PourquoiCestUnAtoutComponent} ,
    {path:'services', component:ServicesComponent} ,
    {path:'consulting', component:ConsultingComponent} ,
    {path:'portolio', component:PortfolioComponent} ,
    {path:'moncv', component:MoncvComponent} ,
    {path:'offres-home', component:OffresHomeComponent} ,
    {path:'chatbot', component:ChatbotComponent} ,
    {path:'loading', component:LoadingComponent} ,

    {path:'footer', component:FooterComponent} ,
    {path:'contact', component:ContactComponent} ,



];
