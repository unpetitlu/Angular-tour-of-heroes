import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  // providers permet d'injecter des services
  providers: [HeroService],
  template: `
  	<h1>{{ title }}</h1>
  	<h2>Hero name : {{ hero.name }}</h2>
  	<div>
		<label>id: </label>
		{{ hero.id }}
  	</div>
  	<div>
		<label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
    <input [(ngModel)]="hero.id" placeholder="id">
  	</div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let h of heroes"
      [class.selected]="h === selectedHero"
      (click)="onSelect(h)">
        <span class="badge">{{ h.id }}</span> {{ h.name }}
      </li>
    </ul>
    <hr>
    <div *ngIf="selectedHero">
        <h2>{{ selectedHero.name }} details!</h2>
        <div>
            <label>id: </label>{{ selectedHero.id }}
        </div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="selectedHero.name" placeholder="name">
        </div>
    </div>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
})
/* PREMIER METHOD AU NIVEAU DU CONSTRUCTOR
export class AppComponent {
  title = 'Le voyage des héros';
  // hero est un objet de la class Hero
  hero: Hero = {
    id: 1,
    name: 'Spiderman'
  };
  // heroes est un tableau de Hero
  heroes: Hero[];
  selectedHero: Hero;

  // Le service heroService est injecté grâce au provider dans @Component
  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
*/

// Implementation de OnInit
export class AppComponent implements OnInit {
  title = 'Le voyage des héros';
  // hero est un objet de la class Hero
  hero: Hero = { id: 1, name: 'Spiderman'};
  // heroes est un tableau de Hero
  heroes: Hero[];
  selectedHero: Hero;

  // Le service heroService est injecté grâce au provider dans @Component
  // Il pourrat être utilisé comme propriété
  constructor(private heroService: HeroService) {
    //this.heroes = this.heroService.getHeroes();
  }

  //ngOnInit est une fonction qui se lance automatiquement grâce à l'implementations de OnInit
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}