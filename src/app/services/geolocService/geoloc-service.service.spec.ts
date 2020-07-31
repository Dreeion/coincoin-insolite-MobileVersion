import { TestBed } from '@angular/core/testing';

import { GeolocServiceService } from './geoloc-service.service';

describe('GeolocServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeolocServiceService = TestBed.get(GeolocServiceService);
    expect(service).toBeTruthy();
  });
});
