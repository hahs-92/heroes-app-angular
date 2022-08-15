import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { of, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

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
    private heroeService: HeroesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
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
      this.heroeService.updateHeroe(this.heroe).subscribe((heroe) => {
        this.heroe = heroe;
        this.showSnackBar('Heroe Actualizado¡');
      });
    } else {
      this.heroeService.saveHeroe(this.heroe).subscribe((heroe) => {
        this.route.navigate(['/heroes/edit', heroe.id]);
        this.showSnackBar('Heroe creado¡');
      });
    }
  }

  deleteHeroe() {
    const dialog = this.dialog.open(ConfirmComponent, {
      data: { ...this.heroe },
      width: '300px',
    });

    dialog
      .afterClosed()
      .pipe(
        switchMap((resp) =>
          resp ? this.heroeService.deleteHeroe(this.heroe.id!) : of(false)
        )
      )
      .subscribe((resp) => {
        if (resp) this.route.navigate(['/heroes']);
      });
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Ok!', {
      duration: 2000,
    });
  }
}
