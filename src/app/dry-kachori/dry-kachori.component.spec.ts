import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DryKachoriComponent } from './dry-kachori.component';

describe('DryKachoriComponent', () => {
  let component: DryKachoriComponent;
  let fixture: ComponentFixture<DryKachoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryKachoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DryKachoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
