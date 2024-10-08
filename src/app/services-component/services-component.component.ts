import { Component } from '@angular/core';
import * as AOS from 'aos';
import { HeaderComponentComponent } from "../header-component/header-component.component";

@Component({
  selector: 'app-services-component',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './services-component.component.html',
  styleUrl: './services-component.component.css'
})
export class ServicesComponentComponent {
ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh);
}

currentValue = "Services";

}
