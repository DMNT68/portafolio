import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { InformacionService } from '../../services/informacion.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent {

  producto: any = undefined;
  cod: string = undefined;
  anio: number = new Date().getFullYear();
  mes: number = new Date().getMonth();
  dia: number = new Date().getDay();
 
  constructor(private route: ActivatedRoute,
    private _ps: ProductosService,
    private _is: InformacionService) {

    route.params.subscribe(parametros => {
      // console.log(parametros);
     // console.log(parametros['id']);

      _ps.cargar_producto(parametros['id']).subscribe(
        res => {
          this.cod = parametros['id'];
          this.producto = res.json();
        //  console.log(this.producto);
        });
    });
  }
}
