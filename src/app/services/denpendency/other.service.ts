import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor() { }

  getValue() {
    return 100;
  }
}
