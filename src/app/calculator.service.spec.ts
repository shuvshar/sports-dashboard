import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

fdescribe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return sum of numbers using spyOn', () => {
    let logService = new LoggerService();
    const cal = new CalculatorService(logService);
    spyOn(logService, 'log');
    expect(cal.addition(1, 3)).toBe(4);
    expect(logService.log).toHaveBeenCalledTimes(1);
  });

  it('should return sum of numbers using mocks', () => {
    let mockLogService = jasmine.createSpyObj('logService', ['log']);
    const cal = new CalculatorService(mockLogService);
    expect(cal.addition(1, 3)).toBe(4);
    expect(mockLogService.log).toHaveBeenCalledTimes(1);
  });

});
