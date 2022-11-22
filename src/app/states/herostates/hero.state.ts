import { NgModule } from '@angular/core';
import { ActionReducerMap, createFeature, createFeatureSelector, MetaReducer, StoreModule } from '@ngrx/store';
import * as fromHeroes from './hero.reducer';

export const FEATURE_KEY = 'shared-heroes';


export interface State {}
export const reducers: ActionReducerMap<State> = {};
export const metaReducers: MetaReducer<State>[] = [];


@NgModule({
    imports: [StoreModule.forFeature(FEATURE_KEY, reducers, {metaReducers})],
});

export class SharedStateHeroesModule {}

export const selectSharedHeroesState = createFeatureSelector<State>(FEATURE_KEY);