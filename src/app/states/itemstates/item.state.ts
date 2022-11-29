import { NgModule } from '@angular/core';
import { ActionReducerMap, createFeature, createFeatureSelector, createSelector, MetaReducer, StoreModule } from '@ngrx/store';
import * as fromItems from './item.reducer';

export const FEATURE_KEY = 'shared-items';

export interface State {
    items: fromItems.ItemState
}
export const reducers: ActionReducerMap<State> = {
    items: fromItems.itemReducer,
};

export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
    imports: [StoreModule.forFeature(FEATURE_KEY, reducers, {metaReducers})],
})

export class SharedStateItemsModule {}




