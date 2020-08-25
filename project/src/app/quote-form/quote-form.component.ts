import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../Quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuotes = new Quotes(0,',' ,',')
  @Output() addQuotes = new EventEmitter<Quotes>();
  submitQuotes(form){
    console.log(form);
    this.addQuotes.emit(new Quotes(form.auother,form.submiter,form.quote,));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
