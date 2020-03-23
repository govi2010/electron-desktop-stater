import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@electron-stater/utils';
import { ElectronService } from './services';

@NgModule({
  providers: [ElectronService]
})
export class ElectronStaterElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ElectronStaterElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'ElectronStaterElectronCoreModule');
  }
}
