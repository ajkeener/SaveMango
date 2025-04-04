import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule],
  template: `
<!-- Topbar -->
<div class="topbar container-fluid">
  <div class="row">
    <div class="col-2">
      <button id="menuToggle" class="btn">
      <i class="bi bi-list fs-3"></i>
        <!-- Menu -->
      </button>
    </div>
    <div class="col-10 text-center topbar-header">
    <p class="fs-3">April Budget</p>
    <p class="fs-5">04/01/25 - 04/30/25</p>
    </div>
  </div>
</div>
<!-- End of Topbar -->
  `,
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  
}
