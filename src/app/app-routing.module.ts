import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { GraficasComponent } from './graficas/graficas.component';
import { HomeComponent } from './home/home.component';
import { InformacionDetalladaComponent } from './informacion-detallada/informacion-detallada.component';
import { ProductosComponent } from './productos/productos.component';
import { VerProductosComponent } from './ver-productos/ver-productos.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'productos', component: ProductosComponent
  },
  {
    path: 'agregar-productos', component: AgregarProductosComponent
  },
  {
    path: 'agregar-productos/:productoID', component: AgregarProductosComponent
  },
  {
    path: 'detalle-productos', component: DetalleProductoComponent
  },
  {
    path: 'ver-productos', component: VerProductosComponent
  },
  {
    path: 'informacion-detallada', component: InformacionDetalladaComponent
  },
  {
    path: 'graficas', component: GraficasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
