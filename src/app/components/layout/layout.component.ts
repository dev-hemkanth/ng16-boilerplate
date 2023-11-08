import { Component } from '@angular/core';
import { CDevices, CLocalStorageKeys } from 'src/app/constants';
import { LocalStoreService } from 'src/app/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  userDevice: string = CDevices.mobile;
  localStoreKeys = CLocalStorageKeys;

  constructor(private localStoreService: LocalStoreService) {
    let device = this.localStoreService.getLocalStorage(this.localStoreKeys.deviceInfo);
    if (device) this.userDevice = device;
  }

  
}
