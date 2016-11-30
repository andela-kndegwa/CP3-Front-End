/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToggleService } from './toggle.service';

describe('ToggleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleService]
    });
  });

  it('should ...', inject([ToggleService], (service: ToggleService) => {
    expect(service).toBeTruthy();
  }));
});
