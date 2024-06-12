import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginsComponent } from './engins.component';

describe('EnginsComponent', () => {
  let component: EnginsComponent;
  let fixture: ComponentFixture<EnginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
