import { TestBed } from '@angular/core/testing';

import { HttpjsonplaceholderService } from './httpjsonplaceholder.service';

describe('HttpjsonplaceholderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpjsonplaceholderService = TestBed.get(HttpjsonplaceholderService);
    expect(service).toBeTruthy();
  });
});
