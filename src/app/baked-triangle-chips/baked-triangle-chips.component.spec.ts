import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakedTriangleChipsComponent } from './baked-triangle-chips.component';

describe('BakedTriangleChipsComponent', () => {
  let component: BakedTriangleChipsComponent;
  let fixture: ComponentFixture<BakedTriangleChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakedTriangleChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakedTriangleChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
