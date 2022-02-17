import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, mapTo, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  value = 0;

  constructor(public httpClient: HttpClient) {}

  getValue(): string {
    return 'Good';
  }

  fetchSuccess() {
    return of(1).pipe(mapTo('Good'));
  }

  fetchError() {
    return this.httpClient.get('https://abc').pipe(throwError);
  }

  callHttpClient() {
    return this.httpClient.get('https://abc');
  }

  doWithCondition(value: number) {
    if (value === 1) {
      return 1 + 10;
    }
    if (value === 2) {
      return 2 + 20;
    }
    if (value === 3) {
      return true;
    }
    return null;
  }
}
