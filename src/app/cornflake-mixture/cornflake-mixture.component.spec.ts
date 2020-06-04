import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornflakeMixtureComponent } from './cornflake-mixture.component';

describe('CornflakeMixtureComponent', () => {
  let component: CornflakeMixtureComponent;
  let fixture: ComponentFixture<CornflakeMixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornflakeMixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornflakeMixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
