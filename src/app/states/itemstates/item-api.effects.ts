import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, exhaustMap, map, mergeMap } from "rxjs";
import { enterItemPage } from "./item-page.actions";

@Injectable()

export class ItemApiEffects {

    constructor(private actions$: Actions){}

    // loadItems$ = createEffect(() =>{
        
    //     return this.actions$.pipe(
    //         ofType(enterItemPage),
    //         exhaustMap(() => {
    //             return this.heroService
    //             .getHeroes()
    //             .pipe(map((heroes) => getAllHeroes({heroes: heroes}) ))
    //         })
    //     )
        
    // }); 


}