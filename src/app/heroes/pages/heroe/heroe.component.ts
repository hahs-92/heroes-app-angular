import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//services
import { HeroesService } from '../../services/heroes.service';
//interfaces
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
    `,
  ],
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private heoresService: HeroesService
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap
      .pipe(
        switchMap((params) => {
          const heroeId = params.get('id') || '';
          return this.heoresService.getHeroeById(heroeId);
        })
      )
      .subscribe((heroe) => (this.heroe = heroe));
  }

  getBack() {
    this.router.navigate(['/heroes/list']);
  }
}
