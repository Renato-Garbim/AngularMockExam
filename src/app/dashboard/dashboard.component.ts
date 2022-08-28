import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../Entidades/Hero';
import { BookService } from '../services/book.service';
import { HeroService } from '../services/hero.service';
import { addBook, removeBook, retrievedBookList } from '../state/books.action';
import { selectBookCollection, selectBooks } from '../state/books.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private heroService: HeroService, private booksService: BookService, private store: Store) { }

  ngOnInit(): void {
    this.getHeroes();
    
    this.booksService
    .getBooks()
    .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }


  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(x => this.heroes = x.slice(0, 4));
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }


}
