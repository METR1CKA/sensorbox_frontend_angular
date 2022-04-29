import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecensiaComponent } from './precensia.component';

describe('PrecensiaComponent', () => {
  let component: PrecensiaComponent;
  let fixture: ComponentFixture<PrecensiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecensiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecensiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
