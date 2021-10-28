import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { FAQComponent } from './faq/faq.component';
import { AppointComponent } from './appoint/appoint.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'about', component: AboutpageComponent},
  {path:'faq', component: FAQComponent},
  {path:'appoint', component: AppointComponent},
  //{path:'', component:HomepageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutpageComponent,
    FAQComponent,
    AppointComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
