import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatComponent } from './wheat.component';

describe('WheatComponent', () => {
  let component: WheatComponent;
  let fixture: ComponentFixture<WheatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
