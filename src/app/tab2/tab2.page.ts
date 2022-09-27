import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public pokemons: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pokemons = JSON.parse(localStorage.getItem('pokemons'));

  }

  removePokemon(id: number) {

    const pokemons = JSON.parse(localStorage.getItem('pokemons'));

    const teste = String(id -1);
    pokemons.splice(teste,1);

    localStorage.setItem("pokemons", JSON.stringify(pokemons));
    window.location.href = '/tabs/tab2';

  }




}

