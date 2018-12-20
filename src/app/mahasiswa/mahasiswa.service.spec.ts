/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MahasiswaService } from './mahasiswa.service';

describe('Service: Mahasiswa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MahasiswaService]
    });
  });

  it('should ...', inject([MahasiswaService], (service: MahasiswaService) => {
    expect(service).toBeTruthy();
  }));
});
