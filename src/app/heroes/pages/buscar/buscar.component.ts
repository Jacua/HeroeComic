import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

 termino: string = ""
 heroes: Hero[] = [];
 heroeSeleccionado!: Hero | undefined;

 /**
  *
  */
 constructor(private readonly _heroeServi: HeroesService) {
   
 }

 ngOnInit(): void{

 }

 buscando(){

  this._heroeServi.getSugerencias(this.termino.trim())
  .subscribe(resp => this.heroes = resp);

 }

 opcionSeleccionada(evento: MatAutocompleteSelectedEvent){

  const heroe: Hero = evento.option.value;

  if(!evento.option.value){

    this.heroeSeleccionado = undefined;
    return

  }
  this.termino = heroe.superhero;

  this._heroeServi.getHeroById(heroe.id!)
  .subscribe(resp => this.heroeSeleccionado = resp);

  console.log(heroe);

 }
}
