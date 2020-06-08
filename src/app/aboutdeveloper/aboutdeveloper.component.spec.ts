import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdeveloperComponent } from './aboutdeveloper.component';

describe('AboutdeveloperComponent', () => {
  let component: AboutdeveloperComponent;
  let fixture: ComponentFixture<AboutdeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutdeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutdeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
