import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsComponent } from './grains.component';

describe('GrainsComponent', () => {
  let component: GrainsComponent;
  let fixture: ComponentFixture<GrainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
