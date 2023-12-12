import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyComplaintsComponent } from './user-my-complaints.component';

describe('UserMyComplaintsComponent', () => {
  let component: UserMyComplaintsComponent;
  let fixture: ComponentFixture<UserMyComplaintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMyComplaintsComponent]
    });
    fixture = TestBed.createComponent(UserMyComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
