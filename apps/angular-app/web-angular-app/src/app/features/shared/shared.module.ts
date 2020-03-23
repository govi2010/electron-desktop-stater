import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@electron-stater/web';

@NgModule({
  imports: [UIModule],
  exports: [UIModule]
})
export class SharedModule {}
