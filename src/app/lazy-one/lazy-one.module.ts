import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LazyOneComponent } from './lazy-one.component';
import { LazyOneRoutingModule } from './lazy-one-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyOneRoutingModule
  ],
  declarations: [
    LazyOneComponent
  ]
})
export class LazyOneModule { }
