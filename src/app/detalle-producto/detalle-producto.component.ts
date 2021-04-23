import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/productos';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {
  producto : any = new Productos()
  constructor(private ProductoInyectado:ProductosService) { }



  ngOnInit(): void {
    this.producto = this.ProductoInyectado.producto
    console.log(this.producto)
  }

}
