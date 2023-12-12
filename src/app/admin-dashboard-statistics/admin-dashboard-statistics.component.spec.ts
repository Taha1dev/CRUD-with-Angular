import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardStatisticsComponent } from './admin-dashboard-statistics.component';

describe('AdminDashboardStatisticsComponent', () => {
  let component: AdminDashboardStatisticsComponent;
  let fixture: ComponentFixture<AdminDashboardStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardStatisticsComponent]
    });
    fixture = TestBed.createComponent(AdminDashboardStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
