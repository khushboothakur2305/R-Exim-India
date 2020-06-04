import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Basmati1509Component } from './basmati1509.component';

describe('Basmati1509Component', () => {
  let component: Basmati1509Component;
  let fixture: ComponentFixture<Basmati1509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Basmati1509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Basmati1509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
