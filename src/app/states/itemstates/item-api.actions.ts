import { createAction, props } from "@ngrx/store";

export const getAllRegisters = createAction(
    '[Item API] Get all Items',
    props<{ registers: Item[] }>()
);

export const createNewItem = createAction(
    '[Item API] Create New item',
    props<{ item: Item }>()
);

export const UpdateItem = createAction(
    '[Item API] Update item',
    props<{ item: Item }>()
);

export const DeleteItem = createAction(
    '[Item API] Delete item',
    props<{ itemId: string }>()
);

export const SelectItem = createAction (
    '[Item API] Select a Item',
    props<{ itemId: string}>()
)