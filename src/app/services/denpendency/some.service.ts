import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SomeService {
  constructor() {}

  getValue() {
    return 100;
  }
}
