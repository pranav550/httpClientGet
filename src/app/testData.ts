import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{

    constructor() { }
    createDb(){
  
     let  bookDetails =  [
      {  id:  100, name:"Mosh", category:"Angular"},
      {  id:  101, name:"Mosh", category:"Angular"},
      {  id:  102, name:"Mosh", category:"Angular"}
     ];
  
     return {books:bookDetails};
  
    }
  }