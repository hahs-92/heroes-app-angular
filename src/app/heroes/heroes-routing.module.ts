import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//pages
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: ListHeroesComponent,
      },
      {
        path: 'add',
        component: AddHeroeComponent,
      },
      {
        path: 'edit/:id',
        component: AddHeroeComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },

      {
        path: ':id',
        component: HeroeComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
