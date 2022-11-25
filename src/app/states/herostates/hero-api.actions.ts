import { createAction, props } from "@ngrx/store";
import { Hero } from "src/app/Entidades/Hero";

export const getAllHeroes = createAction (
    '[Heroes API] get all heroes ', 
    props<{ heroes:  Hero[]}>()
)

export const DeleteHeroAPI = createAction (
    '[Hero API] Delete Hero',
     props<{heroId: string}>()
)

export const CreateHeroAPI = createAction (
    '[Hero API] Create Hero',
     props<{hero: Hero}>()
)

export const UpdateHeroAPI = createAction (
    '[Hero API] Update Hero',
     props<{hero: Hero}>()
)