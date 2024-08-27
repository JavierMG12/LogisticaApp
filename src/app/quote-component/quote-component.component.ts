import { Component } from '@angular/core';
import { HeaderComponentComponent } from "../header-component/header-component.component";

@Component({
  selector: 'app-quote-component',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './quote-component.component.html',
  styleUrl: './quote-component.component.css'
})
export class QuoteComponentComponent {
currentValue = "Quote";
}
