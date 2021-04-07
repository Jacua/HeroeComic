import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interfaces';
import { switchMap, tap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `img{
      width:100%;
      border-radios: 10px;
    }`
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Hero;

  constructor(
    private readonly _activaRoute: ActivatedRoute, 
    private readonly _heroSer: HeroesService,
    private readonly _route: Router ) { }

  ngOnInit(): void {

    this._activaRoute.params
    .pipe(
      switchMap(({id}) => this._heroSer.getHeroById(id)),
      tap(console.log)
    )
    .subscribe(resp => {
      this.heroe = resp
    });

  }

  regresar(){
    this._route.navigate(['/heroes/listado']);
  }

}
