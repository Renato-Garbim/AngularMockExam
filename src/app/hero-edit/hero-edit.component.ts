import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../Entidades/Hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  hero: Hero | undefined;
  hero$!: Observable<Hero>;

  constructor(    private route: ActivatedRoute, private heroService: HeroService) { 
    
  }

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    //this.location.);
  }

  save(): void {

    if(this.hero){
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    }    
  }

  getHero(): void {

    let id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);   

    // this.hero$ = this.route.paramMap.pipe(

    //   switchMap((params: ParamMap) => //switchMap garante que sempre a ultima request sera realizada, descartando as anteriores
    //     this.heroService.getHero(id)));

    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);

      console.log(this.hero);

  }

}
