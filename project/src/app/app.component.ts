import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
project:string[];

constructor(){
  this.project = ['create quote', 'upvote and downvote quote', 'delete quote', 'number of upvotes and downvotes']
  
}
}
