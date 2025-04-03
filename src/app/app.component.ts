import {Component} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {TopbarComponent} from './topbar/topbar.component';
import {ContentComponent} from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, TopbarComponent, ContentComponent],
  template: `
    <!-- Page Wrapper -->
  <div id="wrapper">
    <app-sidebar></app-sidebar>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <app-topbar></app-topbar>
        <app-content></app-content>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'savemango';
}
