import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent {

  constructor(private route: ActivatedRoute) {

    route.params.subscribe(parametros => {
      console.log(parametros);
      console.log(parametros['id']);
    });
  }


}
