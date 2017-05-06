import { TestBed, inject } from '@angular/core/testing';

import { AdministrationService } from './administration.service';

describe('AdministrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministrationService]
    });
  });

  it('should ...', inject([AdministrationService], (service: AdministrationService) => {
    expect(service).toBeTruthy();
  }));
});
