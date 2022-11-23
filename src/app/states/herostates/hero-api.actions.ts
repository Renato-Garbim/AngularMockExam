import { createAction, props } from "@ngrx/store";
import { Hero } from "src/app/Entidades/Hero";

export const getAllHeroes = createAction (
    '[Heroes API] get all heroes ', 
    props<{ heroes:  Hero[]}>()
)
