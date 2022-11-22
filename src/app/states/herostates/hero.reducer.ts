import { createReducer, on } from "@ngrx/store";
import { Hero } from "src/app/Entidades/Hero";
import { enter, SelectHero } from "./hero-page-actions";

export interface State {
    collection: Hero[];
    activeHeroId: string | null;
}

export const initialState: State = {
    collection: [],
    activeHeroId: null
}

export const reducer = createReducer(
    initialState,
    on(enter, (state) => {

        return {
            ...state,
            activeHeroId: null
        }

    }),
    on(SelectHero, (state, action)=> {
        return {
            ...state,
            activeHeroId: action.heroId
        }
    })
)
