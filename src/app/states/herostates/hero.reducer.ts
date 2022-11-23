import { createReducer, createSelector, on } from "@ngrx/store";
import { Hero } from "src/app/Entidades/Hero";
import { getAllHeroes } from "./hero-api.actions";
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
    }),
    on(getAllHeroes, (state, action) => {
        return {
            ...state,
            collection: action.heroes,
            activeHeroId: null
        }
    })
)


export const selectAll = (state: State) => state.collection;
export const selectActiveHeroId = (state: State) => state.activeHeroId;

//Selector from ngrx , has a better perfomance 
export const selectActiveHero = createSelector(
    selectAll,
    selectActiveHeroId,
    (heroes, activeId) => {
        return heroes.find(hero => hero.id.toString() == activeId || null)
    }
)