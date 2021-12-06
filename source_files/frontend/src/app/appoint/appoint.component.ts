import {Component, OnInit} from '@angular/core';
export {}; declare global { interface Window { Calendly: any; } } 
@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.component.html',
  styleUrls: ['./appoint.component.css'],
})

export class AppointComponent implements OnInit {
  ngOnInit():void {
    window.Calendly.initInlineWidget({
      url: 'https://calendly.com/timilehinbisolaojo/appointment-1',
      parentElement: document.querySelector('.calendly-inline-widget'),
      prefill: {},
      utm: {}
    });
  }
}
