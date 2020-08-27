import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Quotes } from 'src/app/Quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  quotes: Quotes[] = [
    new Quotes(
      1, 'Be who you are and say what you feel, because those who mind dont matter and those who matter dont mind', 
      'Walter', 'Submitted by phoebe', new Date(2020, 3, 14)
    ),
    new Quotes(
      2, 'Be the change that you wish to see in the world', 
      'Myles', 'Submitted by phoebe', new Date(2019, 6, 9)
    )
  ];

  constructor(private router: Router) {}

  toggleDetails(id: number) {
    // Navigate to the quote details.
    //
  }
  
  addNewQuotes(quotes) {    
    // Create the new ID.
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength + 1;

    // Convert the incoming date string into a date object.
    quotes.completeDate = new Date(quotes.completeDate)

    // Add the new quote to the list of quotes.
    this.quotes.push(quotes)
  }
  
  deleteQuotes(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].id}?`)
    }
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
}
