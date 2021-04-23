import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-informacion-detallada',
  templateUrl: './informacion-detallada.component.html',
  styleUrls: ['./informacion-detallada.component.scss']
})
export class InformacionDetalladaComponent implements OnInit {

  producto:Array<any> = new Array<any>()
  constructor(private ProductoInyectado:ProductosService) { }

  ngOnInit(): void {
    this.ProductoInyectado.leerProductos().subscribe((productos)=>{
      this.producto = productos 
    })
  }


}
