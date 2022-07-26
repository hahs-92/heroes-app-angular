import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//interfaces
import { Heroe, Publisher } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  getHeroeById(heroeId: string) {
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${heroeId}`);
  }
}
