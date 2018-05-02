import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando_productos: boolean = true;

  constructor(private http: Http) {
    this.cargar_productos();

  }

  public cargar_producto(cod: string) {
    return this.http.get(`https://paginadigitalads.firebaseio.com/productos/${cod}.json`);
  }

  public cargar_productos() {
    this.cargando_productos = true;
    if (this.productos.length === 0) {
      this.http.get('https://paginadigitalads.firebaseio.com/productos_idx.json').
        subscribe(res => {
          // console.log(res.json());
          setTimeout(() => {
            this.cargando_productos = false;
            this.productos = res.json();

          }, 500);
        });
    }
  }
}
