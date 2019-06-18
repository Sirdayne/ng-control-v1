import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService, private messagesService: MessagesService) { }

  ngOnInit() {
    this.getHeroes()
  }

  onSelectHero(hero: Hero): void {
    this.messagesService.addMessage('Clicked Hero!');
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.messagesService.addMessage('Heroes Fetched!');
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
