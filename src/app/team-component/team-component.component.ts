import { Component } from '@angular/core';
import * as AOS from 'aos';
import { HeaderComponentComponent } from "../header-component/header-component.component";

@Component({
  selector: 'app-team-component',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './team-component.component.html',
  styleUrl: './team-component.component.css'
})
export class TeamComponentComponent {
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh);
}

currentValue = "Team";
}
