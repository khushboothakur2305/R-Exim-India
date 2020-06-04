import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rh10Component } from './rh10.component';

describe('Rh10Component', () => {
  let component: Rh10Component;
  let fixture: ComponentFixture<Rh10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rh10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rh10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
