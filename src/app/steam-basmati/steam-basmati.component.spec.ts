import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamBasmatiComponent } from './steam-basmati.component';

describe('SteamBasmatiComponent', () => {
  let component: SteamBasmatiComponent;
  let fixture: ComponentFixture<SteamBasmatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteamBasmatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamBasmatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
