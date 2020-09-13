import { TestBed } from '@angular/core/testing';

import { BitcoinService } from './bitcoin-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BitcoinServiceService', () => {
  let service: BitcoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BitcoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
