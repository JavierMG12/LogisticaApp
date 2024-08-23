import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from "./home-component/home-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, RouterOutlet, HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LogisticaApp';
}
