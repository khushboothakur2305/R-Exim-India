import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhakraComponent } from './khakra.component';

describe('KhakraComponent', () => {
  let component: KhakraComponent;
  let fixture: ComponentFixture<KhakraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhakraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhakraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
