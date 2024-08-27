import { Routes } from '@angular/router';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TeamComponentComponent } from './team-component/team-component.component';
import { QuoteComponentComponent } from './quote-component/quote-component.component';
import { FeaturesComponentComponent } from './features-component/features-component.component';

export const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'home', component: HomeComponentComponent},
  {path: 'services', component: ServicesComponentComponent},
  {path: 'team', component: TeamComponentComponent},
  {path: 'quote', component: QuoteComponentComponent},
  {path: 'feature', component: FeaturesComponentComponent}
];
