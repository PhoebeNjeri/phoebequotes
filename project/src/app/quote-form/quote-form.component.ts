import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../Quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quote = new Quotes(0,"","",new Date());
  
  @Output() addQuotes = new EventEmitter<Quotes>()
  
  constructor() {}
  
  submitQuotes(form) {
    console.log(form);
    this.addQuotes.emit(
      new Quotes(
        form.id, form.title, 
        form.description, form.completeDate, 
        form.submitter, form.author
      )
    );
  }

  ngOnInit(): void {}
}
