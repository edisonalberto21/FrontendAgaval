import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.scss']
})
export class VerProductosComponent implements OnInit {

  producto:Array<any> = new Array<any>()
  constructor(private ProductoInyectado:ProductosService,private Ruta:Router) { }

  ngOnInit(): void {
    this.ProductoInyectado.leerProductos().subscribe((productos)=>{
      this.producto = productos   
  })
  }

  eliminar(id:number){
      this.ProductoInyectado.eliminarProductos(id).subscribe((data)=>{
        Swal.fire({
          title: 'Eliminado!',
          text: 'Se eliminó Correctamente',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        this.Ruta.navigateByUrl('/productos')
      })
  }

}
