import { InformacionService } from '../../services/informacion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(public _is: InformacionService) {

  }

}
