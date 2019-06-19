import { Injectable } from '@angular/core';
import { Heroes } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
     return of(Heroes);
  }

  getHero(heroId: number): Observable<Hero> {
    const hero = Heroes.find(hero => hero.id === heroId)
    return of(hero);
 }
}
