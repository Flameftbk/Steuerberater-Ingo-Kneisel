import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungswesenPage } from './rechnungswesen.page';

describe('RechnungswesenPage', () => {
  let component: RechnungswesenPage;
  let fixture: ComponentFixture<RechnungswesenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechnungswesenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechnungswesenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
