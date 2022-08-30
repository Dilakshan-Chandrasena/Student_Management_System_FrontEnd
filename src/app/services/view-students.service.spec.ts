import { TestBed } from '@angular/core/testing';

import { ViewStudentsService } from './view-students.service';

describe('ViewStudentsService', () => {
  let service: ViewStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
