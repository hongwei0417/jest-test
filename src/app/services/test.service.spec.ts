import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

describe('TestService', () => {
  let service: TestService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    service = TestBed.inject(TestService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('測試純函式', () => {
    const spy = jest.spyOn(service, 'getValue');
    service.getValue();
    service.getValue();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveReturned();
    expect(spy).toHaveReturnedWith('Good');
    expect(spy.mock.results[0].value).toBe('Good');
  });

  it('測試成功Http', (done) => {
    const spy = jest.spyOn(service, 'fetchSuccess');

    service.fetchSuccess().subscribe({
      next: (data) => {
        expect(spy).toBeCalled();
        done();
      },
    });
  });

  it('測試失敗Http', (done) => {
    const spy = jest.spyOn(service, 'fetchError');

    service.fetchError().subscribe({
      error: (error) => {
        expect(spy).toBeCalled();
        done();
      },
    });
  });

  describe('多種判斷狀況', () => {
    it('狀況1', () => {
      expect(service.doWithCondition(1)).toBe(1 + 10);
    });

    it('狀況2', () => {
      expect(service.doWithCondition(2)).toBe(2 + 20);
    });

    it('狀況3', () => {
      expect(service.doWithCondition(3)).toBe(true);
    });

    it('不符合任何狀況', () => {
      expect(service.doWithCondition(4)).toBeNull();
    });
  });

  describe('service變數影響範圍測試', () => {
    it('將value設成100', () => {
      service.value = 100;
      expect(service.value).not.toBe(0);
    });

    it('檢查value是否被改變', () => {
      expect(service.value).toBe(0);
    });
  });
});
