import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

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

  it('1', () => {
    expect(1 == 1).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('2', () => {
    expect(1 == 1).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('3', () => {
    expect(1 == 1).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('4', () => {
    expect(1 == 1).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
