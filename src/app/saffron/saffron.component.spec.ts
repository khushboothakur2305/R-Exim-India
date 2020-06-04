import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffronComponent } from './saffron.component';

describe('SaffronComponent', () => {
  let component: SaffronComponent;
  let fixture: ComponentFixture<SaffronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaffronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaffronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
