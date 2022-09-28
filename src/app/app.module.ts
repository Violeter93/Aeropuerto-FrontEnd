import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AeropuertosComponent } from './components/aeropuertos/aeropuertos.component';
import { AeropuertoComponent } from './components/aeropuertos/aeropuerto/aeropuerto.component';
import { ListAeropuertoComponent } from './components/aeropuertos/list-aeropuerto/list-aeropuerto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AeropuertosComponent,
    AeropuertoComponent,
    ListAeropuertoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
