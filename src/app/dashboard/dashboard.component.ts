import { Component, OnInit } from '@angular/core';
import { Hero } from '../Entidades/Hero';
import { HeroFacade } from '../states/herostates/hero.facade';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroFacade: HeroFacade) { }

  ngOnInit(): void {    
    this.heroFacade.startHeroCollection();
    this.getFirstFourHeroes();    

  }

  getFirstFourHeroes(): void {    
    let list = this.heroFacade.getAllRegisters();      
    list.subscribe(x => this.heroes = x.slice(0, 4));        
  }


}
