import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Hero } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private readonly _httClient: HttpClient) { }

  getHeroesList(){

    return this._httClient.get<Hero[]>('http://localhost:3000/heroes');
  }

  getHeroById(id: string): Observable<Hero>{

    return  this._httClient.get<Hero>(`http://localhost:3000/heroes/${id}`);

  }

  getSugerencias (termino: string): Observable<Hero []>{

    return this._httClient.get<Hero[]>(`http://localhost:3000/heroes?q=${termino}&_limit=6`);
  }

  agregarHeroe(heroe: Hero): Observable<Hero>{

    return this._httClient.post<Hero>(`http://localhost:3000/heroes`,heroe);
  }
}

