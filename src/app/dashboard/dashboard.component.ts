import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../Entidades/Hero';
import { HeroService } from '../services/hero.service';
import { enter } from '../states/herostates/hero-page-actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private store: Store) { }

  ngOnInit(): void {
    this.getHeroes();
    this.store.dispatch(enter());
    
  }


  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(x => this.heroes = x.slice(0, 4));
  }



}
