import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../Entidades/Hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-heroiview',
  templateUrl: './heroiview.component.html',
  styleUrls: ['./heroiview.component.css']
})
export class HeroiviewComponent implements OnInit {

  listaHeroi: Array<Hero> = [];
  
  constructor(public heroService: HeroService, private route: ActivatedRoute,  private router: Router ) { }

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

  editar(hero: Hero): void{

    this.router.navigate(['/hero', hero.id]);    

  }
  


}
