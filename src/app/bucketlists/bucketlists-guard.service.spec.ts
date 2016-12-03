/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BucketlistDetailService } from './bucketlists-guard.service';

describe('BucketlistsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketlistsGuardService]
    });
  });

  it('should ...', inject([BucketlistsGuardService], (service: BucketlistsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
