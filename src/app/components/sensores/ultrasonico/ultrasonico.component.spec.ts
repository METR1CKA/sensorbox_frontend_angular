import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonicoComponent } from './ultrasonico.component';

describe('UltrasonicoComponent', () => {
  let component: UltrasonicoComponent;
  let fixture: ComponentFixture<UltrasonicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltrasonicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrasonicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
