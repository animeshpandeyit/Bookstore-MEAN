import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksCreateComponent } from './books-create/books-create.component';

const routes: Routes = [
  {
    path: ' ',
    redirectTo: 'register',
    pathMatch: 'full',
  },

  {
    path: 'register',
    component: BooksCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
