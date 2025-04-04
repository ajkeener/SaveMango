import {Component} from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import {TopbarComponent} from './topbar/topbar.component';
import {ContentComponent} from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, TopbarComponent, ContentComponent],
  template: `
<div class="wrapper">
  <app-menu></app-menu>
  <app-topbar></app-topbar>
  <app-content></app-content>
</div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'savemango';
}
