import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalBasmatiComponent } from './traditional-basmati.component';

describe('TraditionalBasmatiComponent', () => {
  let component: TraditionalBasmatiComponent;
  let fixture: ComponentFixture<TraditionalBasmatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalBasmatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalBasmatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
