import { Book } from './book';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/observable";

@Injectable({
  providedIn: 'root'
})
export class BookService {
 bookurl="/api/books";
  constructor(private http:HttpClient) { }
  getBookFromStore():Observable<Book[]>{
     return this.http.get<Book[]>(this.bookurl);
  }
}
