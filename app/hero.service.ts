import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	/* Première version sans promise
	getHeroes(): Hero[] {
		return HEROES;
	}
	*/

	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	// Méthode pour simuler un appel lent
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			// Simulate server latency with 2 second delay
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}
}