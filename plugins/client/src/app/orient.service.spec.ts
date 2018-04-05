import { TestBed, inject } from '@angular/core/testing';

import { OrientService } from './orient.service';

describe('OrientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrientService]
    });
  });

  it('should be created', inject([OrientService], (service: OrientService) => {
    expect(service).toBeTruthy();
  }));
});
