import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { BorderHighlightDirective } from './border-highlight.directive';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTwoComponent,
    BorderHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
