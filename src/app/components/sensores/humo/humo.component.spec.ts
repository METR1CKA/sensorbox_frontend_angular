import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumoComponent } from './humo.component';

describe('HumoComponent', () => {
  let component: HumoComponent;
  let fixture: ComponentFixture<HumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
