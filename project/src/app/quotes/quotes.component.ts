import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/Quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  quotes: Quotes[] = [
    new Quotes(1, 'Be who you are and say what you feel, because those who mind dont matter and those who matter dont mind', 'description:quoted by nickiezer','new Date(2020,3,14','submitted by phoebe','walter'),
    new Quotes(2, 'Be the change that you wish to see in the world', 'description:quoted by njezzy','new Date(2019,6,9','submitted by phoebe','myles'),
  ];

  constructor() {}
  
  addNewQuotes(quotes) {
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }
  
  toggleDetails(index) {}
  
  deleteQuotes(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].id}?`)
    }
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
}
