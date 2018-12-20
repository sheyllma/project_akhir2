/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MahasiswaDetailComponent } from './mahasiswa-detail.component';

describe('MahasiswaDetailComponent', () => {
  let component: MahasiswaDetailComponent;
  let fixture: ComponentFixture<MahasiswaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MahasiswaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
