import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniKachoriComponent } from './mini-kachori.component';

describe('MiniKachoriComponent', () => {
  let component: MiniKachoriComponent;
  let fixture: ComponentFixture<MiniKachoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniKachoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniKachoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
