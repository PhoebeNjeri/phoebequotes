import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../Quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() addQuotes = new EventEmitter()
  quote:string
  quoteAuthor:string
  quoteSubmitter:string
  ;
  submitQuotes(form){
    console.log(form);
    this.addQuotes.emit(new Quotes(form.quoteAuthor,form.quoteSubmiter,form.quote,));
  form.quoteAuthor=''
  form.quoteSubmiter=''
  form.quote=''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
