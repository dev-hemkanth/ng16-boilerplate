import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { LocalStoreService } from './services';
import { CDevices, CLocalStorageKeys } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  localStoreKeys = CLocalStorageKeys;
  
  constructor(private deviceService: DeviceDetectorService, private localStoreService: LocalStoreService) {
    // const isMobileDevice: boolean = this.deviceService.isMobile();
    // const device = isMobileDevice ? CDevices.mobile : CDevices.web;

    const device = CDevices.web
    this.localStoreService.setLocalStorage(this.localStoreKeys.deviceInfo, device)  
  }
}
