import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@electron-stater/web';

@Component({
  selector: 'electron-stater-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
