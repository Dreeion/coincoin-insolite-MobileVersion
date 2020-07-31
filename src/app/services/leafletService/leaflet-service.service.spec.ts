import { TestBed } from '@angular/core/testing';

import { LeafletServiceService } from './leaflet-service.service';

describe('LeafletServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeafletServiceService = TestBed.get(LeafletServiceService);
    expect(service).toBeTruthy();
  });
});
