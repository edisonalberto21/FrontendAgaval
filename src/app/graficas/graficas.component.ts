import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color,SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip  } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets,RadialChartOptions  } from 'chart.js';
import { ProductosService } from '../services/productos.service';




@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {

  producto:Array<any> = new Array<any>()
  nombres:Array<Label> = new Array<Label>()
  stock:Array<any> = new Array<any>()
  

  constructor(private ProductoInyectado:ProductosService,) { monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();}

  ngOnInit(): void {
    this.ProductoInyectado.leerProductos().subscribe((productos)=>{
      this.producto = productos
      this.nombre()
    })
   }
  nombre(){
    
    for (let index = 0; index < this.producto.length; index++) {
      const element = this.producto[index];
      this.stock.push(element.stock)
      this.nombres.push(element.nombre)
    }
  }

  //////////
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.nombres;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.stock, label: 'Existencias de Plantas' }
  ];
  //////////
  /////////////////
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = this.nombres;

  public radarChartData: ChartDataSets[] = [
    { data: this.stock, label: 'Existencia de Plantas' }
  ];
  public radarChartType: ChartType = 'radar';
  /////////////////

}
