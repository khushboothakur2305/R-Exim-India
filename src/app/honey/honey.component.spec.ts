import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyComponent } from './honey.component';

describe('HoneyComponent', () => {
  let component: HoneyComponent;
  let fixture: ComponentFixture<HoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
