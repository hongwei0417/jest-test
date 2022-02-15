import { SomeService } from './some.service';
import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';
import { OtherService } from './other.service';

interface MockService {
  getValue: jest.Mock;
}

describe('MainService', () => {
  let service: MainService;
  let someService: SomeService;
  let mockService: MockService;
  let someSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: OtherService,
          useValue: {
            getValue: jest.fn(),
          },
        },
        SomeService,
      ],
    });
    service = TestBed.inject(MainService);
    someService = TestBed.inject(SomeService);
    mockService = TestBed.inject(OtherService) as MockService;
  });

  it('呼叫依賴服務 => 使用Mock物件', () => {
    mockService.getValue.mockReturnValue(123);
    const value = service.callOtherService();
    expect(mockService.getValue).toHaveBeenCalled();
    expect(value).toBe(123 + 500);
  });

  it('呼叫依賴服務 => 使用Spy', () => {
    someSpy = jest.spyOn(someService, 'getValue');
    someSpy.mockReturnValue(123);
    const value = service.callSomeService();
    expect(someSpy).toHaveBeenCalled();
    expect(value).toBe(123 + 500);
  });

  it('mock、spy影響範圍測試', () => {
    const value1 = service.callOtherService();
    const value2 = service.callSomeService();

    //mock
    expect(value1).not.toBe(123 + 500);
    expect(mockService.getValue).toBeCalledTimes(1);

    //spy
    expect(value2).not.toBe(123 + 500);
    expect(someSpy).toBeCalledTimes(1);
  });

  describe('mock和spy使用情境', () => {
    it('mock不需要原來的實作', () => {
      mockService.getValue.mockReturnValueOnce(10).mockReturnValue(123);
      expect(service.callOtherService()).toBe(10 + 500);
      expect(service.callOtherService()).toBe(123 + 500);
      expect(service.callOtherService()).toBe(123 + 500);
      mockService.getValue.mockReset();
      expect(service.callOtherService()).toBeFalsy();
    });

    it('spy需要原來的實作', () => {
      const spy = jest.spyOn(someService, 'getValue');
      expect(service.callSomeService()).not.toBe(123 + 500);
      spy.mockReturnValue(123);
      expect(service.callSomeService()).toBe(123 + 500);
      spy.mockImplementation(() => 200);
      expect(service.callSomeService()).toBe(200 + 500);
      spy.mockRestore();
      expect(service.callSomeService()).not.toBe(123 + 500);
    });
  });
});
