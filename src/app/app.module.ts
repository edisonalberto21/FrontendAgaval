import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenulateralComponent } from './menulateral/menulateral.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ProductosService } from './services/productos.service';
import { VerProductosComponent } from './ver-productos/ver-productos.component';
import { InformacionDetalladaComponent } from './informacion-detallada/informacion-detallada.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    MenulateralComponent,
    ProductosComponent,
    HomeComponent,
    AgregarProductosComponent,
    DetalleProductoComponent,
    VerProductosComponent,
    InformacionDetalladaComponent,
    GraficasComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
