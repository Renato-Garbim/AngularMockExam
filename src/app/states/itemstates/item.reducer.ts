import { createReducer, createSelector, on } from "@ngrx/store";
import { getAllItemRegisters } from "./item-api.actions";
import { enterItemPage, SelectItem } from "./item-page.actions";

export interface ItemState {
    collection: Item[];
    activeItemId: string | null;
}

export const initialState: ItemState = {
    collection: [],
    activeItemId: null
}

export const itemReducer = createReducer(
    initialState,
    on(enterItemPage, (state) => {

        return {
            ...state,
            activeItemId: null
        }

    }),
    on(SelectItem, (state, action)=> {
        return {
            ...state,
            activeItemId: action.itemId
        }
    }),
    on(getAllItemRegisters, (state, action) => {
        return {
            //...state,            
            collection: action.registers,
            activeItemId: null
        }
    })
)
