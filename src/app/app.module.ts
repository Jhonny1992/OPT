import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpPinComponent } from './otp-pin/otp-pin.component';
import {FormsModule} from "@angular/forms";
import { TecladoVirtualComponent } from './teclado-virtual/teclado-virtual.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PruebasComponent } from './pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpPinComponent,
    TecladoVirtualComponent,
    PruebasComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
      FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
