import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GujratiPapdiComponent } from './gujrati-papdi.component';

describe('GujratiPapdiComponent', () => {
  let component: GujratiPapdiComponent;
  let fixture: ComponentFixture<GujratiPapdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GujratiPapdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GujratiPapdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
