import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh);
  }
}
