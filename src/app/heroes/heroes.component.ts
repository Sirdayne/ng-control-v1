import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[] = Heroes

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero
  }

  constructor() { }

  ngOnInit() {
  }

}
