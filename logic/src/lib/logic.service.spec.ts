import { TestBed } from '@angular/core/testing';

import { LogicService } from './logic.service';

describe('LogicService', () => {
  let service: LogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it.each([[[1, 2], 3],
    [[2, 3], 5],
    [[3, 4], 7],
    [[-1, -2], -3]])('should sum passed arguments array', (summands, result) => {
    expect(service.sum(summands)).toEqual(result);
  });
});
