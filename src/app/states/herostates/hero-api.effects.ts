import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, exhaustMap, map, mergeMap } from "rxjs";
import { HeroService } from "src/app/services/hero.service";
import { CreateHeroAPI, DeleteHeroAPI, getAllHeroes, UpdateHeroAPI } from "./hero-api.actions";
import { CreateHero, DeleteHero, enter, UpdateHero } from "./hero-page-actions";

@Injectable()

export class HeroApiEffects {

constructor(private heroService: HeroService, private actions$: Actions){}

    loadHeroes$ = createEffect(() =>{
        
        return this.actions$.pipe(
            ofType(enter),
            exhaustMap(() => {
                return this.heroService
                .getAll()
                .pipe(map((heroes) => getAllHeroes({heroes: heroes}) ))
            })
        )
        
    }); 

    CreateHero$ = createEffect(() =>{
        
        return this.actions$.pipe(
            ofType(CreateHero),
            concatMap((action) => {
                return this.heroService
                .addHero(action.hero)
                .pipe(map((hero) => CreateHeroAPI({hero}) ))
            })
        )
        
    });

    UpdateHero$ = createEffect(() =>{
        
        return this.actions$.pipe(
            ofType(UpdateHero),
            concatMap((action) => {
                return this.heroService
                .updateHero(action.changes)
                .pipe(map((hero) => UpdateHeroAPI({hero}) ))
            })
        )
        
    });

    DeleteHero$ = createEffect(() =>{
        
        return this.actions$.pipe(
            ofType(DeleteHero),
            mergeMap((action) => {
                return this.heroService
                .excluirHeroi(Number(action.heroId))
                .pipe(map((hero) => UpdateHeroAPI({hero}) ))
            })
        )
        
    });

}