import { NgModule } from '@angular/core';
import { ElectronStaterElectronCoreModule } from '@electron-stater/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, ElectronStaterElectronCoreModule],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
