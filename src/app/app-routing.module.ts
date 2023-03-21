import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OtpPinComponent} from "./otp-pin/otp-pin.component";
import {TecladoVirtualComponent} from "./teclado-virtual/teclado-virtual.component";
import {PruebasComponent} from "./pruebas/pruebas.component";

const routes: Routes = [
  {path:"otp", component:OtpPinComponent},
  {path:"tecla", component:TecladoVirtualComponent},
  {path:"prueba", component:PruebasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
