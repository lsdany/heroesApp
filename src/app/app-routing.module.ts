import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroeComponent} from './components/heroes/heroe/heroe.component';
import {HeroesComponent} from './components/heroes/heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
