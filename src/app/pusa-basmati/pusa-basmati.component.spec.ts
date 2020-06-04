import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PusaBasmatiComponent } from './pusa-basmati.component';

describe('PusaBasmatiComponent', () => {
  let component: PusaBasmatiComponent;
  let fixture: ComponentFixture<PusaBasmatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PusaBasmatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PusaBasmatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
