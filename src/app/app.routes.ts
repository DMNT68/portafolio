
import { RouterModule, Routes } from '@angular/router';
import {
    AboutComponent,
    PortafolioComponent,
    ItemsComponent,
    SearchComponent
} from './components/index.paginas';


const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'items/:id', component: ItemsComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
