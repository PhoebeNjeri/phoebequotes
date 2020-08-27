import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteItemComponent,
    QuoteFormComponent,
    StrikethroughDirective,
    DateCountPipe,
    LikeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
