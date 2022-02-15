import { SomeService } from './some.service';
import { OtherService } from './other.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(
    private otherService: OtherService,
    private someService: SomeService
  ) {}

  callOtherService() {
    return this.otherService.getValue() + 500;
  }

  callSomeService() {
    return this.someService.getValue() + 500;
  }
}
