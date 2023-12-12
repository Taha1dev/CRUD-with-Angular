import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransferComplaintPageComponent } from './admin-transfer-complaint-page.component';

describe('AdminTransferComplaintPageComponent', () => {
  let component: AdminTransferComplaintPageComponent;
  let fixture: ComponentFixture<AdminTransferComplaintPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTransferComplaintPageComponent]
    });
    fixture = TestBed.createComponent(AdminTransferComplaintPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
