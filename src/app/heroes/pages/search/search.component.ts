import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  query: string = '';
  heroes: Heroe[] = [];

  heroeSelected!: Heroe;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  searching() {
    this.heroesService
      .getHeroesBySuggestion(this.query.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      return;
    }
    const heroe: Heroe = event.option.value;
    this.query = heroe.superhero;

    //buscar heroe
    this.heroesService
      .getHeroeById(heroe.id!) //(!) confia en mi XD
      .subscribe((heroe) => (this.heroeSelected = heroe));
  }
}
