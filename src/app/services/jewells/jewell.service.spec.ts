import { TestBed } from '@angular/core/testing';

import { JewellService } from './jewell.service';

describe('JewellService', () => {
  let service: JewellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JewellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
