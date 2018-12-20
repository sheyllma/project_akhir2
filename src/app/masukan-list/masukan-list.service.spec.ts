/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MasukanListService } from './masukan-list.service';

describe('Service: MasukanList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasukanListService]
    });
  });

  it('should ...', inject([MasukanListService], (service: MasukanListService) => {
    expect(service).toBeTruthy();
  }));
});
