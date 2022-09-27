import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public pokemons: any[] = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.httpService.getPokemon().subscribe((data: any) => this.pokemons = data.results);
  }

  showPokemon(nome: string, id: number) {

    const link = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + id + '.svg';

    // Pega a lista já cadastrada, se não houver vira um array vazio
    const pokemons = JSON.parse(localStorage.getItem('pokemons') || '[]');
    // console.log(pokemons);
    var errors = 0;
    pokemons.forEach((value) => {
      if (value.nome === nome) {
        console.log('igual');
        errors += 1;
      }
    });

    if (pokemons == '') {
      // Adiciona pokemon ao cadastro
      pokemons.push({
        nome: nome,
        link: link
      });

      // Adiciona no localstorage
      localStorage.setItem("pokemons", JSON.stringify(pokemons));
      window.location.href = '/tabs/tab2';
    } else {

      if (errors !== 0) {
        console.log('igual');
      } else {

        // Adiciona pokemon ao cadastro
        pokemons.push({
          nome: nome,
          link: link
        });

        // Adiciona no localstorage
        localStorage.setItem("pokemons", JSON.stringify(pokemons));
        window.location.href = '/tabs/tab2';
      }
    }
  }


}
