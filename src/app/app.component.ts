import { Component } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private spinnerService: Ng4LoadingSpinnerService) {}
  show() {
    this.spinnerService.show();
    setTimeout(() => this.spinnerService.hide(), 3000);
  }
}
