import { TestBed, inject } from '@angular/core/testing';

import { VendorServiesService } from './vendor-servies.service';

describe('VendorServiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorServiesService]
    });
  });

  it('should be created', inject([VendorServiesService], (service: VendorServiesService) => {
    expect(service).toBeTruthy();
  }));
});
