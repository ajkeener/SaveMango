import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  template: `
<!-- Content -->
<div class="content container-fluid">
  <div class="row">
    <div class="col-12">
      <div class="progress">
        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <h4 class="text-center">50% Budget Spent</h4>
    </div>
  </div>
</div>
<!-- End Content -->
  `,
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  
}
