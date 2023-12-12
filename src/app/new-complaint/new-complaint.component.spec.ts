import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComplaintComponent } from './new-complaint.component';

describe('NewComplaintComponent', () => {
  let component: NewComplaintComponent;
  let fixture: ComponentFixture<NewComplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewComplaintComponent]
    });
    fixture = TestBed.createComponent(NewComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
