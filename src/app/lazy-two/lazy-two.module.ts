import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LazyTwoComponent } from './lazy-two.component';
import { LazyTwoRoutingModule } from './lazy-two-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyTwoRoutingModule
  ],
  declarations: [
    LazyTwoComponent
  ]
})
export class LazyTwoModule { }
