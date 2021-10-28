import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointComponent } from './appoint.component';

describe('AppointComponent', () => {
  let component: AppointComponent;
  let fixture: ComponentFixture<AppointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
