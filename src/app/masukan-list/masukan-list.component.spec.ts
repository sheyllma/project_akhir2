/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MasukanListComponent } from './masukan-list.component';

describe('MasukanListComponent', () => {
  let component: MasukanListComponent;
  let fixture: ComponentFixture<MasukanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasukanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasukanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
