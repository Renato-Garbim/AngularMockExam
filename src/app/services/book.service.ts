import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../Entidades/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { 

  }

  url = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';

  getBooks(): Observable<Array<Book>> {
    
    return this.http.get<{items: Book[]}>(this.url).pipe(
      map((books) => books.items || []));

  }

}
