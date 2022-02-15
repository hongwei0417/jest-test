import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonElement: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('按鈕測試', () => {
    beforeEach(() => {
      const buttonDebugElement = fixture.debugElement.query(By.css('button'));
      buttonElement = buttonDebugElement.nativeElement;
    });

    it('點擊按鈕是否觸發事件', () => {
      const spy = jest.spyOn(component, 'change');
      buttonElement.click();
      expect(spy).toHaveBeenCalled();
    });

    it('點擊按鈕是否改變狀態', () => {
      buttonElement.click();
      expect(component.data).toBeTruthy();
    });
  });
});
