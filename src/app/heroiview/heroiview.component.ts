import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../Entidades/Hero';
import { HeroFacade } from '../states/herostates/hero.facade';


@Component({
  selector: 'app-heroiview',
  templateUrl: './heroiview.component.html',
  styleUrls: ['./heroiview.component.css']
})
export class HeroiviewComponent implements OnInit {

  constructor(private route: ActivatedRoute,  private router: Router, private heroFacade: HeroFacade ) { }

  listaHeroi =  this.heroFacade.getAllRegisters();  
  
  ngOnInit(): void {

    this.heroFacade.startHeroCollection();    

  }


  editar(hero: Hero): void{

    this.router.navigate(['/hero', hero.id]);    

  }
  


}
