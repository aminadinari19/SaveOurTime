import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { FAQComponent } from './faq/faq.component';
import { AppointComponent } from './appoint/appoint.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutpageComponent,
    FAQComponent,
    AppointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
