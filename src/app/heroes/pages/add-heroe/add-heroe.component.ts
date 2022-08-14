import { Component } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styles: [],
})
export class AddHeroeComponent {
  publishers = [
    {
      id: 'CD Comics',
      desc: 'CD - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(private heroeService: HeroesService) {}

  saveHeroe() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    this.heroeService.saveHeroe(this.heroe).subscribe(console.log);
  }
}
