import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideWithTransition1Component } from './slide-with-transition1/slide-with-transition1.component';
import { SlideWithoutTransitionComponent } from './slide-without-transition/slide-without-transition.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideWithTransition1Component,
    SlideWithoutTransitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
