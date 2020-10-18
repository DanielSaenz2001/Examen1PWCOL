import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './componente/personas/personas.component';
import { PeliculasComponent } from './componente/peliculas/peliculas.component';
import { PersonaIDComponent } from './componente/persona-id/persona-id.component';
import { PeliculaIDComponent } from './componente/pelicula-id/pelicula-id.component';


const routes: Routes = [
  { path: '', redirectTo: '/personas', pathMatch: 'full' },
  {
    path: 'personas',
    component: PersonasComponent
  },
  {
    path: 'persona/:id',
    component: PersonaIDComponent
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'pelicula/:id',
    component: PeliculaIDComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
