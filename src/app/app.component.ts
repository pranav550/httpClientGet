import { BookService } from './book.service';
import { Component } from '@angular/core';
import {Book} from "./book";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpClientGet';
  softBooks:Book[];
  constructor(private bookService:BookService){}

  ngOnInit(){
this.getSoftBook()
  }

  getSoftBook(){
    this.bookService.getBookFromStore().subscribe(books=>this.softBooks=books)
  }
}
