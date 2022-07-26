import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

//materialModule
import { MaterialModule } from '../material/material.module';

//pages
import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { CardHeroeComponent } from './components/card-heroe/card-heroe.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    AddHeroeComponent,
    HeroeComponent,
    SearchComponent,
    HomeComponent,
    ListHeroesComponent,
    CardHeroeComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class HeroesModule {}
