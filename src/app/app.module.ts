import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodelComponent } from './viewmodel/viewmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CopyrightComponent,
    ViewmodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
