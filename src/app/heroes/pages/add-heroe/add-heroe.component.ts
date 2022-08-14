import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        max-heigth: 100px;
      }
    `,
  ],
})
export class AddHeroeComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
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
    publisher: Publisher.MarvelComics,
    alt_img: '',
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private route: Router,
    private heroeService: HeroesService
  ) {}

  ngOnInit(): void {
    if (this.route.url.includes('edit')) {
      this.activateRoute.paramMap
        .pipe(
          switchMap((params) => {
            const heroeId = params.get('id');
            return this.heroeService.getHeroeById(heroeId as string);
          })
        )
        .subscribe((heroe) => {
          console.log(heroe);
          this.heroe = heroe;
        });
    }
  }

  saveHeroe() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroeService
        .updateHeroe(this.heroe)
        .subscribe((heroe) => console.log('actualizando heroe.. ', heroe));
    } else {
      this.heroeService.saveHeroe(this.heroe).subscribe((heroe) => {
        this.route.navigate(['/heroes/edit', heroe.id]);
      });
    }
  }

  deleteHeroe() {
    console.log(this.heroe.id);
    this.heroeService.deleteHeroe(this.heroe.id!).subscribe(console.log);

    this.route.navigate(['/heroes']);
  }
}
