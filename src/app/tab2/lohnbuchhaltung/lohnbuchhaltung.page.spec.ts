import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LohnbuchhaltungPage } from './lohnbuchhaltung.page';

describe('LohnbuchhaltungPage', () => {
  let component: LohnbuchhaltungPage;
  let fixture: ComponentFixture<LohnbuchhaltungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LohnbuchhaltungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LohnbuchhaltungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
