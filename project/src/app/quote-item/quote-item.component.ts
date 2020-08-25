import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/Quotes';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input() quote: Quotes;
  

  constructor() { }

  ngOnInit(): void {
 }
 onToggle(quote){
   console.log('toggle');
 }
 onDelete(quote){
   console.log('delete');
 }


  }

