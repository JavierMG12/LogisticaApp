import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-services-component',
  standalone: true,
  imports: [],
  templateUrl: './services-component.component.html',
  styleUrl: './services-component.component.css'
})
export class ServicesComponentComponent {
ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh);
}
}
