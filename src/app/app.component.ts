import { Component } from '@angular/core';
import { homeDefaultAnimation } from './utils/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    homeDefaultAnimation
  ]
})
export class AppComponent {
  title = 'Trabalho EES2019 - Java Web';
}
