import {Component} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {TopbarComponent} from './topbar/topbar.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, TopbarComponent],
  template: `
    <!-- Page Wrapper -->
  <div id="wrapper">
    <app-sidebar></app-sidebar>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <app-topbar></app-topbar>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'savemango';
}
