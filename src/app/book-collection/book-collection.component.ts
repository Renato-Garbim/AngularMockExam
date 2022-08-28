import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../Entidades/Book';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();

}
