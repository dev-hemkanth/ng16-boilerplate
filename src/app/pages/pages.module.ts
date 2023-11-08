import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LayoutComponent, MobComponent, WebComponent, TableComponent } from 'src/app/components';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CustomPaginatorComponent } from '../components/custom-paginator/custom-paginator.component';
import { CustomItemPerPageComponent } from '../components/custom-item-per-page/custom-item-per-page.component';

@NgModule({
  declarations: [
    PagesComponent,
    LayoutComponent, 
    MobComponent, 
    WebComponent,
    TableComponent,
    CustomPaginatorComponent,
    CustomItemPerPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot()
  ]
})
export class PagesModule { }
