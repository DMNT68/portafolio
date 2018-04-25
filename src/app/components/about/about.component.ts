import { InformacionService } from '../../services/informacion.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {

  constructor(public _is: InformacionService) { }

}
