import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugandhaRiceComponent } from './sugandha-rice.component';

describe('SugandhaRiceComponent', () => {
  let component: SugandhaRiceComponent;
  let fixture: ComponentFixture<SugandhaRiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugandhaRiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugandhaRiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
