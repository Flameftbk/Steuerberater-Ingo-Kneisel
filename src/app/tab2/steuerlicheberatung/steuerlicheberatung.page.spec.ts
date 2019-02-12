import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteuerlicheberatungPage } from './steuerlicheberatung.page';

describe('SteuerlicheberatungPage', () => {
  let component: SteuerlicheberatungPage;
  let fixture: ComponentFixture<SteuerlicheberatungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteuerlicheberatungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteuerlicheberatungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
