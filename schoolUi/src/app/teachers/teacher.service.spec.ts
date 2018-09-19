import { TestBed, inject } from '@angular/core/testing';

import { TeacherService } from './teacher.service';

describe('TeacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentService]
    });
  });

  it('should be created', inject([StudentService], (service: StudentService) => {
    expect(service).toBeTruthy();
  }));
});
