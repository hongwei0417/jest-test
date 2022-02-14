test('toBe 和 toEqual 差別', () => {
  const obj = { one: 1 };
  expect(obj).toBe(obj);
  // expect(obj).toBe({ one: 1 }); //fail
  expect(obj).toEqual({ one: 1 });
});

test('not 用法', () => {
  expect(1).not.toBe(2);
});

test('null 各種判斷', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero 各種判斷', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('數字測試', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);

  const floatNumber = 0.1 + 0.2;
  // expect(floatNumber).toBe(0.3); // rounding error
  expect(floatNumber).toBeCloseTo(0.3);
});

test('字串測試', () => {
  expect('team').not.toMatch(/I/);
  expect('Christoph').toMatch(/stop/);
});

test('陣列測試', () => {
  const testArray = ['a', 'b', 'c', 'd', 'e'];
  expect(testArray).toContain('c');
  expect(new Set(testArray)).toContain('e');
});

test('拋錯測試', () => {
  function compileAndroidCode() {
    throw new Error('我錯了');
  }
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('我錯了');
  expect(() => compileAndroidCode()).toThrow(/錯/);
});

test('非同步測試', async () => {
  async function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Good');
      }, 2000);
    });
  }

  const data = await fetchData();
  expect(data).toBe('Good');
  await expect(fetchData()).resolves.toBe('Good');
});

describe('描述某種情境', () => {
  beforeEach(() => {
    console.log('每個測試前做一次');
  });

  afterEach(() => {
    console.log('每個測試後做一次');
  });

  beforeAll(() => {
    console.log('所有個測試前做一次');
  });

  afterAll(() => {
    console.log('所有個測試後做一次');
  });

  test('情境內的測試', () => {
    expect(true).toBeTruthy();
  });
});

// test.only('只執行這個測試，不執行其他', () => {
//   expect(true).toBeTruthy();
// });

test('Mock function', () => {
  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCallback);

  console.log(mockCallback.mock.calls);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});
