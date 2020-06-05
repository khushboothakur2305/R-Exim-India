import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicesDisplayComponent } from './spices-display.component';

describe('SpicesDisplayComponent', () => {
  let component: SpicesDisplayComponent;
  let fixture: ComponentFixture<SpicesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpicesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpicesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
