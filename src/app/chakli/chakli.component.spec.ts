import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakliComponent } from './chakli.component';

describe('ChakliComponent', () => {
  let component: ChakliComponent;
  let fixture: ComponentFixture<ChakliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChakliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
