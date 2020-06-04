import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharbatiWheatComponent } from './sharbati-wheat.component';

describe('SharbatiWheatComponent', () => {
  let component: SharbatiWheatComponent;
  let fixture: ComponentFixture<SharbatiWheatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharbatiWheatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharbatiWheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
