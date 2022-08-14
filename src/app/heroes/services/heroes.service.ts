import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//env
import { environment } from '../../../environments/environment';
//interfaces
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById(heroeId: string) {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${heroeId}`);
  }
  getHeroesBySuggestion(query: string) {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }

  saveHeroe(heroe: Heroe) {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }

  updateHeroe(heroe: Heroe) {
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }
}
