import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AppointComponent } from './appoint/appoint.component';
import { FAQComponent } from './faq/faq.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'about', component: AboutpageComponent},
  {path:'faq', component: FAQComponent},
  {path:'appoint', component: AppointComponent},
  {path:'', component: HomepageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
