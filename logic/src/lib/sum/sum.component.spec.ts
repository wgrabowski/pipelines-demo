import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumComponent } from './sum.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SumComponent', () => {
  let component: SumComponent;
  let fixture: ComponentFixture<SumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumComponent],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
