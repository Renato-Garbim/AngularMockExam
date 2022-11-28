import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Hero } from "src/app/Entidades/Hero";
import { enter } from "./hero-page-actions";
import { selectAllHeroes } from "./hero.state";

@Injectable({
        providedIn: 'root'
  })

  export class HeroFacade {

    constructor(private store: Store){};

    startHeroCollection(){
        return this.store.dispatch(enter());
    }

    getAllRegisters() : Observable<Array<Hero>> {
        return this.store.select(selectAllHeroes);         
    }

    

  }