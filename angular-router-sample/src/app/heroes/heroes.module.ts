import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroesRoutingModule } from './heroes-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
