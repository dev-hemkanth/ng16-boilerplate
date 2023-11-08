import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStoreService } from './services';
import { CustomItemPerPageComponent } from './components/custom-item-per-page/custom-item-per-page.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LocalStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
