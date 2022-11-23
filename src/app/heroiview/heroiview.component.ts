import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Hero } from '../Entidades/Hero';
import { HeroService } from '../services/hero.service';
import { enter } from '../states/herostates/hero-page-actions';
import { selectAllHeroes } from '../states/herostates/hero.state';


@Component({
  selector: 'app-heroiview',
  templateUrl: './heroiview.component.html',
  styleUrls: ['./heroiview.component.css']
})
export class HeroiviewComponent implements OnInit {

  constructor(public heroService: HeroService, private route: ActivatedRoute,  private router: Router, private store: Store ) { }

  listaHeroi = this.store.select(selectAllHeroes);
  
  ngOnInit(): void {

    this.store.dispatch(enter());

  }


  editar(hero: Hero): void{

    this.router.navigate(['/hero', hero.id]);    

  }
  


}
