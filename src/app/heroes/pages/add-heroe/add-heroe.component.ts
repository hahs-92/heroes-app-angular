import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styles: [],
})
export class AddHeroeComponent implements OnInit {
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

  heroe!: Heroe;

  constructor() {}

  ngOnInit(): void {}
}
