import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasmatiComponent } from './basmati.component';

describe('BasmatiComponent', () => {
  let component: BasmatiComponent;
  let fixture: ComponentFixture<BasmatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasmatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasmatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
