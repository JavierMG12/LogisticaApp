import { Routes } from '@angular/router';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

export const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'home', component: HomeComponentComponent},
  {path: 'services', component: ServicesComponentComponent}
];
