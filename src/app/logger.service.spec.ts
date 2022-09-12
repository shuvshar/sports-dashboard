import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

fdescribe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have message at the starting', () => {
    expect(service.messages.length).toBe(0);
  });

  it('should add message when log called', () => {
    service.log('message');
    expect(service.messages.length).toBe(1);
  });
});
