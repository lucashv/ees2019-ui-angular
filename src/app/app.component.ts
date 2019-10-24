import { Component } from '@angular/core';
import { trigger, transition, query, style, animate } from '@angular/animations';

export const homeDefaultAnimation = trigger('homeDefaultAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.1s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.1s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);
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
