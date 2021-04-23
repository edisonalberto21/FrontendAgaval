import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

producto!:Productos 


  constructor(private http:HttpClient) {
    
   }

  leerProductos():Observable<Productos[]>
  {
   return this.http.get<Productos[]>("https://api120210422152517.azurewebsites.net/api/productos")
  }

  leerProductoIndividual(id:number):Observable<any>
  {
   return this.http.get<any>("https://api120210422152517.azurewebsites.net/api/productos/"+id)
  }

  guardarProductos(producto:any):Observable<any>
  {
    return this.http.post<any>("https://api120210422152517.azurewebsites.net/api/productos/",producto)
  }

  actualizarProductos(producto:any):Observable<any>
  {
    return this.http.put<any>("https://api120210422152517.azurewebsites.net/api/productos/"+producto.id,producto)
  }

  eliminarProductos(id:number):Observable<any>
  {
   return this.http.delete<any>("https://api120210422152517.azurewebsites.net/api/productos/"+id)
  }
}
