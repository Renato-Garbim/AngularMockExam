import { createAction, props } from "@ngrx/store";

export const enter = createAction ('[Admin Item Page] Enter');

export const createNewItem = createAction(
    '[Admin Item Page] Create New item',
    props<{ item: Item }>()
);

export const UpdateItem = createAction(
    '[Admin Item Page] Update item',
    props<{ item: Item }>()
);

export const DeleteItem = createAction(
    '[Admin Item Page] Delete item',
    props<{ itemId: string }>()
);

export const SelectItem = createAction (
    '[Admin Item Page] Select a Item',
    props<{ itemId: string}>()
)