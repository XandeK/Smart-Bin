import { TestBed } from '@angular/core/testing';

import { UbidotsService } from './ubidots.service';

describe('UbidotsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UbidotsService = TestBed.get(UbidotsService);
    expect(service).toBeTruthy();
  });
});
