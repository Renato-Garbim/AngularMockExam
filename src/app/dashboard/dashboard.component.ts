import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../Entidades/Hero';
import { HeroService } from '../services/hero.service';
import { enter } from '../states/herostates/hero-page-actions';
import { selectAllHeroes } from '../states/herostates/hero.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private store: Store) { }

  ngOnInit(): void {    
    this.store.dispatch(enter());
    this.getHeroes();    
  }


  getHeroes(): void {
    
    let list = this.store.select(selectAllHeroes);
    list.subscribe(x => this.heroes = x.slice(0, 4));
        
  }



}
