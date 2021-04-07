import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  opcionesCreador = [
    {
      id: "Marvel Comics",
      desc: "Marvel-Comics"
    },
    {
      id: "DC Comics",
      desc: "DC-Comics"
    }
  ];

  heroe: Hero = {
    superhero:"",
    alter_ego: "",
    characters:"",
    first_appearance: "",
    publisher: Publisher.DCComics,
    alt_img: ""

  };

  constructor(private readonly _heroeServ: HeroesService) { }

  ngOnInit(): void {
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    this._heroeServ.agregarHeroe(this.heroe)
    .subscribe(resp => console.log(resp));
  }
}
