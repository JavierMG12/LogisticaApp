import { Component } from '@angular/core';
import { HeaderComponentComponent } from "../header-component/header-component.component";
import * as AOS from 'aos';

@Component({
  selector: 'app-features-component',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './features-component.component.html',
  styleUrl: './features-component.component.css'
})
export class FeaturesComponentComponent {
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh);
}
  currentValue = "Feature"

}
