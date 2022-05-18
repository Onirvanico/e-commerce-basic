import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { ProductListComponentService } from './product-list.component.service';

@Component({
  selector: 'spa-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: Array<Book>;

  constructor(private bookService: ProductListComponentService) { 
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {
   
  }

}
