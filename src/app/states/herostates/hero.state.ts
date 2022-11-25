import { NgModule } from '@angular/core';
import { ActionReducerMap, createFeature, createFeatureSelector, createSelector, MetaReducer, StoreModule } from '@ngrx/store';
import * as fromHeroes from './hero.reducer';

export const FEATURE_KEY = 'shared-heroes';


export interface State {
    heroes: fromHeroes.State
}
export const reducers: ActionReducerMap<State> = {
    heroes: fromHeroes.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];


@NgModule({
    imports: [StoreModule.forFeature(FEATURE_KEY, reducers, {metaReducers})],
})

export class SharedStateHeroesModule {}

export const selectSharedHeroesState = createFeatureSelector<State>(FEATURE_KEY);

export const selectHeroesState  = createSelector(
    selectSharedHeroesState,
    (sharedHeroesFeatureState) => sharedHeroesFeatureState?.heroes 
);

export const selectAllHeroes = createSelector(
    selectHeroesState,
    fromHeroes.selectAll
)