import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastyNutsComponent } from './tasty-nuts.component';

describe('TastyNutsComponent', () => {
  let component: TastyNutsComponent;
  let fixture: ComponentFixture<TastyNutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastyNutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastyNutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
