import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logService:LoggerService) { }

  addition(a: number, b: number) {
    this.logService.log("Performing Addition of 2 numbers");
    return a + b;
  }
}
