import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component'
import { LikeComponent } from './like/like.component'

const routes: Routes = [{
  path: '',
  component: QuotesComponent
}, { 
  path: 'quotes/:id',
  component: LikeComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
