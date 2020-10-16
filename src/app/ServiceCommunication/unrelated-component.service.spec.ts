import { TestBed } from '@angular/core/testing';

import { UnrelatedComponentService } from './unrelated-component.service';

describe('UnrelatedComponentService', () => {
  let service: UnrelatedComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnrelatedComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
