import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbschlussarbeitenPage } from './abschlussarbeiten.page';

describe('AbschlussarbeitenPage', () => {
  let component: AbschlussarbeitenPage;
  let fixture: ComponentFixture<AbschlussarbeitenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbschlussarbeitenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbschlussarbeitenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
