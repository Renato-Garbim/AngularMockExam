import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../Entidades/Hero';
import { BookService } from '../services/book.service';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private booksService: BookService, private store: Store) { }

  ngOnInit(): void {
    this.getHeroes();
    
  }


  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(x => this.heroes = x.slice(0, 4));
  }



}
