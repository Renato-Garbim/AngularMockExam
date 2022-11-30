import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../../Entidades/Hero';
import { UpdateHero } from '../../states/herostates/hero-page-actions';
import { selectAllHeroes } from '../../states/herostates/hero.state';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  hero: Hero | undefined;
  hero$!: Observable<Hero>;

  constructor( private route: ActivatedRoute, private store: Store) { 
    
  }

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    //this.location.);
  }

  save(): void {

    if(this.hero){
      
      this.store.dispatch(UpdateHero( {heroId: this.hero.id.toString(), changes: this.hero} ));
      
    }    
  }

  getHero(): void {

    let id = parseInt(this.route.snapshot.paramMap.get('id')!, 10); 

    let list = this.store.select(selectAllHeroes);
    list.subscribe(x => this.hero = x.find((hero) => { return hero.id === id}));
    
  }

}
