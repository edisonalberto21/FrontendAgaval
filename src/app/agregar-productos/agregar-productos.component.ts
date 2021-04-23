import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Productos } from '../models/productos';
import { ProductosService } from '../services/productos.service';



@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent implements OnInit {

  formularioCliente!: FormGroup;
  producto:Array<any> = new Array<any>();
  esEditable: boolean = false;
  id!: number;
  tituloFormulario:string = ''
  
 
  constructor(
    private fb: FormBuilder, 
    private activeRoute: ActivatedRoute,
    private ProductoInyectado:ProductosService,
    private Ruta:Router
    ) 
    { }

ngOnInit() {

   /* this.ProductoInyectado.leerProductos().subscribe((productos)=>{
        this.producto = productos   
    })*/
    
    this.id = this.activeRoute.snapshot.params.productoID;
    this.tituloFormulario = this.id ? "Editar Producto" : "Agregar Producto"
    if(this.id){
    this.formularioCliente = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      imgUrl: ['', Validators.required],
      descripcion: ['', Validators.required],
      id!:[]
     })
    }else{
      this.formularioCliente = this.fb.group({
        nombre: ['', Validators.required],
        precio: ['', Validators.required],
        stock: ['', Validators.required],
        imgUrl: ['', Validators.required],
        descripcion: ['', Validators.required],

      })
    }
    
   
    if(this.id != undefined){
      this.esEditable = true;
      this.ProductoInyectado.leerProductoIndividual(this.id).subscribe((product)=>{
      this.formularioCliente.setValue({
             nombre: product.nombre,
             precio : product.precio,
             stock : product.stock,
             imgUrl: product.imgUrl,
             descripcion: product.descripcion,
             id:product.id
            })
       })
    }
 }

 

agregar()
  {
    this.ProductoInyectado.guardarProductos(this.formularioCliente.value).subscribe((data)=>{
      Swal.fire({
        title: 'Agregado!',
        text: 'Se agrego Correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      this.formularioCliente.reset() 
    })
    
  }

  editar(){
    this.producto = this.formularioCliente.value 
    console.log(this.id)
    this.ProductoInyectado.actualizarProductos(this.formularioCliente.value).subscribe((data)=>{
      Swal.fire({
        title: 'Editado!',
        text: 'Se editó Correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      this.Ruta.navigateByUrl('/ver-productos')
      
    })

  }

}
