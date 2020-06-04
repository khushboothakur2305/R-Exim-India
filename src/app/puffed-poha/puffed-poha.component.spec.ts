import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PUFFEDPOHAComponent } from './puffed-poha.component';

describe('PUFFEDPOHAComponent', () => {
  let component: PUFFEDPOHAComponent;
  let fixture: ComponentFixture<PUFFEDPOHAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PUFFEDPOHAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PUFFEDPOHAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
