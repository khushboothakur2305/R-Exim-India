import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeethiPapdiComponent } from './meethi-papdi.component';

describe('MeethiPapdiComponent', () => {
  let component: MeethiPapdiComponent;
  let fixture: ComponentFixture<MeethiPapdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeethiPapdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeethiPapdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
