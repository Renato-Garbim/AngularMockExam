import { createReducer, on } from '@ngrx/store';
import { Book } from '../Entidades/Book';
import { retrievedBookList } from '../state/books.action'


export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/