import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

//pages
import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';

@NgModule({
  declarations: [
    AddHeroeComponent,
    HeroeComponent,
    SearchComponent,
    HomeComponent,
    ListHeroesComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule, FlexLayoutModule],
})
export class HeroesModule {}
