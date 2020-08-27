import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../Quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quote = new Quotes();
  
  @Output() addQuotes = new EventEmitter<Quotes>()
  
  constructor() {}
  
  submitQuotes(form) {
    // Emit the event.
    this.addQuotes.emit(
      // Create a new quote.
      new Quotes(null, form.title, form.author, form.submitter)
    );
  }

  ngOnInit(): void {}
}
