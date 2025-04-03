import {Component} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent],
  template: `
    <!-- Page Wrapper -->
  <div id="wrapper">
    <app-sidebar></app-sidebar>
  </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'savemango';
}
