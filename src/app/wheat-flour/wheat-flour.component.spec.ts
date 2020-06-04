import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatFlourComponent } from './wheat-flour.component';

describe('WheatFlourComponent', () => {
  let component: WheatFlourComponent;
  let fixture: ComponentFixture<WheatFlourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatFlourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatFlourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
