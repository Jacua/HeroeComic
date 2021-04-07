import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `mat-card{
      margin-top:30px;
    }`
  ]
})
export class ListadoComponent implements OnInit {

  heroes: Hero [] = [];

  constructor(private readonly _heroeServi: HeroesService) { }

  ngOnInit(): void {

    this._heroeServi.getHeroesList()
    .subscribe(resp => this.heroes = resp);
  }



}
