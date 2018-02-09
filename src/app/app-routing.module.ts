import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyOneModule } from './lazy-one/lazy-one.module';
import { LazyTwoModule } from './lazy-two/lazy-two.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => LazyOneModule
  },
  {
    path: 'lazy2',
    loadChildren: () => LazyTwoModule
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
