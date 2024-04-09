import { Routes } from '@angular/router';
import {HomeComponent} from "./Pages/home/home.component";
import {FaqComponent} from "./Pages/faq/faq.component";
import {ClientCalendarComponent} from "./Pages/client-calendar/client-calendar.component";
import {ClientListComponent} from "./Pages/client-list/client-list.component";
import {ContactoComponent} from "./Pages/contacto/contacto.component";
import {NutritionistCalendarComponent} from "./Pages/nutritionist-calendar/nutritionist-calendar.component";
import {NutritionistListComponent} from "./Pages/nutritionist-list/nutritionist-list.component";
import {OtrosenlacesComponent} from "./Pages/otrosenlaces/otrosenlaces.component";
import {SobrenosotrosComponent} from "./Pages/sobrenosotros/sobrenosotros.component";
import {TerminosComponent} from "./Pages/terminos/terminos.component";

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about-us', component: SobrenosotrosComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'otros-enlaces', component: OtrosenlacesComponent },
  { path: 'nutrional-list', component: NutritionistListComponent },
  { path: 'nutritional-calendar', component: NutritionistCalendarComponent },
  { path: 'client-calendar', component: ClientCalendarComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'terms', component: TerminosComponent },
  { path: '**', component: HomeComponent },

];
