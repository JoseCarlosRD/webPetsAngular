import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { EspecialesComponent } from './view/especiales/especiales.component';
import { EmpresaComponent } from './view/empresa/empresa.component';
import { ProductosComponent } from './view/productos/productos.component';
import { ContactoComponent } from './view/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EspecialesComponent,
    EmpresaComponent,
    ProductosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
