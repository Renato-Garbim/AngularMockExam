import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ItemState } from "./item.reducer";
import { FEATURE_KEY, State } from "./item.state";



export const selectAll = (state: ItemState) => {  
    return state?.collection ?? [];
}
export const selectActiveHeroId = (state: ItemState) => state.activeItemId;


export const selectSharedItemsState = createFeatureSelector<State>(FEATURE_KEY);

export const selectItemsState  = createSelector(
    selectSharedItemsState,
    (sharedItemsFeatureState) => sharedItemsFeatureState?.items
);

export const selectAllItems = createSelector(
    selectItemsState,
    selectAll
)