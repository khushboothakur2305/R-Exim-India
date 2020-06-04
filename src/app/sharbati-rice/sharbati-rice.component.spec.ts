import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharbatiRiceComponent } from './sharbati-rice.component';

describe('SharbatiRiceComponent', () => {
  let component: SharbatiRiceComponent;
  let fixture: ComponentFixture<SharbatiRiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharbatiRiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharbatiRiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
