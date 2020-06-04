import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamkeenComponent } from './namkeen.component';

describe('NamkeenComponent', () => {
  let component: NamkeenComponent;
  let fixture: ComponentFixture<NamkeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamkeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamkeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
