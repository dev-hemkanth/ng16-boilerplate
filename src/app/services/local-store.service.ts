import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  constructor() { }

  getLocalStorage(itemName: string) {
    let value = localStorage.getItem(itemName);
    return value ? atob(value) : null;
  }

  setLocalStorage(itemName: string, value: any) {
    if (itemName) {
      localStorage.setItem(itemName, btoa(value))
    }
  }

  removeItemOnLocalStorage(itemName: string) {
    if (itemName) {
      localStorage.removeItem(itemName)
    }
  }

  clearAllLocalStorage() {
    localStorage.clear();
  }
}
