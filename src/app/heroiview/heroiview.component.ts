import { Component, OnInit } from '@angular/core';
import { Hero } from '../Entidades/Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroiview',
  templateUrl: './heroiview.component.html',
  styleUrls: ['./heroiview.component.css']
})
export class HeroiviewComponent implements OnInit {

  listaHeroi: Hero[] = [];
  
  constructor(public heroService: HeroService) { }

  ngOnInit(): void {

    this.getHeroes();

  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe( registros => this.listaHeroi = registros);
  }

  delete(hero: Hero): void {
    this.listaHeroi = this.listaHeroi.filter(h => h !== hero);

    this.heroService.excluirHeroi(hero).subscribe();
  }


}
