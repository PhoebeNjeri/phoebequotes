import { Component } from '@angular/core';
import { Quotes } from './Quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'project';
 }
 {
   Quote: Quotes[''] = [
    new Quotes(1, 'Be yourself everyone else is already taken', 'description:quote by me,'),
    new Quotes(2,'Be the change that you wish to see in the world', 'description:quote by me,')
];
}
 
