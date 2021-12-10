import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutpageComponent} from './aboutpage/aboutpage.component';
import {AppointComponent} from './appoint/appoint.component';
import {FAQComponent} from './faq/faq.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ReportComponent } from './report/report.component';

const routes: Routes = [
  {path: 'about', component: AboutpageComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'appoint', component: AppointComponent},
  {path: '', component: HomepageComponent},
  {path: 'report', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
