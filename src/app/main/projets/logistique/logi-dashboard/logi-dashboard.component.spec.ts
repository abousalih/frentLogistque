import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiDashboardComponent } from './logi-dashboard.component';

describe('LogiDashboardComponent', () => {
  let component: LogiDashboardComponent;
  let fixture: ComponentFixture<LogiDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogiDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
