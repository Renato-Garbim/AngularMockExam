import { createAction, props } from "@ngrx/store";
import { Hero } from "src/app/Entidades/Hero";

export const enter = createAction ('[Hero Page] Enter');

export const SelectHero = createAction (
    '[Heroes Page] Select a Hero',
    props<{ heroId: string}>()
)

export const CreateHero = createAction (
    '[Hero Page] Create a new Hero',
    props<{ hero: Hero}>() // Here we will put all the properties required to create a new hero
)

export const UpdateHero = createAction (
    '[Hero Page] Update Hero',
    props<{heroId: string; changes: Hero;}>()
)

export const DeleteHero = createAction (
    '[Hero Page] Delete Hero',
     props<{heroId: string}>()
)