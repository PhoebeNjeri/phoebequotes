import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/Quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[];


  constructor() { }

  ngOnInit() {
    this.quotes = [
      {
        id:1,
        title: 'quote one',
      },
      {
        id:2,
        title: 'quote two',
      },
      {
        id:3,
        title: 'quote three',
      }
    ]
  

}
}
