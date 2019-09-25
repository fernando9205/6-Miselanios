import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app/components/home/home.component';
import { UsuarioComponent } from './app/components/usuario/usuario.component';
import { usuarioRoutes } from './app/components/usuario/usuario.route';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent ,
    children: usuarioRoutes
  },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes);
