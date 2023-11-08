import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mob',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.scss']
})
export class MobComponent {
  navMenu: any[] = [
    {
      icon: 'bi bi-columns-gap',
      label: 'Dashboard',
    },
    {
      icon: 'bi bi-building',
      label: 'Organizations'
    },
    {
      icon: 'bi bi-houses',
      label: 'Renters'
    },
    {
      icon: 'bi bi-people',
      label: 'Guests'
    }
  ]


}
