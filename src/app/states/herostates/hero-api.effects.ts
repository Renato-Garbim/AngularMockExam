import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { HeroService } from "src/app/services/hero.service";
import { getAllHeroes } from "./hero-api.actions";
import { enter } from "./hero-page-actions";

@Injectable()

export class HeroApiEffects {

constructor(private heroService: HeroService, private actions$: Actions){}

    loadHeroes$ = createEffect(() =>{
        
        return this.actions$.pipe(
            ofType(enter),
            mergeMap(() => {
                return this.heroService
                .getAll()
                .pipe(map((heroes) => getAllHeroes({heroes: heroes}) ))
            })

        )
        
    })

    

}