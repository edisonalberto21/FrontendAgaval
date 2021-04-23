import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from '../models/productos';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  producto:Array<any> = new Array<any>()
  constructor(private ProductoInyectado:ProductosService,private Ruta:Router) { }

  ngOnInit(): void {
    this.ProductoInyectado.leerProductos().subscribe((productos)=>{
      this.producto = productos   
  })
  }

  detalle(producto:Productos){
    this.ProductoInyectado.producto = producto
    this.Ruta.navigateByUrl('/detalle-productos')
  }

}
